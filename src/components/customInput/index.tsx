import * as React from 'react';
import {TextInput, View, StyleProp, ViewStyle} from 'react-native';
import styles from './style';
import {Hoshi} from 'react-native-textinput-effects';
import CustomText from '../customText';
import defaultColor from '../../constants/style/defaultColor';

type InputProps = {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  placeholderTextColor?: string;
  placeholderText?: string;
  errorMessage?: string;
  textOnBorder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  value?: any;
  editable?: boolean;
  onChangeText?: (text: any) => void;
};
function CustomInput(
  {
    style,
    placeholderTextColor,
    leftIcon,
    rightIcon,
    placeholderText,
    textOnBorder,
    inputStyle,
    editable,
    errorMessage,
    onChangeText,
    value,
  }: InputProps,
  ...props: any
) {
  return (
    <View style={styles.container}>
      {textOnBorder ? (
        <Hoshi
          value={value}
          onChangeText={onChangeText}
          label={textOnBorder}
          labelStyle={styles.labelStyle}
          inputStyle={inputStyle}
          borderColor={defaultColor.middleColor}
          style={[{paddingLeft: leftIcon ? 36 : 15}, style || {}]}
          //borderHeight={3}
          {...props}
          inputPadding={5}
        />
      ) : (
        <>
          <TextInput
            value={value}
            {...props}
            onChangeText={onChangeText}
            editable={editable}
            placeholderTextColor={placeholderTextColor}
            autoCapitalize="none"
            placeholder={placeholderText}
            style={[{paddingLeft: leftIcon ? 36 : 15}, style || {}]}
          />
          {errorMessage && (
            <CustomText style={styles.errorMessage}>{errorMessage}</CustomText>
          )}
          {leftIcon ? (
            <View style={styles.leftIconView}>{leftIcon}</View>
          ) : rightIcon ? (
            <View style={styles.rightIconView}>{rightIcon}</View>
          ) : null}
        </>
      )}
    </View>
  );
}
export default CustomInput;
