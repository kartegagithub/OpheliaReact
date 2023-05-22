import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import TextScreen from '../../screens/TextScreen';
import ButtonScreen from '../../screens/ButtonScreen';
import TextInputScreen from '../../screens/TextInputScreen';
import ActionSheetScreen from '../../screens/ActionSheetScreen';
import DetailScreen from '../../screens/DetailScreen';
import AvatarScreen from '../../screens/AvatarScreen';
import SwipeableListScreen from '../../screens/SwipeableListScreen';
import ChartScreen from '../../screens/ChartScreen';
import ImageScreen from '../../screens/ImageScreen';
import BigListScreen from '../../screens/BigListScreen';
import CodeEditorScreen from '../../screens/CodeEditorScreen';
import YoutubeVideoScreen from '../../screens/YoutubeVideoScreen';
import NativePickerScreen from '../../screens/NativePickerScreen';
import IconScreen from '../../screens/IconScreen';
import DropdownScreen from '../../screens/DropdownScreen';
import MasonryImagesScreen from '../../screens/MasonryImagesScreen';

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
        <Stack.Screen
          name="AvatarScreen"
          component={AvatarScreen}
          options={{
            title: 'Avatar Example',
          }}
        />
        <Stack.Screen
          name="SwipeableListScreen"
          component={SwipeableListScreen}
          options={{
            title: 'SwipeableList Example',
          }}
        />
        <Stack.Screen
          name="ChartScreen"
          component={ChartScreen}
          options={{
            title: 'Chart Example',
          }}
        />
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{
            title: 'Image Example',
          }}
        />
        <Stack.Screen
          name="BigListScreen"
          component={BigListScreen}
          options={{
            title: 'BigList Example',
          }}
        />
        <Stack.Screen
          name="CodeEditorScreen"
          component={CodeEditorScreen}
          options={{
            title: 'BigList Example',
          }}
        />
        <Stack.Screen
          name="YoutubeVideoScreen"
          component={YoutubeVideoScreen}
          options={{
            title: 'Youtube Video Example',
          }}
        />
        <Stack.Screen
          name="NativePickerScreen"
          component={NativePickerScreen}
          options={{
            title: 'Native Picker Example',
          }}
        />
        <Stack.Screen
          name="IconScreen"
          component={IconScreen}
          options={{
            title: 'Icon Detail',
          }}
        />
        <Stack.Screen
          name="DropdownScreen"
          component={DropdownScreen}
          options={{
            title: 'Dropdown Detail',
          }}
        />
        <Stack.Screen
          name="MasonryImagesScreen"
          component={MasonryImagesScreen}
          options={{
            title: 'Masonry Images Detail',
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            title: 'Component Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
