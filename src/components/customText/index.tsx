import * as React from 'react';
import {StyleProp, Text, ViewStyle} from 'react-native';
import styles from './style';
type TextProps = {
  style?: StyleProp<ViewStyle>;
  children?: string | number;
};
function CustomText({style, children}: TextProps) {
  return <Text style={[styles.customTextStyle, style]}>{children}</Text>;
}
export default CustomText;
