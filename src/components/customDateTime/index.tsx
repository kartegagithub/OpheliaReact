import React from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';

type Props = {
  modal: boolean;
  open: boolean;
  date: any;
  onCancel: () => void;
  onConfirm: any;
  mode?: 'datetime' | 'date' | 'time';
  theme?: 'light' | 'dark' | 'auto';
  title?: string;
  confirmText?: string;
  cancelText?: string;
  textColor?: string;
  maximumDate?: any;
  minimumDate?: any;
  locale?: string;
};

function CustomDateTime({
  modal,
  open,
  date,
  onCancel,
  onConfirm,
  mode,
  theme,
  title,
  confirmText,
  cancelText,
  textColor,
  maximumDate,
  minimumDate,
  locale,
  ...props
}: Props) {
  return (
    <View>
      <DatePicker
        title={title}
        theme={theme}
        mode={mode}
        modal={modal}
        open={open}
        date={date}
        onConfirm={onConfirm}
        onCancel={onCancel}
        cancelText={cancelText}
        confirmText={confirmText}
        textColor={textColor}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        locale={locale}
        {...props}
      />
    </View>
  );
}

export default CustomDateTime;
