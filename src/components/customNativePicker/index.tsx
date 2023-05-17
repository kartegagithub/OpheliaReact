import * as React from 'react';
import style from './style';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
const CustomNativePicker = ({
  value,
  onSelect,
  placeholderProps,
  extraStyle,
  items,
  ...props
}) => {
  const [selected, setSelected] = React.useState(value || '');
  const changeData = itemValue => {
    setSelected(itemValue);
    onSelect?.(itemValue);
  };
  return (
    <RNPickerSelect
      onValueChange={changeData}
      value={selected}
      items={items || []}
      doneText="Tamam"
      placeholder={{
        label: 'Seçim Yapın',
        ...placeholderProps,
      }}
      style={{...style.default, ...extraStyle}}
      Icon={() => <Icon name="caret-down" size={20} color={'#fff'} />}
      {...props}
    />
  );
};
export default CustomNativePicker;
