import React, {useState} from 'react';
import Container from '../shared/fragment/container';
import CustomText from '../components/customText';
import Padding from '../shared/fragment/padding';
import CustomVideo from '../components/customVideo';

function VideoScreen() {
  const [data, setData] = useState({
    end: false,
    load: false,
    progress: false,
    meta: false,
  });
  return (
    <Container>
      <Padding />
      <CustomVideo
        source={'https://download.samplelib.com/mp4/sample-15s.mp4'}
        onTimedMetadata={meta => setData({...data, meta})}
        onProgress={progress => setData({...data, progress})}
        onLoad={load => setData({...data, load})}
        onEnd={end => setData({...data, end})}
      />
      <Padding />
      <CustomText>onTimedMetadata:{JSON.stringify(data?.meta)}</CustomText>
      <CustomText>onProgress:{JSON.stringify(data?.progress)}</CustomText>
      <CustomText>onLoad:{JSON.stringify(data?.load)}</CustomText>
      <CustomText>onEnd:{JSON.stringify(data?.end)}</CustomText>
      <Padding />
    </Container>
  );
}
export default VideoScreen;
