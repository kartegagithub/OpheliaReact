import * as React from 'react';
import {TextStyle} from 'react-native';
import style from './style';
import AnimatedNumber, {AnimatedNumberProps} from './animatedNumber';

interface CustomAnimateNumberProps
  extends Omit<AnimatedNumberProps, 'animateToNumber' | 'fontStyle'> {
  number?: number;
  textStyle?: TextStyle;
}

const CustomAnimateNumber: React.FC<CustomAnimateNumberProps> = ({
  number = 0,
  textStyle,
  ...props
}) => {
  return (
    <AnimatedNumber
      includeComma
      animateToNumber={number}
      fontStyle={{fontSize: 50, fontWeight: 'bold', ...textStyle}}
      {...props}
    />
  );
};

export default CustomAnimateNumber;
