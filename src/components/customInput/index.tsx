import * as React from 'react';
import { TextInput, View, StyleProp, ViewStyle } from 'react-native';
import styles from './style';

type InputProps = {
  style?: StyleProp<ViewStyle>,
  placeholderTextColor?: string,
  placeholderText?: string,
  leftIcon?: any,
  rightIcon?: any,
}
function CustomInput({ style, placeholderTextColor, leftIcon, rightIcon, placeholderText }: InputProps) {

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={placeholderTextColor}
        autoCapitalize="none"
        placeholder={placeholderText}
        style={[{ paddingLeft: leftIcon ? 36 : 15 }, style || {},]}
      />
      {leftIcon ?
        <View style={styles.leftIconView}>
          {leftIcon}
        </View> :
        rightIcon ?
          <View style={styles.rightIconView}>
            {rightIcon}
          </View> : null}
    </View>
  );
}
export default CustomInput;
