import * as React from 'react';
import style from './style';
import {Alert, Animated, TouchableOpacity} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import CustomIcon from '../customIcon';

const CustomCurvedBar = ({screens, _renderIcon, ...props}) => {
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={style.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
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
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={style.btnCircleUp}>
          <TouchableOpacity
            style={style.button}
            onPress={() => Alert.alert('Click Action')}>
            <CustomIcon name="earth" size={30} type="ionicons" />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
      {...props}>
      {screens?.map(i => {
        return <CurvedBottomBar.Screen {...i} />;
      })}
    </CurvedBottomBar.Navigator>
  );
};
export default CustomCurvedBar;
