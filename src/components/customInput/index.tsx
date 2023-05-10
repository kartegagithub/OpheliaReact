import * as React from 'react';
import { TextInput, View, StyleProp, ViewStyle } from 'react-native';
import styles from './style';
import { Hoshi } from 'react-native-textinput-effects';
type InputProps = {
  style?: StyleProp<ViewStyle>,
  inputStyle?: StyleProp<ViewStyle>,
  placeholderTextColor?: string,
  placeholderText?: string,
  textOnBorder?: string,
  leftIcon?: any,
  rightIcon?: any,
}
function CustomInput({ style, placeholderTextColor, leftIcon, rightIcon, placeholderText, textOnBorder,inputStyle }: InputProps) {

  return (
    <View style={styles.container}>
      {textOnBorder ?
        <Hoshi
          label={textOnBorder}
          labelStyle={styles.labelStyle}
          inputStyle={inputStyle}
          borderColor={'#b76c94'}
          style={[{ paddingLeft: leftIcon ? 36 : 15 }, style || {},]}
          borderHeight={3}
          inputPadding={5}
        />
        :
        <>
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
        </>
      }
    </View>
  );
}
export default CustomInput;
