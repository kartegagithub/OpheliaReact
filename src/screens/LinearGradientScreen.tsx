import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomLinearGradient from '../components/customLinearGradient';
import linearGradientScreenStyle from './styles/linearGradientScreenStyle';

function LinearGradientScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>facebook style</CustomText>
            <CustomLinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={linearGradientScreenStyle.button}>
              <CustomText style={linearGradientScreenStyle.buttonText}>
                Facebook ile bağlan
              </CustomText>
            </CustomLinearGradient>
          </View>
          <Padding />
          <View>
            <CustomText>twitter style</CustomText>
            <CustomLinearGradient
              colors={['#1DA1F2', '#0d90e0']}
              locations={[0, 0.36]}
              style={linearGradientScreenStyle.button}>
              <CustomText style={linearGradientScreenStyle.buttonText}>
                Twitter ile bağlan
              </CustomText>
            </CustomLinearGradient>
          </View>
          <Padding />
          <View>
            <CustomText>facebook style</CustomText>
            <CustomLinearGradient
              colors={['#f9ce34', '#ee2a7b', '#6228d7']}
              start={{x: 0.0, y: 0}}
              end={{x: 1, y: 1.0}}
              locations={[0, 0.3, 0.8]}
              style={linearGradientScreenStyle.button}>
              <CustomText style={linearGradientScreenStyle.buttonText}>
                Instagram ile bağlan
              </CustomText>
            </CustomLinearGradient>
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default LinearGradientScreen;
