import * as React from 'react';
import { TextInput, View, StyleProp, ViewStyle } from 'react-native';
import styles from './style';
import { Hoshi } from 'react-native-textinput-effects';
import CustomText from '../customText';

type InputProps = {
  style?: StyleProp<ViewStyle>,
  inputStyle?: StyleProp<ViewStyle>,
  placeholderTextColor?: string,
  placeholderText?: string,
  errorMessage?: string,
  textOnBorder?: string,
  leftIcon?: any,
  rightIcon?: any,
  value?: any
  editable?: boolean,
  onChangeText?: (text: any) => void
}
function CustomInput({ style, placeholderTextColor, leftIcon, rightIcon, placeholderText, textOnBorder, inputStyle, editable, errorMessage, onChangeText, value }: InputProps) {

  return (
    <View style={styles.container}>
      {textOnBorder ?
        <Hoshi
          value={value}
          onChangeText={onChangeText}
          label={textOnBorder}
          labelStyle={styles.labelStyle}
          inputStyle={inputStyle}
          borderColor={'#b76c94'}
          style={[{ paddingLeft: leftIcon ? 36 : 15 }, style || {},]}
          //borderHeight={3}
          inputPadding={5}
        />
        :
        <>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            editable={editable}
            placeholderTextColor={placeholderTextColor}
            autoCapitalize="none"
            placeholder={placeholderText}
            style={[{ paddingLeft: leftIcon ? 36 : 15 }, style || {},]}
          />
          {errorMessage &&
            <CustomText style={styles.errorMessage}>{errorMessage}</CustomText>}
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
