import * as React from 'react';
import Lottie from 'lottie-react-native';

const CustomLottie = React.forwardRef(
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
export default CustomLottie;
