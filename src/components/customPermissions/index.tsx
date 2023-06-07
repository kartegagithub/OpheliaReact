import {Platform} from 'react-native';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
const permList = {
  camera:
    Platform.OS == 'android'
      ? PERMISSIONS.ANDROID.CAMERA
      : PERMISSIONS.IOS.CAMERA,
  microphone:
    Platform.OS == 'android'
      ? PERMISSIONS.ANDROID.RECORD_AUDIO
      : PERMISSIONS.IOS.MICROPHONE,
};
const getPermCode = code => {
  if (!code) return null;
  return permList?.[code];
};
const requestPermission = (perm, req, reqFunc, allowControl) => {
  request(getPermCode(perm)).then(result => {
    allowControl?.(result);
  });
};
const getPermission = (perm, req, reqFunc, requestControl) => {
  check(getPermCode(perm))
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          if (!req) reqFunc?.();
          if (requestControl) requestPermission(perm, req, reqFunc);
          break;
        case RESULTS.DENIED:
          if (!req) reqFunc?.();
          if (requestControl) requestPermission(perm, req, reqFunc);
          break;
        case RESULTS.LIMITED:
          if (!req) reqFunc?.();
          if (requestControl) requestPermission(perm, req, reqFunc);
        case RESULTS.GRANTED:
          reqFunc?.();
          break;
        case RESULTS.BLOCKED:
          if (!req) reqFunc?.();
          if (requestControl) requestPermission(perm, req, reqFunc);
          break;
      }
    })
    .catch(error => {
      if (!req) reqFunc?.();
    });
};

export {getPermission};
