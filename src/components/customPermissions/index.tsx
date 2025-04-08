import {Platform} from 'react-native';
import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  Permission,
  PermissionStatus,
} from 'react-native-permissions';

type PermissionType = 'camera' | 'microphone';

interface PermissionList {
  [key: string]: Permission;
}

const permList: PermissionList = {
  camera:
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.CAMERA
      : PERMISSIONS.IOS.CAMERA,
  microphone:
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.RECORD_AUDIO
      : PERMISSIONS.IOS.MICROPHONE,
};

const getPermCode = (code: PermissionType | null): Permission | null => {
  if (!code) return null;
  return permList[code];
};

const requestPermission = (
  perm: PermissionType,
  req: boolean,
  reqFunc?: () => void,
  allowControl?: (result: PermissionStatus) => void,
): void => {
  const permCode = getPermCode(perm);
  if (!permCode) return;

  request(permCode).then(result => {
    allowControl?.(result);
  });
};

const getPermission = (
  perm: PermissionType,
  req: boolean,
  reqFunc?: () => void,
  requestControl?: boolean,
): void => {
  const permCode = getPermCode(perm);
  if (!permCode) return;

  check(permCode)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
        case RESULTS.DENIED:
        case RESULTS.LIMITED:
        case RESULTS.BLOCKED:
          if (!req) reqFunc?.();
          if (requestControl) requestPermission(perm, req, reqFunc);
          break;
        case RESULTS.GRANTED:
          reqFunc?.();
          break;
      }
    })
    .catch(error => {
      console.error('Permission check failed:', error);
      if (!req) reqFunc?.();
    });
};

export {getPermission, type PermissionType};
