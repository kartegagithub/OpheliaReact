import * as React from 'react';
import style from './style';
import defaultColor from '../../constants/style/defaultColor';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const CustomSegmentedControl = ({
  selectedIndex = 0,
  values = [],
  onChange,
  ...props
}) => {
  return (
    <SegmentedControl
      values={values}
      appearance="dark"
      selectedIndex={selectedIndex}
      tintColor={defaultColor.lightColor}
      backgroundColor={defaultColor.lightDegreeColor}
      onChange={event => {
        onChange?.(event.nativeEvent.selectedSegmentIndex);
      }}
      {...props}
    />
  );
};
export default CustomSegmentedControl;
