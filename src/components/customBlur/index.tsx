import * as React from 'react';
import {BlurView} from '@react-native-community/blur';

const CustomBlur = ({children, ...props}) => {
  return <BlurView {...props}>{children}</BlurView>;
};
export default CustomBlur;
