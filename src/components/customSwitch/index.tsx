import * as React from 'react';
import SwitchToggle from 'react-native-switch-toggle';
import defaultColor from '../../constants/style/defaultColor';
import style from './style';
import {ViewStyle} from 'react-native';

interface CustomSwitchProps {
  isOn: boolean;
  onChange: () => void;
  circleColorOff?: string;
  circleColorOn?: string;
  backgroundColorOn?: string;
  backgroundColorOff?: string;
  circleStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  [key: string]: any;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  isOn,
  onChange,
  circleColorOff = defaultColor.darkColor,
  circleColorOn = defaultColor.lightDegreeColor,
  backgroundColorOn = defaultColor.lightColor,
  backgroundColorOff = defaultColor.grayColor,
  circleStyle = style.circleStyle,
  containerStyle = style.containerStyle,
  ...props
}) => {
  return (
    <SwitchToggle
      switchOn={isOn}
      onPress={onChange}
      circleColorOff={circleColorOff}
      circleColorOn={circleColorOn}
      backgroundColorOn={backgroundColorOn}
      backgroundColorOff={backgroundColorOff}
      circleStyle={circleStyle}
      containerStyle={containerStyle}
      {...props}
    />
  );
};

CustomSwitch.displayName = 'CustomSwitch';

export default CustomSwitch;
