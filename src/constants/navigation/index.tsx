import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import TextScreen from '../../screens/TextScreen';
import ButtonScreen from '../../screens/ButtonScreen';
import TextInputScreen from '../../screens/TextInputScreen';
import ActionSheetScreen from '../../screens/ActionSheetScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Demo Component List',
          }}
        />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen
          name="ButtonScreen"
          component={ButtonScreen}
          options={{
            title: 'Buttons Example',
          }}
        />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen
          name="ActionSheetScreen"
          component={ActionSheetScreen}
          options={{
            title: 'ActionSheet Example',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
