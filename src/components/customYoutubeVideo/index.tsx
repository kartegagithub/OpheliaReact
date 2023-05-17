import * as React from 'react';
import style from './style';
import UserAvatar from 'react-native-user-avatar';
import defaultColor from '../../constants/style/defaultColor';
import {View} from 'react-native';
import CustomText from '../customText';
import YoutubePlayer from 'react-native-youtube-iframe';
const youtube_parser = url => {
  if (!url || url?.search('http') == -1) return url;
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
};
const CustomYoutubeVideo = ({height, autoPlay, onEnded, videoID, ...props}) => {
  if (!videoID) return null;
  const [playing, setPlaying] = React.useState(autoPlay || false);
  const onStateChange = React.useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      onEnded?.();
    }
  }, []);
  return (
    <YoutubePlayer
      height={height || 300}
      play={playing}
      videoId={youtube_parser(videoID)}
      onChangeState={onStateChange}
    />
  );
};
export default CustomYoutubeVideo;
