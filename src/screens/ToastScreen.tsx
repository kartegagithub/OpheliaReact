import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomButton from '../components/customButton';
import {toastShow} from '../components/customToast';

function ToastScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomButton onPress={() => toastShow()}>
              <CustomText>No Props</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomButton onPress={() => toastShow('Hello!')}>
              <CustomText>With Message</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomButton
              onPress={() =>
                toastShow('Hello!', {
                  onHide: () => {
                    alert('ok');
                  },
                })
              }>
              <CustomText>With Message, Hide Alert</CustomText>
            </CustomButton>
          </View>
          <Padding />
          <View>
            <CustomButton
              onPress={() =>
                toastShow('Hello!', {
                  position: 'center',
                })
              }>
              <CustomText>With Message Position Center</CustomText>
            </CustomButton>
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default ToastScreen;
