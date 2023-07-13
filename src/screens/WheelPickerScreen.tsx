import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomWheelPicker from '../components/customWheelPicker';

function WheelPickerScreen() {
  const data = [
    {
      selected: 3,
      items: [
        {
          label: 'Pazartesi',
          value: 1,
        },
        {
          label: 'Salı',
          value: 2,
        },
        {
          label: 'Çarşamba',
          value: 3,
        },
        {
          label: 'Perşembe',
          value: 4,
        },
        {
          label: 'Cuma',
          value: 5,
        },
        {
          label: 'Cumartesi',
          value: 6,
        },
        {
          label: 'Pazar',
          value: 7,
        },
      ],
    },
    {
      selected: 1,
      items: [
        {
          label: 'Ocak',
          value: 1,
        },
        {
          label: 'Şubat',
          value: 2,
        },
        {
          label: 'Mart',
          value: 3,
        },
        {
          label: 'Nisan',
          value: 4,
        },
        {
          label: 'Mayıs',
          value: 5,
        },
        {
          label: 'Haziran',
          value: 6,
        },
        {
          label: 'Temmuz',
          value: 7,
        },
      ],
    },
  ];
  const onChange = val => {
    alert(JSON.stringify(val));
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomWheelPicker data={data} onChange={onChange} />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default WheelPickerScreen;
