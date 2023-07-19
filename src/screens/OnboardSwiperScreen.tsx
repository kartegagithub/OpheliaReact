import React from 'react';
import Container from '../shared/fragment/container';
import {View} from 'react-native';
import CustomOnboardingSwiper from '../components/customOnboardingSwiper';
import CustomImage from '../components/customImage';
import defaultColor from '../constants/style/defaultColor';

function OnboardSwiperScreen() {
  const pages = [
    {
      backgroundColor: defaultColor.darkColor,
      image: (
        <CustomImage source={{uri: 'https://picsum.photos/id/237/200/300'}} />
      ),
      title: 'Onları Seviyoruz!!!',
      subtitle: 'Hayvanları çok seviyoruz!',
    },
    {
      backgroundColor: defaultColor.middleColor,
      image: (
        <CustomImage source={{uri: 'https://picsum.photos/id/11/200/300'}} />
      ),
      title: 'Doğaya Aşığız!',
      subtitle: 'Doğa hayatımızın kaynağı!',
    },
  ];
  const onSkip = () => {
    alert('skip');
  };
  const onDone = () => {
    alert('Done finish');
  };
  return (
    <Container style={{paddingHorizontal: 0}}>
      <View style={{flex: 1}}>
        <CustomOnboardingSwiper pages={pages} onSkip={onSkip} onDone={onDone} />
      </View>
    </Container>
  );
}
export default OnboardSwiperScreen;
