import * as React from 'react';
import {View, ViewStyle, StyleProp, TextStyle} from 'react-native';
import styles from './style';
import CurrencyInput, {CurrencyInputProps} from 'react-native-currency-input';

interface InputProps extends Omit<CurrencyInputProps, 'onChangeValue'> {
  style?: StyleProp<TextStyle>;
  onChangeValue?: (value: number | null) => void;
  value: number | null;
}

const CustomMoneyInputMask: React.FC<InputProps> = ({
  style,
  onChangeValue,
  value,
  ...props
}) => {
  return (
    <View>
      <CurrencyInput
        value={value}
        onChangeValue={(value: number | null) => onChangeValue?.(value)}
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
        style={[styles.input, style]}
        placeholderTextColor="#fff"
        {...props}
      />
    </View>
  );
};

CustomMoneyInputMask.displayName = 'CustomMoneyInputMask';

export default CustomMoneyInputMask;
