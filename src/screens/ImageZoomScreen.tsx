import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomImageZoom from '../components/customImageZoom';

function ImageZoomScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomImageZoom uri={'https://picsum.photos/1000/1000'} />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default ImageZoomScreen;
