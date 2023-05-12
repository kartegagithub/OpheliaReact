import React from 'react';
import {Animated, StyleProp, Text, View, ViewStyle} from 'react-native';
import Button from 'react-native-button';
import {wp} from '../../shared/helpers/veriables';
import Ripple from 'react-native-material-ripple';
import style from './style';
import CustomText from '../customText';

type ButtonProps = {
  containerStyle: StyleProp<ViewStyle>;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  label: string | number;
  leftIcon?: boolean;
  rightIcon?: boolean;
  icon?: React.ReactNode;
};

function CustomButton({
  label,
  rightIcon,
  leftIcon,
  icon,
  containerStyle,
  children,
  textStyle,
  ...props
}: ButtonProps) {
  return (
    <Ripple style={[style.container, {...containerStyle}]} {...props}>
      {leftIcon && (
        <View style={{position: 'absolute', bottom: 0, left: wp(25), top: 16}}>
          {icon}
        </View>
      )}
      {children || (
        <CustomText style={[style.defaultText, textStyle]}>{label}</CustomText>
      )}
      {rightIcon && (
        <View style={{position: 'absolute', bottom: 0, right: wp(25), top: 16}}>
          {icon}
        </View>
      )}
    </Ripple>
  );
}
export default CustomButton;
