import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomFiesta from '../components/customFiesta';
import {wp} from '../shared/helpers/veriables';

function FiestaScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View style={{width: wp(100) - 40, height: 500}}>
            <CustomText>type: ballons</CustomText>
            <CustomFiesta type="ballons" />
          </View>
          <Padding />
          <View style={{width: wp(100) - 40, height: 500}}>
            <CustomText>type: fireworks</CustomText>
            <CustomFiesta type="fireworks" />
          </View>
          <Padding />
          <View style={{width: wp(100) - 40, height: 500}}>
            <CustomText>type: hearts</CustomText>
            <CustomFiesta type="hearts" />
          </View>
          <Padding />
          <View style={{width: wp(100) - 40, height: 500}}>
            <CustomText>type: stars</CustomText>
            <CustomFiesta type="stars" />
          </View>
          <Padding />
          <View style={{width: wp(100) - 40, height: 500}}>
            <CustomText>type: emojis</CustomText>
            <CustomFiesta type="emojis" />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default FiestaScreen;
