import * as React from 'react';
import {View} from 'react-native';
import styles from './style';
import CurrencyInput from 'react-native-currency-input';

function CustomMoneyInputMask({
  style,
  onChangeText,
  value,
  ...props
}: InputProps) {
  return (
    <View>
      <CurrencyInput
        value={value}
        onChangeValue={onChangeText}
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
}
export default CustomMoneyInputMask;
