import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CustomLinearGradient = ({children, ...props}) => {
  return <LinearGradient {...props}>{children}</LinearGradient>;
};
export default CustomLinearGradient;
