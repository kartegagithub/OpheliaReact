import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomCarousel from '../components/customCarousel';

function CarouselScreen() {
  const data = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
    {
      title: 'Middle Earth, Germany',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/lceHsT6l.jpg',
    },
  ];
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>Default</CustomText>
            <CustomCarousel items={data} />
          </View>
          <Padding />
          <View>
            <CustomText>Parallax</CustomText>
            <CustomCarousel items={data} mode={'parallax'} />
          </View>
          <Padding />
          <View>
            <CustomText>Horizontal Stack Layout</CustomText>
            <CustomCarousel items={data} mode={'horizontal-stack'} />
          </View>
          <Padding />
          <View>
            <CustomText>Vertical Stack Layout</CustomText>
            <CustomCarousel items={data} mode={'vertical-stack'} />
          </View>
          <Padding />
          <View>
            <CustomText>Show Pagination</CustomText>
            <CustomCarousel items={data} showPagination={true} />
          </View>
          <Padding />
          <Padding />
          <Padding />
          <Padding />
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default CarouselScreen;
