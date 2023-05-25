import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomAvatar from '../components/customAvatar';
import CustomText from '../components/customText';
import CustomButton from '../components/customButton';
import {
  showError,
  showInfo,
  showSuccess,
  showWarn,
} from '../components/customMessage';

function MessageScreen() {
  const message = 'Merhaba Dünya!';
  const success = () => {
    showSuccess(message);
  };
  const error = () => {
    showError(message);
  };
  const info = () => {
    showInfo(message);
  };
  const warning = () => {
    showWarn(message);
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>Info Message</CustomText>
            <CustomButton onPress={info}>
              <CustomText color="#fff">Press</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomText>Success Message</CustomText>
            <CustomButton onPress={success}>
              <CustomText color="#fff">Press</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomText>Warning Message</CustomText>
            <CustomButton onPress={warning}>
              <CustomText color="#fff">Press</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomText>Error Message</CustomText>
            <CustomButton onPress={error}>
              <CustomText color="#fff">Press</CustomText>
            </CustomButton>
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default MessageScreen;
