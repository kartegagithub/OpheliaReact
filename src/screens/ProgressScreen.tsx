import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomAvatar from '../components/customAvatar';
import CustomText from '../components/customText';
import CustomProgress from '../components/customProgress';

function ProgressScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomProgress
              progress={0.3}
              width={200}
              height={30}
              borderRadius={30}
            />
            <Padding />
            <CustomProgress
              type="circle"
              size={100}
              showsText
              progress={0.5}
              borderWidth={0}
            />
            <Padding />
            <CustomProgress
              type="pie"
              size={100}
              progress={0.2}
              borderWidth={0}
            />
            <Padding />
            <CustomProgress
              type="circles"
              color={['red', 'green', 'blue']}
              borderWidth={0}
            />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default ProgressScreen;
