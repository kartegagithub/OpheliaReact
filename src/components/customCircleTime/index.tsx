import * as React from 'react';
import style from './style';
import CustomText from '../customText';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const CustomCircleTime = ({textStyle, duration=60, colorsTime,colors, ...props}) => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={duration}
      colors={colors || ['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={colorsTime || [duration / 1.1, duration / 1.5, duration / 2, 0]}>
      {({remainingTime}) => (
        <CustomText style={{...textStyle}}>{remainingTime}</CustomText>
      )}
    </CountdownCircleTimer>
  );
};
export default CustomCircleTime;
