import * as React from 'react';
import style from './style';
import InputSpinner, {
  ReactNativeInputSpinnerProps,
} from 'react-native-input-spinner';

interface CustomInputSpinnerProps
  extends Omit<ReactNativeInputSpinnerProps, 'onChange'> {
  onChange?: (value: number) => void;
  value?: number;
}

const CustomInputSpinner: React.FC<CustomInputSpinnerProps> = ({
  onChange,
  value,
  ...props
}) => {
  return (
    <InputSpinner
      value={value || 1}
      onChange={(num: number) => {
        onChange?.(num);
      }}
      {...props}
    />
  );
};

CustomInputSpinner.displayName = 'CustomInputSpinner';

export default CustomInputSpinner;
