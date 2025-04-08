import * as React from 'react';
import styles from './style';
import ActionSheet from 'react-native-actionsheet';

interface CustomActionSheetProps {
  onPress?: (option: string, index: number) => void;
  cancelButtonIndex?: number;
  destructiveButtonIndex?: number;
  title?: string | null;
  message?: string | null;
  options: string[];
}

type CustomActionSheetRef = ActionSheet;

const CustomActionSheet = React.forwardRef<
  CustomActionSheetRef,
  CustomActionSheetProps
>(
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
          onPress?.(options[index], index);
        }}
      />
    );
  },
);

CustomActionSheet.displayName = 'CustomActionSheet';

export default CustomActionSheet;
