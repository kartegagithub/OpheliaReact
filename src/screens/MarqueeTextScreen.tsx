import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomMarqueeText from '../components/customMarqueeText';

function MarqueeTextScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>Standart</CustomText>
            <CustomMarqueeText speed={1} loop={true} delay={1000}>
              <CustomText size={24}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry and typesetting industry.
              </CustomText>
            </CustomMarqueeText>
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default MarqueeTextScreen;
