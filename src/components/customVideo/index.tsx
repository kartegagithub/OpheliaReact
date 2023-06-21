import * as React from 'react';
import Video from 'react-native-video';
import { wp } from '../../shared/helpers/veriables';

const CustomVideo = React.forwardRef(({style, source, ...props}, ref) => {
  return (
    <Video
      ref={ref}
      source={{uri:source}}
      style={{
        width: wp(100) - 40,
        height: 200,
        ...style,
      }}
      controls={true}
      {...props}
    />
  );
});
export default CustomVideo;
