import * as React from 'react';
import style from './style';
import {Alert, Animated, TouchableOpacity, ViewStyle} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import CustomIcon from '../customIcon';

interface TabBarProps {
  routeName: string;
  selectedTab: string;
  navigate: (routeName: string) => void;
}

interface CircleProps {
  selectedTab: string;
  navigate: (routeName: string) => void;
}

interface ScreenProps {
  name: string;
  component: React.ComponentType<any>;
  position?: string;
}

interface CustomCurvedBarProps {
  screens: ScreenProps[];
  _renderIcon: (routeName: string, selectedTab: string) => React.ReactNode;
  style?: ViewStyle;
  [key: string]: any;
}

const CustomCurvedBar: React.FC<CustomCurvedBarProps> = ({
  screens,
  _renderIcon,
  ...props
}) => {
  const renderTabBar = React.useCallback(
    ({routeName, selectedTab, navigate}: TabBarProps) => {
      return (
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          style={style.tabbarItem}>
          {_renderIcon(routeName, selectedTab)}
        </TouchableOpacity>
      );
    },
    [_renderIcon],
  );

  const renderCircle = React.useCallback(
    ({selectedTab, navigate}: CircleProps) => {
      return (
        <Animated.View style={style.btnCircleUp}>
          <TouchableOpacity
            style={style.button}
            onPress={() => Alert.alert('Click Action')}>
            <CustomIcon name="earth" size={30} type="ionicons" />
          </TouchableOpacity>
        </Animated.View>
      );
    },
    [],
  );

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={style.bottomBar}
      shadowStyle={style.shawdow}
      height={60}
      circleWidth={40}
      bgColor="white"
      initialRouteName="Ayarlar"
      borderTopLeftRight
      renderCircle={renderCircle}
      tabBar={renderTabBar}
      {...props}>
      {screens?.map((screen, index) => (
        <CurvedBottomBar.Screen key={index} {...screen} />
      ))}
    </CurvedBottomBar.Navigator>
  );
};

CustomCurvedBar.displayName = 'CustomCurvedBar';

export default CustomCurvedBar;
