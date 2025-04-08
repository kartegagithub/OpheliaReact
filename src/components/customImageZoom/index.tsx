import * as React from 'react';
import style from './style';
import {ImageZoom, ImageZoomProps} from '@likashefqet/react-native-image-zoom';
import {ViewStyle} from 'react-native';

interface CustomImageZoomProps extends Omit<ImageZoomProps, 'uri'> {
  uri: string;
  containerStyle?: ViewStyle;
  minScale?: number;
  maxScale?: number;
}

const CustomImageZoom: React.FC<CustomImageZoomProps> = ({
  uri,
  containerStyle,
  minScale = 0.5,
  maxScale = 3,
  ...props
}) => {
  return (
    <ImageZoom
      containerStyle={{
        height: 500,
        width: 500,
        ...containerStyle,
      }}
      uri={uri}
      minScale={minScale}
      maxScale={maxScale}
      {...props}
    />
  );
};

CustomImageZoom.displayName = 'CustomImageZoom';

export default CustomImageZoom;
