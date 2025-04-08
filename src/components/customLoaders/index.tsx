import * as React from 'react';
import style from './style';
import {
  Plane,
  Chase,
  Bounce,
  Wave,
  Pulse,
  Flow,
  Swing,
  Circle,
  CircleFade,
  Grid,
  Fold,
  Wander,
  SpinnerProps,
} from 'react-native-animated-spinkit';
import {ViewStyle} from 'react-native';

type LoaderType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

interface CustomLoadersProps extends SpinnerProps {
  style?: ViewStyle;
  type?: LoaderType;
}

const CustomLoaders: React.FC<CustomLoadersProps> = ({
  style,
  type,
  ...props
}) => {
  const types: Record<LoaderType, JSX.Element> = {
    '1': <Plane {...props} />,
    '2': <Chase {...props} />,
    '3': <Bounce {...props} />,
    '4': <Wave {...props} />,
    '5': <Flow {...props} />,
    '6': <Circle {...props} />,
    '7': <Swing {...props} />,
    '8': <CircleFade {...props} />,
    '9': <Grid {...props} />,
    '10': <Fold {...props} />,
    '11': <Wander {...props} />,
    '12': <Pulse {...props} />,
  };

  const getType = (t?: LoaderType): JSX.Element => {
    if (!t) {
      return types['1'];
    }
    return types[t];
  };

  return getType(type);
};

CustomLoaders.displayName = 'CustomLoaders';

export default CustomLoaders;
