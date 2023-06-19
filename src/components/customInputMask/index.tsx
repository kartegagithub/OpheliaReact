import * as React from 'react';
import {View} from 'react-native';
import MaskInput, {Masks} from 'react-native-mask-input';
import styles from './style';

function CustomInputMask({
  style,
  onChangeText,
  value,
  mask,
  ...props
}: InputProps) {
  const getMask = m => {
    const maskList = {
      currency: Masks.BRL_CURRENCY,
      card: Masks.CREDIT_CARD,
      date: Masks.DATE_DDMMYYYY,
    };
    const find = maskList?.[m];
    return find || m;
  };
  return (
    <View>
      <MaskInput
        style={[styles.input, style]}
        value={value}
        onChangeText={(masked, unmasked) => {
          onChangeText?.(masked, unmasked);
        }}
        placeholderTextColor="#fff"
        mask={getMask(mask)}
        {...props}
      />
    </View>
  );
}
export default CustomInputMask;
