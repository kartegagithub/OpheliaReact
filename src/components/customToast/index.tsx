import defaultColor from '../../constants/style/defaultColor';
import Toast from 'react-native-root-toast';

const CustomToast = Toast;
const getPosition = p => {
  if (p === 'center') {
    return Toast.positions.CENTER;
  } else if (p === 'top') {
    return Toast.positions.TOP;
  }
  return Toast.positions.BOTTOM;
};
const toastShow = (message, props) => {
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
const toastHide = () => {
  Toast.hide();
};
export {CustomToast, toastShow, toastHide};
