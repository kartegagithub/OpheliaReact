import * as React from 'react';
import {BlurView} from '@react-native-community/blur';

interface CustomBlurProps {
  children?: React.ReactNode;
}

const CustomBlur: React.FC<CustomBlurProps> = ({children, ...props}) => {
  return <BlurView {...props}>{children}</BlurView>;
};

CustomBlur.displayName = 'CustomBlur';

export default CustomBlur;
