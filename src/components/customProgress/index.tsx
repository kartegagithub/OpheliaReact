import * as React from 'react';
import defaultColor from '../../constants/style/defaultColor';
import * as Progress from 'react-native-progress';
import {TextStyle, ViewStyle} from 'react-native';

type ProgressType = 'pie' | 'circle' | 'circles' | 'bar';

interface CustomProgressProps {
  progress?: number;
  width?: number;
  type?: ProgressType;
  unfilledColor?: string;
  indeterminate?: boolean;
  borderWidth?: number;
  color?: string;
  borderColor?: string;
  textStyle?: TextStyle;
  thickness?: number;
  fill?: string;
  animated?: boolean;
  style?: ViewStyle;
  [key: string]: any;
}

const CustomProgress: React.FC<CustomProgressProps> = ({
  progress = 0.5,
  width = 200,
  type = 'bar',
  ...props
}) => {
  const TypeProgress = React.useCallback(
    ({...tProps}: CustomProgressProps) => {
      switch (type) {
        case 'pie':
          return <Progress.Pie {...tProps} />;
        case 'circle':
          return <Progress.Circle {...tProps} />;
        case 'circles':
          return <Progress.CircleSnail {...tProps} />;
        default:
          return <Progress.Bar {...tProps} />;
      }
    },
    [type],
  );

  return (
    <TypeProgress
      progress={progress}
      width={width}
      unfilledColor="#fff"
      indeterminate={false}
      borderWidth={1}
      color={defaultColor.lightColor}
      borderColor={defaultColor.middleColor}
      textStyle={{color: '#fff'}}
      thickness={5}
      fill="#000"
      animated={false}
      {...props}
    />
  );
};

CustomProgress.displayName = 'CustomProgress';

export default CustomProgress;
