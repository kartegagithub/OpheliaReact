import * as React from 'react';
import Lottie, {AnimatedLottieViewProps} from 'lottie-react-native';
import {StyleProp, ViewStyle} from 'react-native';

interface CustomLottieProps extends Omit<AnimatedLottieViewProps, 'source'> {
  autoPlay?: boolean;
  loop?: boolean;
  style?: StyleProp<ViewStyle>;
}

const CustomLottie = React.forwardRef<Lottie, CustomLottieProps>(
  ({autoPlay = true, loop = true, style, ...props}, ref) => {
    return (
      <Lottie
        ref={ref}
        source={require('./example.json')}
        autoPlay={autoPlay}
        loop={loop}
        style={{
          width: 100,
          height: 100,
          ...style,
        }}
        {...props}
      />
    );
  },
);

CustomLottie.displayName = 'CustomLottie';

export default CustomLottie;
