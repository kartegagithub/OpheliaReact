import * as React from 'react';
import style from './style';
import FastImage from 'react-native-fast-image';

const CustomImage = ({source, priority, ...props}) => {
  return (
    <FastImage
      style={{...style.defaultSize, ...style}}
      source={{
        priority: priority || FastImage.priority.normal,
        ...source,
      }}
      resizeMode={FastImage.resizeMode.cover}
      {...props}
    />
  );
};
export default CustomImage;
