import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomLoaders from '../components/customLoaders';

function LoadersScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          {Array(27)
            .fill(null)
            .map((r, i) => (
              <View key={i.toString()}>
                <CustomText>CustomLoaders with type {i + 1}</CustomText>
                <CustomLoaders type={i + 1} />
              </View>
            ))}

          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default LoadersScreen;
