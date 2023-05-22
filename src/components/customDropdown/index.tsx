import * as React from 'react';
import style from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import {View} from 'react-native';
import CustomText from '../customText';
import Icon from 'react-native-vector-icons/FontAwesome';
const CustomDropdown = ({onSelect, defaultValue, ...props}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue || null);
  const [items, setItems] = React.useState(items || []);

  const changeData = item => {
    onSelect?.(item);
  };
  return (
    <DropDownPicker
      placeholder="Seçim Yapın"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onSelectItem={item => {
        changeData(item);
      }}
      {...props}
    />
  );
};
export default CustomDropdown;
