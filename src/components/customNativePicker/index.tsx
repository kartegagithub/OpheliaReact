import * as React from 'react';
import style from './style';
import RNPickerSelect, {
  PickerSelectProps,
  Item,
} from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform, ViewStyle} from 'react-native';

interface CustomNativePickerProps
  extends Omit<PickerSelectProps, 'onValueChange' | 'items'> {
  value?: string | number;
  onSelect?: (value: string | number) => void;
  placeholderProps?: {
    label?: string;
    value?: string | number;
    color?: string;
  };
  extraStyle?: {
    inputIOS?: ViewStyle;
    inputAndroid?: ViewStyle;
    placeholder?: {
      color: string;
    };
  };
  items?: Item[];
}

const CustomNativePicker: React.FC<CustomNativePickerProps> = ({
  value,
  onSelect,
  placeholderProps,
  extraStyle,
  items = [],
  ...props
}) => {
  const [selected, setSelected] = React.useState<string | number>(value || '');

  const changeData = (itemValue: string | number): void => {
    setSelected(itemValue);
    onSelect?.(itemValue);
  };

  return (
    <RNPickerSelect
      onValueChange={changeData}
      value={selected}
      items={items}
      doneText="Tamam"
      placeholder={{
        label: 'Seçim Yapın',
        ...placeholderProps,
      }}
      style={{
        ...style.default,
        ...extraStyle,
      }}
      Icon={() =>
        Platform.OS === 'ios' && (
          <Icon name="caret-down" size={20} color="#fff" />
        )
      }
      {...props}
    />
  );
};

CustomNativePicker.displayName = 'CustomNativePicker';

export default CustomNativePicker;
