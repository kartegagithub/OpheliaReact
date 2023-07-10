import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {Image, View} from 'react-native';
import CustomAvatar from '../components/customAvatar';
import CustomText from '../components/customText';
import CustomAnimationCard from '../components/customAnimationCard';

function AnimationCardScreen() {
  const renderBack = () => {
    return (
      <View>
        <Image
          source={{uri: 'https://picsum.photos/1000/1000'}}
          style={{
            width: 300,
            height: 500,
          }}
        />
      </View>
    );
  };
  const renderFront = () => {
    return (
      <View>
        <View
          style={{
            backgroundColor: 'rgba(255,0,0,0.3)',
            position: 'absolute',
            zIndex: 999,
            width: 300,
            height: 500,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomText
            style={{
              fontSize: 30,
              color: '#fff',
            }}>
            Ön Yüz
          </CustomText>
        </View>
        <Image
          source={{uri: 'https://picsum.photos/1000/1000'}}
          style={{
            width: 300,
            height: 500,
          }}
        />
      </View>
    );
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomAnimationCard
              renderBack={renderBack}
              renderFront={renderFront}
            />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default AnimationCardScreen;
