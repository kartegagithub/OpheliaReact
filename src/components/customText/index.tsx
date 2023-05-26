import * as React from 'react';
import {StyleProp, Text, ViewStyle} from 'react-native';
import styles from './style';
type TextProps = {
  style?: StyleProp<ViewStyle>;
  children?: string | number;
};
function CustomText({style, size, color, children}: TextProps) {
  return (
    <Text
      style={[
        {
          fontSize: size || styles.customTextStyle.fontSize,
          color: color || styles.customTextStyle.color,
        },
        style,
      ]}>
      {children}
    </Text>
  );
}
export default CustomText;
