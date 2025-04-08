import defaultColor from '../../constants/style/defaultColor';
import Toast from 'react-native-root-toast';

type ToastPosition = 'center' | 'top' | 'bottom';

interface ToastProps {
  duration?: number;
  shadow?: boolean;
  animation?: boolean;
  hideOnPress?: boolean;
  delay?: number;
  backgroundColor?: string;
  position?: ToastPosition;
  [key: string]: any;
}

const CustomToast = Toast;

const getPosition = (p?: ToastPosition): number => {
  if (p === 'center') {
    return Toast.positions.CENTER;
  } else if (p === 'top') {
    return Toast.positions.TOP;
  }
  return Toast.positions.BOTTOM;
};

const toastShow = (message: string, props?: ToastProps): void => {
  Toast.show(message || '', {
    duration: 1000,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: defaultColor.lightColor,
    ...props,
    position: getPosition(props?.position),
  });
};

const toastHide = (): void => {
  Toast.hide();
};

export {CustomToast, toastShow, toastHide};
