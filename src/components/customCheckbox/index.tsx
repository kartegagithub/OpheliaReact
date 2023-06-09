import * as React from 'react';
import defaultColor from '../../constants/style/defaultColor';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CustomCheckbox = ({
  textStyle,
  onPress,
  text,
  fillColor,
  iconStyle,
  innerIconStyle,
  isChecked,
  size,
  ...props
}) => {
  return (
    <BouncyCheckbox
      size={size || 25}
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
export default CustomCheckbox;
