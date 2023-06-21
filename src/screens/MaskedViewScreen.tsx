import React from 'react';
import Container from '../shared/fragment/container';
import CustomText from '../components/customText';
import Padding from '../shared/fragment/padding';
import CustomMaskedView from '../components/customMaskedView';
import {Image, View} from 'react-native';

function MaskedViewScreen() {
  return (
    <Container>
      <Padding />
      <CustomMaskedView
        maskElement={
          <View>
            <CustomText style={{fontSize: 35}}>Merhaba Dünya!</CustomText>
          </View>
        }>
        <View style={{width: 80, backgroundColor: '#324376'}} />
        <View style={{width: 80, backgroundColor: '#F5DD90'}} />
        <View style={{width: 80, backgroundColor: '#F76C5E'}} />
        <View style={{width: 80, backgroundColor: '#e1e1e1'}} />
      </CustomMaskedView>
      <Padding />
      <CustomMaskedView
        maskElement={
          <View>
            <CustomText style={{fontSize: 35}}>Merhaba Dünya!</CustomText>
          </View>
        }>
        <Image
          resizeMode="cover"
          source={{uri: 'https://picsum.photos/id/111/100/100'}}
          style={{flex: 1}}
        />
      </CustomMaskedView>
      <Padding />
    </Container>
  );
}
export default MaskedViewScreen;
