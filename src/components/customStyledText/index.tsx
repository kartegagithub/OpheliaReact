import * as React from 'react';
import StyledText from 'react-native-styled-text';
import {TextStyle, ViewStyle} from 'react-native';

interface CustomStyledTextProps {
  styles?: ViewStyle;
  textStyles?: {
    [key: string]: TextStyle;
  };
  children: string;
  [key: string]: any;
}

const CustomStyledText: React.FC<CustomStyledTextProps> = ({
  styles,
  textStyles,
  children,
  ...props
}) => {
  return (
    <StyledText style={styles} textStyles={textStyles} {...props}>
      {children}
    </StyledText>
  );
};

CustomStyledText.displayName = 'CustomStyledText';

export default CustomStyledText;
