import * as React from 'react';
import style from './style';
import InputSpinner from 'react-native-input-spinner';

const CustomInputSpinner = ({onChange, value, ...props}) => {
  return (
    <InputSpinner
      value={value || 1}
      onChange={num => {
        onChange?.(num);
      }}
      {...props}
    />
  );
};
export default CustomInputSpinner;
