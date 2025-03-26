import * as React from 'react';
import {View} from 'react-native';
import {Picker} from 'react-native-wheel-pick';

const CustomWheelPicker = ({data = [], onChange, ...props}) => {
  return (
    <View style={{flex: 1}}>
      <Picker
        style={{backgroundColor: 'white', width: 300, height: 215}}
        selectedValue="item4"
        pickerData={[
          'item1',
          'item2',
          'item3',
          'item4',
          'item5',
          'item6',
          'item7',
        ]}
        onValueChange={value => {
          console.log(value);
        }}
      />
    </View>
  );
};
export default CustomWheelPicker;
