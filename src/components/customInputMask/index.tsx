import * as React from 'react';
import {View, StyleProp, ViewStyle, TextStyle} from 'react-native';
import MaskInput, {Masks, MaskInputProps} from 'react-native-mask-input';
import styles from './style';

type MaskType = 'currency' | 'card' | 'date' | (string | RegExp)[];

interface InputProps extends Omit<MaskInputProps, 'mask'> {
  style?: StyleProp<TextStyle>;
  onChangeText?: (masked: string, unmasked: string) => void;
  value: string;
  mask: MaskType;
}

const CustomInputMask: React.FC<InputProps> = ({
  style,
  onChangeText,
  value,
  mask,
  ...props
}) => {
  const getMask = (m: MaskType): (string | RegExp)[] => {
    const maskList: Record<string, (string | RegExp)[]> = {
      currency: Masks.BRL_CURRENCY,
      card: Masks.CREDIT_CARD,
      date: Masks.DATE_DDMMYYYY,
    };
    return typeof m === 'string' ? maskList[m] || m : m;
  };

  return (
    <View>
      <MaskInput
        style={[styles.input, style]}
        value={value}
        onChangeText={(masked: string, unmasked: string) => {
          onChangeText?.(masked, unmasked);
        }}
        placeholderTextColor="#fff"
        mask={getMask(mask)}
        {...props}
      />
    </View>
  );
};

CustomInputMask.displayName = 'CustomInputMask';

export default CustomInputMask;
