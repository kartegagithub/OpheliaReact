import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomSkeleton from '../components/customSkeleton';

function SkeletonContentScreen() {
  const placeholderData = [
    {
      height: 10,
      width: 100,
      noMargin: false,
      style: {},
    },
    {
      height: 10,
      width: 60,
      noMargin: false,
      style: {},
    },
    {
      height: 10,
      width: 35,
      noMargin: false,
      style: {},
    },
    {
      height: 10,
      width: 100,
      color: '#000',
      noMargin: false,
      style: {},
    },
  ];
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomSkeleton data={placeholderData} leftMedia={true} />
          </View>
          <Padding />
          <View>
            <CustomSkeleton
              data={placeholderData}
              leftMedia={true}
              rightMedia={true}
            />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default SkeletonContentScreen;
