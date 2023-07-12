import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomCircleTime from '../components/customCircleTime';

function CircleTimeScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomCircleTime duration={15} />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default CircleTimeScreen;
