import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {Alert, View} from 'react-native';
import CustomNativePicker from '../components/customNativePicker';

function NativePickerScreen() {
  const onSelect = select => {
    Alert.alert('is selected value : ' + select);
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <CustomNativePicker
            items={[
              {label: 'Ankara', value: '06'},
              {label: 'İstanbul', value: '34'},
              {label: 'İzmir', value: '35'},
            ]}
            onSelect={onSelect}
          />
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default NativePickerScreen;
