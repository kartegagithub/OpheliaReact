import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {Alert, View} from 'react-native';
import CustomDropdown from '../components/customDropdown';

function DropdownScreen({}) {
  const items = [
    {label: 'Adana', value: '01'},
    {label: 'Adıyaman', value: '02'},
    {label: 'Afyon', value: '03'},
  ];
  const onSelect = item => {
    alert(JSON.stringify(item));
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <CustomDropdown items={items} onSelect={onSelect} />
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default DropdownScreen;
