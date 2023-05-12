import * as React from 'react';
import style from './style';
import UserAvatar from 'react-native-user-avatar';
import defaultColor from '../../constants/style/defaultColor';
import {View} from 'react-native';
import CustomText from '../customText';
const generateRandomColor = () => {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
};
const CustomAvatar = ({
  size = 50,
  containerStyle,
  src,
  name,
  textColor,
  randomBg,
  bgColor,
  badgeContainer,
  badgeText,
  badgeTextStyle,
  ...props
}) => {
  return (
    <View style={{width: size}}>
      <UserAvatar
        style={{width: size, ...containerStyle}}
        size={size}
        textColor={textColor}
        src={src}
        name={name}
        bgColor={
          randomBg ? generateRandomColor() : bgColor || defaultColor.lightColor
        }
        {...props}
      />
      {badgeText && (
        <View style={[style.badgeContainer, badgeContainer]}>
          <CustomText style={[style.badgeText, badgeTextStyle]}>
            {badgeText}
          </CustomText>
        </View>
      )}
    </View>
  );
};
export default CustomAvatar;
