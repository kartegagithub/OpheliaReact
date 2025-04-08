import * as React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TextProps as RNTextProps,
} from 'react-native';
import styles from './style';

interface CustomTextProps extends Omit<RNTextProps, 'style'> {
  style?: StyleProp<TextStyle>;
  size?: number;
  color?: string;
  children?: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({
  style,
  size,
  color,
  children,
  ...props
}) => {
  return (
    <Text
      style={[
        {
          fontSize: size || styles.customTextStyle.fontSize,
          color: color || styles.customTextStyle.color,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

CustomText.displayName = 'CustomText';

export default CustomText;
