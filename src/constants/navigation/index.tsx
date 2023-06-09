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
import ToastScreen from '../../screens/ToastScreen';
import DateTimeScreen from '../../screens/DateTimeScreen';
import CarouselScreen from '../../screens/CarouselScreen';
import LinearGradientScreen from '../../screens/LinearGradientScreen';
import ShadowScreen from '../../screens/ShadowScreen';
import MarqueeTextScreen from '../../screens/MarqueeTextScreen';
import ProgressScreen from '../../screens/ProgressScreen';
import MessageScreen from '../../screens/MessageScreen';
import BlurScreen from '../../screens/BlurScreen';
import QRCodeScreen from '../../screens/QRCodeScreen';
import CompressorScreen from '../../screens/CompressorScreen';
import ModalScreen from '../../screens/ModalScreen';
import PermissionsScreen from '../../screens/PermissionsScreen';
import CalendarScreen from '../../screens/CalendarScreen';
import LottieScreen from '../../screens/LottieScreen';
import CheckboxScreen from '../../screens/CheckboxScreen';

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
          name="ToastScreen"
          component={ToastScreen}
          options={{
            title: 'Toast Detail',
          }}
        />
        <Stack.Screen
          name="CarouselScreen"
          component={CarouselScreen}
          options={{
            title: 'Carousel Detail',
          }}
        />
        <Stack.Screen
          name="LinearGradientScreen"
          component={LinearGradientScreen}
          options={{
            title: 'Linear Gradient Detail',
          }}
        />
        <Stack.Screen
          name="ShadowScreen"
          component={ShadowScreen}
          options={{
            title: 'Shadow Detail',
          }}
        />
        <Stack.Screen
          name="MarqueeTextScreen"
          component={MarqueeTextScreen}
          options={{
            title: 'Marquee Text Detail',
          }}
        />
        <Stack.Screen
          name="ProgressScreen"
          component={ProgressScreen}
          options={{
            title: 'Progress Detail',
          }}
        />
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{
            title: 'Message Detail',
          }}
        />
        <Stack.Screen
          name="BlurScreen"
          component={BlurScreen}
          options={{
            title: 'Blur Detail',
          }}
        />
        <Stack.Screen
          name="DateTimeScreen"
          component={DateTimeScreen}
          options={{
            title: 'DateTime Detail',
          }}
        />
        <Stack.Screen
          name="QRCodeScreen"
          component={QRCodeScreen}
          options={{
            title: 'QRCode Detail',
          }}
        />
        <Stack.Screen
          name="CompressorScreen"
          component={CompressorScreen}
          options={{
            title: 'Compressor Detail',
          }}
        />
        <Stack.Screen
          name="PermissionsScreen"
          component={PermissionsScreen}
          options={{
            title: 'Permissions Detail',
          }}
        />
        <Stack.Screen
          name="CalendarScreen"
          component={CalendarScreen}
          options={{
            title: 'Calendar Detail',
          }}
        />
        <Stack.Screen
          name="LottieScreen"
          component={LottieScreen}
          options={{
            title: 'Lottie Detail',
          }}
        />
        <Stack.Screen
          name="CheckboxScreen"
          component={CheckboxScreen}
          options={{
            title: 'Checkbox Detail',
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            title: 'Component Detail',
          }}
        />
        <Stack.Screen
          name="ModalScreen"
          component={ModalScreen}
          options={{
            title: 'Modal Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
