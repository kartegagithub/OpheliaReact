import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomAvatar from '../components/customAvatar';
import CustomText from '../components/customText';
import CustomChart from '../components/customChart';
import {wp} from '../shared/helpers/veriables';
import defaultColor from '../constants/style/defaultColor';
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
