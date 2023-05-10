import SwitchToggle from 'react-native-switch-toggle';
import defaultColor from '../../constants/style/defaultColor';
import style from './style';

const CustomSwitch = ({isOn, onChange, ...props}) => {
  return (
    <SwitchToggle
      switchOn={isOn}
      onPress={onChange}
      circleColorOff={defaultColor.darkColor}
      circleColorOn={defaultColor.lightDegreeColor}
      backgroundColorOn={defaultColor.lightColor}
      backgroundColorOff={defaultColor.grayColor}
      circleStyle={style.circleStyle}
      containerStyle={style.containerStyle}
      {...props}
    />
  );
};
export default CustomSwitch;
