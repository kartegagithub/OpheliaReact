import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/store';
import Navigation from './src/constants/navigation';
import {LogBox, StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import FlashMessage from 'react-native-flash-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CustomStatusbarAlert} from './src/components/customStatusbarAlert';
import {createNotifications} from 'react-native-notificated';
import { Root } from 'popup-ui';

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);

function App(): JSX.Element {
  const {NotificationsProvider} = createNotifications({
    notificationPosition: 'center',
  });

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" />
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <NotificationsProvider />
          <RootSiblingParent>
            <FlashMessage
              position="top"
              //titleStyle={{fontSize: 14}}
              floating
              duration={2500}
            />
            <CustomStatusbarAlert>
              <Root>
                <Navigation />
              </Root>
            </CustomStatusbarAlert>
          </RootSiblingParent>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
