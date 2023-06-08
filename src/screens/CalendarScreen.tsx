import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomCalendar from '../components/customCalendar';

function CalendarScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomCalendar />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default CalendarScreen;
