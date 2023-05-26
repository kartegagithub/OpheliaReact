import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/store';
import Navigation from './src/constants/navigation';
import {StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import FlashMessage from 'react-native-flash-message';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" />
      <SafeAreaProvider>
        <RootSiblingParent>
          <FlashMessage
            position="top"
            //titleStyle={{fontSize: 14}}
            floating
            duration={2500}
          />
          <Navigation />
        </RootSiblingParent>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
