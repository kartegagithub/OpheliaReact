import React, {useState} from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomButton from '../components/customButton';
import {getMetaData, videoCompress} from '../components/customCompressor';
import {showInfo, showSuccess} from '../components/customMessage';
import {launchImageLibrary} from 'react-native-image-picker';
let uriSelected = null;
function CompressorScreen() {
  const [metaData, setMetaData] = useState(null);
  const onProgress = e => {
    showInfo(e);
  };
  const onCompress = async () => {

    const result = await launchImageLibrary({
      mediaType:'video'
    });
    uriSelected = result?.assets?.[0]?.uri;
    const getdata = await videoCompress(
      uriSelected,
      onProgress,
    );
    showSuccess('Video Compress Edildi:' + getdata);
    videoMetaData(getdata);
    
  };
  const videoMetaData = async (source) => {
    const metaData = await getMetaData(source);
    console.log(metaData);
    showSuccess('Video Compress Data:' + JSON.stringify(metaData));
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
