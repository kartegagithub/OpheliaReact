import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomImage from '../components/customImage';

function ImageScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomImage
              source={{uri: 'https://picsum.photos/id/237/200/300'}}
            />
            <Padding />
            <CustomImage
              source={{uri: 'https://picsum.photos/id/111/200/300'}}
              style={{width: 300, height: 300}}
            />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default ImageScreen;
