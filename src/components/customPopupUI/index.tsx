import * as React from 'react';
import {Popup, Toast} from 'popup-ui';
const getType = t => {
  if (t == 's') {
    return 'Success';
  } else if (t == 'w') {
    return 'Warning';
  }
  if (t == 'd') {
    return 'Danger';
  }
  return 'Success';
};
const getTypeCode = t => {
  if (t == 's') {
    return '#6ab04c';
  } else if (t == 'w') {
    return '#f9ca24';
  }
  if (t == 'd') {
    return '#eb4d4b';
  }
  return '#6ab04c';
};
const showPopupUI = ({
  callbackHide = true,
  type,
  title,
  text,
  buttonText,
  onCallback,
  ...props
}) => {
  Popup.show({
    type: getType(type),
    title,
    button: false,
    textBody: text,
    buttonText: buttonText || 'Tamam',
    callback: () => {
      if (callbackHide) {
        Popup.hide();
        onCallback?.();
      }
    },
    ...props,
  });
};

const showToastUI = ({type, title, text, color, timing, ...props}) => {
  Toast.show({
    title,
    text,
    color: getTypeCode(type) || '#2ecc71',
    timing: timing || 3000,
  });
};

export {showPopupUI, showToastUI};
