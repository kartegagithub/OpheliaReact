import * as React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

interface CustomYoutubeVideoProps {
  height?: number;
  autoPlay?: boolean;
  onEnded?: () => void;
  videoID: string;
  [key: string]: any;
}

const youtube_parser = (url: string): string | false => {
  if (!url || url?.search('http') === -1) return url;
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};

const CustomYoutubeVideo: React.FC<CustomYoutubeVideoProps> = ({
  height,
  autoPlay,
  onEnded,
  videoID,
  ...props
}) => {
  if (!videoID) return null;

  const [playing, setPlaying] = React.useState<boolean>(autoPlay || false);

  const onStateChange = React.useCallback(
    (state: string): void => {
      if (state === 'ended') {
        setPlaying(false);
        onEnded?.();
      }
    },
    [onEnded],
  );

  return (
    <YoutubePlayer
      height={height || 300}
      play={playing}
      videoId={youtube_parser(videoID) || ''}
      onChangeState={onStateChange}
      {...props}
    />
  );
};

CustomYoutubeVideo.displayName = 'CustomYoutubeVideo';

export default CustomYoutubeVideo;
