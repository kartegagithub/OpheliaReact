import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomLinearGradient from '../components/customLinearGradient';
import linearGradientScreenStyle from './styles/linearGradientScreenStyle';
import CustomShadow from '../components/customShadow';
import CustomImage from '../components/customImage';
import shadowScreenStyle from './styles/shadowScreenStyle';

function ShadowScreen() {
  return (
    <Container>
      <Content>
        <View style={shadowScreenStyle.cardContainer}>
          <Padding />
          <View>
            <CustomShadow
              distance={20}
              startColor={'#ccc'}
              style={shadowScreenStyle.card}>
              <CustomImage source={{uri: 'https://picsum.photos/1000'}} />
              <CustomText>Test Başlığı</CustomText>
            </CustomShadow>
          </View>
          <Padding />
          <View>
            <CustomShadow>
              <CustomLinearGradient
                colors={['#1DA1F2', '#0d90e0']}
                locations={[0, 0.36]}
                style={linearGradientScreenStyle.button}>
                <CustomText style={linearGradientScreenStyle.buttonText}>
                  Twitter ile bağlan
                </CustomText>
              </CustomLinearGradient>
            </CustomShadow>
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default ShadowScreen;
