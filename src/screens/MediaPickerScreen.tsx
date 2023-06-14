import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomButton from '../components/customButton';
import {
  getSelectCamera,
  getSelectImage,
  getSelectVideo,
} from '../components/customMediaPicker';
function MediaPickerScreen() {
  const onVideo = async () => {
    const selected = await getSelectVideo();
    alert(JSON.stringify(selected));
  };
  const onImage = async () => {
    const selected = await getSelectImage();
    alert(JSON.stringify(selected));
  };
  const onCamera = async () => {
    const selected = await getSelectCamera();
    alert(JSON.stringify(selected));
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>Video</CustomText>
            <CustomButton onPress={onVideo}>
              <CustomText color="#fff">Select</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomText>Image</CustomText>
            <CustomButton onPress={onImage}>
              <CustomText color="#fff">Select</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomText>Camera</CustomText>
            <CustomButton onPress={onCamera}>
              <CustomText color="#fff">Select</CustomText>
            </CustomButton>
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default MediaPickerScreen;
