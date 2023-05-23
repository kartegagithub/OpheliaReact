import * as React from 'react';
import {Shadow} from 'react-native-shadow-2';

const CustomShadow = ({children, ...props}) => {
  return <Shadow {...props}>{children}</Shadow>;
};
export default CustomShadow;
