import * as React from 'react';
import style from './style';
import DropDownPicker, {
  ValueType,
  ItemType,
} from 'react-native-dropdown-picker';
import {View} from 'react-native';
import CustomText from '../customText';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomDropdownProps<T extends ValueType = string> {
  onSelect?: (item: ItemType<T>) => void;
  defaultValue?: T;
  items?: ItemType<T>[];
  [key: string]: any;
}

const CustomDropdown = <T extends ValueType = string>({
  onSelect,
  defaultValue,
  items: initialItems = [],
  ...props
}: CustomDropdownProps<T>) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<T | null>(defaultValue || null);
  const [items, setItems] = React.useState<ItemType<T>[]>(initialItems);

  const changeData = React.useCallback(
    (item: ItemType<T>) => {
      onSelect?.(item);
    },
    [onSelect],
  );

  return (
    <DropDownPicker
      placeholder="Seçim Yapın"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onSelectItem={changeData}
      {...props}
    />
  );
};

CustomDropdown.displayName = 'CustomDropdown';

export default CustomDropdown;
