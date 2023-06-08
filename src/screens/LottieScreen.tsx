import React, {useRef} from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomLottie from '../components/customLottie';
import CustomButton from '../components/customButton';
import CustomText from '../components/customText';

function LottieScreen() {
  const animationRef = useRef();
  const start = () => {
    animationRef?.current?.play();
  };
  const stop = () => {
    animationRef?.current?.pause();
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomLottie ref={animationRef} />
          </View>
          <CustomButton onPress={stop}>
            <CustomText color="#fff">Durdur</CustomText>
          </CustomButton>
          <CustomButton onPress={start}>
            <CustomText color="#fff">Başlat</CustomText>
          </CustomButton>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default LottieScreen;
