import {showMessage, MessageType} from 'react-native-flash-message';

interface MessageOptions {
  message: string;
  type: MessageType;
  description?: string;
  duration?: number;
  floating?: boolean;
  position?: 'top' | 'bottom' | 'center';
  icon?:
    | 'auto'
    | 'none'
    | {icon: MessageType | 'auto'; position: 'left' | 'right'; props: {}};
}

const showInfo = (
  text: string,
  options?: Partial<Omit<MessageOptions, 'type' | 'message'>>,
): void => {
  showMessage({
    message: text,
    type: 'info',
    ...options,
  });
};

const showError = (
  text: string,
  options?: Partial<Omit<MessageOptions, 'type' | 'message'>>,
): void => {
  showMessage({
    message: text,
    type: 'danger',
    ...options,
  });
};

const showSuccess = (
  text: string,
  options?: Partial<Omit<MessageOptions, 'type' | 'message'>>,
): void => {
  showMessage({
    message: text,
    type: 'success',
    ...options,
  });
};

const showWarn = (
  text: string,
  options?: Partial<Omit<MessageOptions, 'type' | 'message'>>,
): void => {
  showMessage({
    message: text,
    type: 'warning',
    ...options,
  });
};

export {showError, showWarn, showInfo, showSuccess};
