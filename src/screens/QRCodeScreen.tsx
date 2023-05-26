import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomCarousel from '../components/customCarousel';
import {wp} from '../shared/helpers/veriables';
import CustomQRCode from '../components/customQRCode';

function QRCodeScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>Default</CustomText>
            <CustomQRCode value="Merhaba" />
          </View>
          <View>
            <CustomText>With Logo</CustomText>
            <CustomQRCode
              value="Merhaba"
              logo={{uri: 'https://kartega.com/Files/img/logo_bar.png'}}
              color="red"
              logoSize={40}
            />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default QRCodeScreen;
