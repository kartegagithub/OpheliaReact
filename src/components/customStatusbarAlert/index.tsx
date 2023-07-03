import * as React from 'react';
import style from './style';
import StatusBarAlert from 'react-native-statusbar-alert';

const StatusbarAlertContext = React.createContext();
export function useStatusBarAlert() {
  const contextValue = React.useContext(StatusbarAlertContext);
  return contextValue;
}

export const CustomStatusbarAlert = ({type, children, ...props}) => {
  const [show, setShow] = React.useState(false);
  const [setting, setSetting] = React.useState({
    message: 'Hello World!',
    type: 'info',
  });
  const getType = () => {
    if (setting?.type == 'danger') {
      return 'red';
    } else if (setting?.type == 'success') {
      return 'green';
    } else if (setting?.type == 'info') {
      return 'blue';
    }
    return 'blue';
  };
  return (
    <StatusbarAlertContext.Provider
      value={{show, setShow, setting, setSetting}}>
      <StatusBarAlert
        visible={show}
        message={setting?.message}
        backgroundColor="#3CC29E"
        color="white"
        useNativeDriver={false}
        pulse="background"
        style={{
          backgroundColor: getType(setting?.type),
        }}
        statusbarHeight={52}
        {...props}
      />
      {children}
    </StatusbarAlertContext.Provider>
  );
};
