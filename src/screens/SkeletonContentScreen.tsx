import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomSkeleton from '../components/customSkeleton';

function SkeletonContentScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomSkeleton />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default SkeletonContentScreen;
