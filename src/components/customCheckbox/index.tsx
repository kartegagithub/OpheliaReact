import * as React from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import defaultColor from '../../constants/style/defaultColor';
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from 'react-native-bouncy-checkbox';

interface CustomCheckboxProps extends Omit<IBouncyCheckboxProps, 'onPress'> {
  textStyle?: TextStyle;
  onPress?: (isChecked: boolean) => void;
  text?: string;
  fillColor?: string;
  iconStyle?: ViewStyle;
  innerIconStyle?: ViewStyle;
  isChecked?: boolean;
  size?: number;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  textStyle,
  onPress,
  text,
  fillColor,
  iconStyle,
  innerIconStyle,
  isChecked,
  size = 25,
  ...props
}) => {
  return (
    <BouncyCheckbox
      size={size}
      fillColor={fillColor || defaultColor?.middleColor}
      unfillColor="#FFFFFF"
      text={text}
      iconStyle={{borderColor: defaultColor.middleColor, ...iconStyle}}
      innerIconStyle={{borderWidth: 2, ...innerIconStyle}}
      textStyle={textStyle}
      onPress={onPress}
      isChecked={isChecked}
      disableBuiltInState
      disableText={!text}
      {...props}
    />
  );
};

CustomCheckbox.displayName = 'CustomCheckbox';

export default CustomCheckbox;
