import * as React from 'react';
import style from './style';
import { Plane, Chase, Bounce, Wave, Pulse, Flow, Swing, Circle, CircleFade, Grid, Fold, Wander } from 'react-native-animated-spinkit'

const CustomLoaders = ({style, type, ...props}) => {
  const types = {
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
    '12': <Pulse {...props} />
  };
  const getType = t => {
    const typesData = Object.entries(types);
    if (!t) {
      return typesData[0][1];
    }
    return typesData[parseInt(t) - 1][1];
  };
  return getType(type);
};
export default CustomLoaders;
