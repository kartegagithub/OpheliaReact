import * as React from 'react';
import style from './style';
// import StatusBarAlert from 'react-native-statusbar-alert';

type AlertType = 'danger' | 'success' | 'info';

interface AlertSettings {
  message: string;
  type: AlertType;
}

interface StatusBarContextValue {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setting: AlertSettings;
  setSetting: React.Dispatch<React.SetStateAction<AlertSettings>>;
}

interface CustomStatusbarAlertProps {
  type?: AlertType;
  children: React.ReactNode;
  [key: string]: any;
}

const StatusbarAlertContext = React.createContext<
  StatusBarContextValue | undefined
>(undefined);

export function useStatusBarAlert(): StatusBarContextValue {
  const contextValue = React.useContext(StatusbarAlertContext);
  if (!contextValue) {
    throw new Error(
      'useStatusBarAlert must be used within a CustomStatusbarAlert',
    );
  }
  return contextValue;
}

export const CustomStatusbarAlert: React.FC<CustomStatusbarAlertProps> = ({
  type,
  children,
  ...props
}) => {
  const [show, setShow] = React.useState<boolean>(false);
  const [setting, setSetting] = React.useState<AlertSettings>({
    message: 'Hello World!',
    type: 'info',
  });

  const getType = (): string => {
    if (setting?.type === 'danger') {
      return 'red';
    } else if (setting?.type === 'success') {
      return 'green';
    } else if (setting?.type === 'info') {
      return 'blue';
    }
    return 'blue';
  };

  return (
    <>{children}</>
    /* Uncomment when StatusBarAlert is available
    <StatusbarAlertContext.Provider
      value={{ show, setShow, setting, setSetting }}
    >
      <StatusBarAlert
        visible={show}
        message={setting?.message}
        backgroundColor="#3CC29E"
        color="white"
        useNativeDriver={false}
        pulse="background"
        style={{
          backgroundColor: getType(),
        }}
        statusbarHeight={52}
        {...props}
      />
      {children}
    </StatusbarAlertContext.Provider>
    */
  );
};

CustomStatusbarAlert.displayName = 'CustomStatusbarAlert';
