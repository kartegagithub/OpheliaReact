import * as React from 'react';
import {Shadow, ShadowProps} from 'react-native-shadow-2';
import {ViewStyle} from 'react-native';

interface CustomShadowProps extends ShadowProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const CustomShadow: React.FC<CustomShadowProps> = ({children, ...props}) => {
  return <Shadow {...props}>{children}</Shadow>;
};

CustomShadow.displayName = 'CustomShadow';

export default CustomShadow;
