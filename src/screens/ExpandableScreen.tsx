import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomExpandable from '../components/customExpandable';
import defaultColor from '../constants/style/defaultColor';

function ExpandableScreen({}) {
  const SECTIONS = [
    {
      id: 0,
      title: 'First',
      content: 'Lorem ipsum...',
    },
    {
      id: 1,
      title: 'Second',
      content: 'Lorem ipsum...',
    },
    {
      id: 2,
      title: 'Third',
      content: 'Lorem ipsum...',
    },
  ];
  return (
    <Container>
      <Content contentStyle={{flex: 1}}>
        <View>
          <Padding />
          <CustomExpandable
            sections={SECTIONS}
            headerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              padding: 10,
              marginHorizontal: 16,
            }}
            contentStyle={{
              backgroundColor: defaultColor.lightDegreeColor,
              padding: 10,
              marginHorizontal: 16,
            }}
            sectionTitleStyle={{padding: 10}}
          />
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default ExpandableScreen;
