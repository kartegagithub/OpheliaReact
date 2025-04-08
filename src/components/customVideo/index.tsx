import * as React from 'react';
import Video, {VideoProperties} from 'react-native-video';
import {ViewStyle} from 'react-native';
import {wp} from '../../shared/helpers/veriables';

interface CustomVideoProps extends Omit<VideoProperties, 'source'> {
  source: string;
  style?: ViewStyle;
}

const CustomVideo = React.forwardRef<Video, CustomVideoProps>(
  ({style, source, ...props}, ref) => {
    return (
      <Video
        ref={ref}
        source={{uri: source}}
        style={{
          width: wp(100) - 40,
          height: 200,
          ...style,
        }}
        controls={true}
        {...props}
      />
    );
  },
);

CustomVideo.displayName = 'CustomVideo';

export default CustomVideo;
