import * as React from 'react';
import style from './style';
import AnimatedNumber from './animatedNumber';

const CustomAnimateNumber = ({number = 0, textStyle, ...props}) => {
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
