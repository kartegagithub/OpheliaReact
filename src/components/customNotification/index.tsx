import {useNotifications} from 'react-native-notificated';

const {notify} = useNotifications();

const showSuccess = async (title, description) => {
  notify('success', {
    params: {
      title,
      description,
    },
  });
};
const showError = async (title, description) => {
  notify('error', {
    params: {
      title,
      description,
    },
  });
};
const showWarning = async (title, description) => {
  notify('warning', {
    params: {
      title,
      description,
    },
  });
};
const showInfo = async (title, description) => {
  notify('info', {
    params: {
      title,
      description,
    },
  });
};

export {showError, showInfo, showSuccess, showWarning};
