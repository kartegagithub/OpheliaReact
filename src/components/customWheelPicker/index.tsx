import * as React from 'react';
import style from './style';
import {View} from 'react-native';
import {Picker, PickerColumn, PickerItem} from 'react-native-picky';

const CustomWheelPicker = ({data = [], onChange, ...props}) => {
  return (
    <View style={{flex: 1}}>
      <Picker>
        {data?.map((v, i) => {
          return (
            <PickerColumn
              onChange={val => onChange?.(val)}
              selectedValue={v?.selected || null}
              key={i.toString()}>
              {v?.items?.map((k, j) => {
                return <PickerItem label={k?.label} value={k?.value} />;
              })}
            </PickerColumn>
          );
        })}
      </Picker>
    </View>
  );
};
export default CustomWheelPicker;
