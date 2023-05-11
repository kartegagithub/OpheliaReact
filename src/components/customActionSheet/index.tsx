import * as React from 'react';
import styles from './style';
import ActionSheet from 'react-native-actionsheet';

const CustomActionSheet = React.forwardRef(
  (
    {
      onPress,
      cancelButtonIndex,
      destructiveButtonIndex,
      title = null,
      message = null,
      options = [],
    },
    ref,
  ) => {
    return (
      <ActionSheet
        ref={ref}
        title={title}
        options={options}
        message={message}
        cancelButtonIndex={cancelButtonIndex}
        destructiveButtonIndex={destructiveButtonIndex}
        onPress={index => {
          onPress?.(options?.[index], index);
        }}
      />
    );
  },
);
export default CustomActionSheet;
