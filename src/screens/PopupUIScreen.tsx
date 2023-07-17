import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import {showPopupUI, showToastUI} from '../components/customPopupUI';
import CustomButton from '../components/customButton';

function PopupUIScreen() {
  const show = t => {
    showPopupUI({
      type: t || 's',
      callbackHide: true,
      title: 'Test',
      text: 'Test Mesajımdır',
      button: true,
    });
  };
  const showToast = t => {
    showToastUI({
      type: t || 's',
      title: 'Test',
      text: 'Test Mesajımdır',
    });
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomButton onPress={() => show('s')}>
              <CustomText color="#fff">UI Popup Success</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomButton onPress={() => show('w')}>
              <CustomText color="#fff">UI Popup Warning</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomButton onPress={() => show('d')}>
              <CustomText color="#fff">UI Popup Danger</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomButton onPress={() => showToast('s')}>
              <CustomText color="#fff">UI Toast Success</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomButton onPress={() => showToast('w')}>
              <CustomText color="#fff">UI Toast Warning</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomButton onPress={() => showToast('d')}>
              <CustomText color="#fff">UI Toast Danger</CustomText>
            </CustomButton>
          </View>

          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default PopupUIScreen;
