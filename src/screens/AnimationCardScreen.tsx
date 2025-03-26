import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomAnimationCard from '../components/customAnimationCard';

function AnimationCardScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <CustomAnimationCard />
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default AnimationCardScreen;
