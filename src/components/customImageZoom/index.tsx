import * as React from 'react';
import style from './style';
import {ImageZoom} from '@likashefqet/react-native-image-zoom';

const CustomImageZoom = ({uri, containerStyle, ...props}) => {
  return (
    <ImageZoom
      containerStyle={{
        height: 500,
        width: 500,
        ...containerStyle,
      }}
      uri={uri}
      minScale={0.5}
      maxScale={3}
      {...props}
    />
  );
};
export default CustomImageZoom;
