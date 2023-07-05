import * as React from 'react';
import style from './style';
import defaultColor from '../../constants/style/defaultColor';
import LoaderKit from 'react-native-loader-kit';

const CustomLoaders = ({style, type, ...props}) => {
  const types = {
    '1': 'BallPulse',
    '2': 'BallGridPulse',
    '3': 'BallClipRotate',
    '4': 'SquareSpin',
    '5': 'BallClipRotatePulse',
    '6': 'BallClipRotateMultiple',
    '7': 'BallPulseRise',
    '8': 'BallRotate',
    '9': 'CubeTransition',
    '10': 'BallZigZag',
    '11': 'BallZigZagDeflect',
    '12': 'BallTrianglePath',
    '13': 'BallScale',
    '14': 'LineScale',
    '15': 'LineScaleParty',
    '16': 'BallScaleMultiple',
    '17': 'BallPulseSync',
    '18': 'BallBeat',
    '19': 'LineScalePulseOut',
    '20': 'LineScalePulseOutRapid',
    '21': 'BallScaleRipple',
    '22': 'BallScaleRippleMultiple',
    '23': 'BallSpinFadeLoader',
    '24': 'LineSpinFadeLoader',
    '25': 'TriangleSkewSpin',
    '26': 'Pacman',
    '27': 'BallGridBeat',
    '28': 'SemiCircleSpin',
  };
  const getType = t => {
    const typesData = Object.entries(types);
    if (!t) {
      return typesData[0][1];
    }
    return typesData[parseInt(t) - 1][1];
  };
  return (
    <LoaderKit
      style={{width: 50, height: 50, ...style}}
      name={getType(type)}
      size={style?.width || 50}
      color={defaultColor.lightColor}
      {...props}
    />
  );
};
export default CustomLoaders;
