import React, {useState} from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomButton from '../components/customButton';
import {getMetaData, videoCompress} from '../components/customCompressor';
import {showInfo} from '../components/customMessage';

function CompressorScreen() {
  const [metaData, setMetaData] = useState(null);
  const onProgress = e => {
    showInfo(e);
  };
  const onCompress = async () => {
    const getdata = await videoCompress(
      {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      onProgress,
    );
  };
  const videoMetaData = async () => {
    const getdata = await getMetaData(
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    );
    console.log(metaData);
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>No Props</CustomText>
            <CustomButton onPress={onCompress}>
              <CustomText color="#fff">Compress Video</CustomText>
            </CustomButton>
            <CustomButton onPress={videoMetaData}>
              <CustomText color="#fff">Get Video Metadata</CustomText>
            </CustomButton>
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default CompressorScreen;
