import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomSwipeableList from '../components/customSwipeableList';
import {dummyData} from '../components/customSwipeableList/dummyData';

function SwipeableListScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>No Props</CustomText>
            <CustomSwipeableList data={dummyData} />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default SwipeableListScreen;
