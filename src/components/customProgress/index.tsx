import * as React from 'react';
import defaultColor from '../../constants/style/defaultColor';
import * as Progress from 'react-native-progress';

const CustomProgress = ({progress, width, type, ...props}) => {
  const TypeProgress = React.useCallback(
    ({...tProps}) => {
      if (type === 'pie') return <Progress.Pie {...tProps} />;
      else if (type === 'circle') return <Progress.Circle {...tProps} />;
      else if (type === 'circles') return <Progress.CircleSnail {...tProps} />;
      return <Progress.Bar {...tProps} />;
    },
    [progress, width, type, props],
  );
  return (
    <TypeProgress
      progress={progress || 0.5}
      width={width || 200}
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
export default CustomProgress;
