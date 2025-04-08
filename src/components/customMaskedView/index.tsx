import * as React from 'react';
import MaskedView, {
  MaskedViewProps,
} from '@react-native-masked-view/masked-view';
import {ViewStyle, StyleProp} from 'react-native';
import {wp} from '../../shared/helpers/veriables';

interface CustomMaskedViewProps extends Omit<MaskedViewProps, 'maskElement'> {
  style?: StyleProp<ViewStyle>;
  maskElement: React.ReactElement;
  children: React.ReactNode;
}

const CustomMaskedView: React.FC<CustomMaskedViewProps> = ({
  style,
  maskElement,
  children,
  ...props
}) => {
  return (
    <MaskedView
      style={{
        width: wp(100) - 40,
        height: 100,
        flexDirection: 'row',
        ...style,
      }}
      maskElement={maskElement}
      {...props}>
      {children}
    </MaskedView>
  );
};

CustomMaskedView.displayName = 'CustomMaskedView';

export default CustomMaskedView;
