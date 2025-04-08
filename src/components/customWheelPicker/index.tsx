import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import {Picker} from 'react-native-wheel-pick';

interface CustomWheelPickerProps {
  data?: Array<string>;
  onChange?: (value: string) => void;
  selectedValue?: string;
  style?: ViewStyle;
  pickerStyle?: ViewStyle;
}

const CustomWheelPicker: React.FC<CustomWheelPickerProps> = ({
  data = [],
  onChange,
  selectedValue = 'item4',
  style,
  pickerStyle,
  ...props
}) => {
  const handleValueChange = (value: string): void => {
    console.log(value);
    onChange?.(value);
  };

  return (
    <View style={[{flex: 1}, style]}>
      <Picker
        style={[
          {
            backgroundColor: 'white',
            width: 300,
            height: 215,
          },
          pickerStyle,
        ]}
        selectedValue={selectedValue}
        pickerData={
          data.length > 0
            ? data
            : ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']
        }
        onValueChange={handleValueChange}
        {...props}
      />
    </View>
  );
};

CustomWheelPicker.displayName = 'CustomWheelPicker';

export default CustomWheelPicker;
