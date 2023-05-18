import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/store';
import Navigation from './src/constants/navigation';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
