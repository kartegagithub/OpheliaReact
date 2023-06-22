import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomBCard from '../components/customBCard';

function BCardScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>Default</CustomText>
            <CustomBCard
              onPress={() => alert('pressed')}
              smallTitle={'NEW'}
              largeTitle={'Merhaba Dünya!'}
              footnote={'Hello World!'}
            />
          </View>
          <Padding />
          <View>
            <CustomText>Other Type</CustomText>
            <CustomBCard
              type="other"
              title={'Test Uygulaması'}
              subtitle={'Değişime Hazır Olun!'}
              largeTitle={'DILEK' + '\n' + 'ISTE' + '\n' + 'HEMEN!'}
              buttonText={'İNDİR'}
              iconSource={{
                uri: 'https://play-lh.googleusercontent.com/6NoDzI5d956RNFq88Ydxp70TPKCfC-JoMQaWZLZDOASne6dUKrafZQsfZLPgeUMofA',
              }}
              backgroundSource={{uri: 'https://picsum.photos/id/111/900/900'}}
              buttonSubtitle={'İndirmek için Tıkla'}
              onButtonPress={() => alert('download Press')}
            />
          </View>
          <Padding />
          <Padding />
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default BCardScreen;
