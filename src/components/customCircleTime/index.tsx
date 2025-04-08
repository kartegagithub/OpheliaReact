import * as React from 'react';
import {TextStyle} from 'react-native';
import style from './style';
import CustomText from '../customText';
import {
  CountdownCircleTimer,
  Props as TimerProps,
} from 'react-native-countdown-circle-timer';

interface CustomCircleTimeProps extends Omit<TimerProps, 'children'> {
  textStyle?: TextStyle;
  duration?: number;
  colorsTime?: number[];
  colors?: string[];
}

const CustomCircleTime: React.FC<CustomCircleTimeProps> = ({
  textStyle,
  duration = 60,
  colorsTime,
  colors,
  ...props
}) => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={duration}
      colors={colors || ['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={
        colorsTime || [duration / 1.1, duration / 1.5, duration / 2, 0]
      }
      {...props}>
      {({remainingTime}) => (
        <CustomText style={textStyle}>{remainingTime}</CustomText>
      )}
    </CountdownCircleTimer>
  );
};

CustomCircleTime.displayName = 'CustomCircleTime';

export default CustomCircleTime;
