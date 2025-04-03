import * as React from 'react';
import style from './style';
import TurboImage from 'react-native-turbo-image';

const CustomImage = ({source, priority, ...props}) => {
  return (
    <TurboImage
      style={{...style.defaultSize, ...style}}
      source={{
        priority: priority || 'normal',
        ...source,
      }}
      resizeMode={'cover'}
      {...props}
    />
  );
};
export default CustomImage;
