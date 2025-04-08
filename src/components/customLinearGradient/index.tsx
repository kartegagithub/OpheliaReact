import * as React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

interface CustomLinearGradientProps extends LinearGradientProps {
  children?: React.ReactNode;
}

const CustomLinearGradient: React.FC<CustomLinearGradientProps> = ({
  children,
  ...props
}) => {
  return <LinearGradient {...props}>{children}</LinearGradient>;
};

CustomLinearGradient.displayName = 'CustomLinearGradient';

export default CustomLinearGradient;
