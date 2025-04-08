import * as React from 'react';
import style from './style';
import TurboImage, {TurboImageProps} from 'react-native-turbo-image';
import {ImageSourcePropType, ImageStyle} from 'react-native';

interface CustomImageProps extends Omit<TurboImageProps, 'source'> {
  source: ImageSourcePropType;
  priority?: 'low' | 'normal' | 'high';
  style?: ImageStyle;
}

const CustomImage: React.FC<CustomImageProps> = ({
  source,
  priority = 'normal',
  style: customStyle,
  ...props
}) => {
  return (
    <TurboImage
      style={{...style.defaultSize, ...customStyle}}
      source={{
        priority,
        ...source,
      }}
      resizeMode="cover"
      {...props}
    />
  );
};

CustomImage.displayName = 'CustomImage';

export default CustomImage;
