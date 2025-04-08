import * as React from 'react';
import {
  TextInput,
  View,
  StyleProp,
  ViewStyle,
  TextInputProps,
  TextStyle,
} from 'react-native';
import styles from './style';
import {Hoshi, HoshiProps} from 'react-native-textinput-effects';
import CustomText from '../customText';
import defaultColor from '../../constants/style/defaultColor';

interface InputProps extends Omit<TextInputProps & HoshiProps, 'style'> {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  placeholderTextColor?: string;
  placeholderText?: string;
  errorMessage?: string;
  textOnBorder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  value?: string;
  editable?: boolean;
  onChangeText?: (text: string) => void;
}

const CustomInput: React.FC<InputProps> = ({
  style,
  placeholderTextColor,
  leftIcon,
  rightIcon,
  placeholderText,
  textOnBorder,
  inputStyle,
  editable = true,
  errorMessage,
  onChangeText,
  value,
  ...props
}) => {
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
          inputPadding={5}
          {...props}
        />
      ) : (
        <>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            editable={editable}
            placeholderTextColor={placeholderTextColor}
            autoCapitalize="none"
            placeholder={placeholderText}
            style={[{paddingLeft: leftIcon ? 36 : 15}, style || {}]}
            {...props}
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
};

CustomInput.displayName = 'CustomInput';

export default CustomInput;
