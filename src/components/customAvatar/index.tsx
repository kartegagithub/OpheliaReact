import * as React from 'react';
import {View, ViewStyle, TextStyle} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import style from './style';
import defaultColor from '../../constants/style/defaultColor';
import CustomText from '../customText';

interface CustomAvatarProps {
  size?: number;
  containerStyle?: ViewStyle;
  src?: string;
  name?: string;
  textColor?: string;
  randomBg?: boolean;
  bgColor?: string;
  badgeContainer?: ViewStyle;
  badgeText?: string;
  badgeTextStyle?: TextStyle;
}

const generateRandomColor = (): string => {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
};

const CustomAvatar: React.FC<CustomAvatarProps> = ({
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
