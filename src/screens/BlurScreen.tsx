import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomBlur from '../components/customBlur';
import blurScreenStyle from './styles/blurScreenStyle';
import CustomImage from '../components/customImage';

function BlurScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View style={blurScreenStyle.view}>
            <CustomImage
              source={{uri: 'https://picsum.photos/1000'}}
              style={blurScreenStyle.backImg}
            />
            <CustomBlur
              style={blurScreenStyle.blur}
              blurType="light"
              blurAmount={7}>
              <CustomText style={blurScreenStyle.buttonText}>
                Orjinal görsel için satın alım yapın
              </CustomText>
            </CustomBlur>
          </View>
          <Padding />
          <View style={blurScreenStyle.view}>
            <CustomImage
              source={{uri: 'https://picsum.photos/1000'}}
              style={blurScreenStyle.backImg}
            />
            <CustomBlur
              style={blurScreenStyle.blur}
              blurType="xlight"
              blurAmount={3}>
              <CustomText
                style={[blurScreenStyle.buttonText, blurScreenStyle.blackText]}>
                Orjinal görsel için satın alım yapın
              </CustomText>
            </CustomBlur>
          </View>
          <Padding />
          <View style={blurScreenStyle.view}>
            <CustomImage
              source={{uri: 'https://picsum.photos/1000'}}
              style={blurScreenStyle.backImg}
            />
            <CustomBlur
              style={blurScreenStyle.blur}
              blurType="dark"
              blurAmount={1}>
              <CustomText style={blurScreenStyle.buttonText}>
                Orjinal görsel için satın alım yapın
              </CustomText>
            </CustomBlur>
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default BlurScreen;
