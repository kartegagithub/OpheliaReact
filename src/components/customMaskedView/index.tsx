import * as React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import {wp} from '../../shared/helpers/veriables';

const CustomMaskedView = ({style, maskElement, ...props}) => {
  return (
    <MaskedView
      style={{width: wp(100) - 40, height: 100, flexDirection: 'row', ...style}}
      maskElement={maskElement}>
      {props?.children}
    </MaskedView>
  );
};
export default CustomMaskedView;
