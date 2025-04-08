import {useNotifications} from 'react-native-notificated';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

const {notify} = useNotifications();

const showNotification = async (
  type: NotificationType,
  title: string,
  description: string,
): Promise<void> => {
  notify(type, {
    params: {
      title,
      description,
    },
  });
};

const showSuccess = async (
  title: string,
  description: string,
): Promise<void> => {
  await showNotification('success', title, description);
};

const showError = async (title: string, description: string): Promise<void> => {
  await showNotification('error', title, description);
};

const showWarning = async (
  title: string,
  description: string,
): Promise<void> => {
  await showNotification('warning', title, description);
};

const showInfo = async (title: string, description: string): Promise<void> => {
  await showNotification('info', title, description);
};

export {showError, showInfo, showSuccess, showWarning};
