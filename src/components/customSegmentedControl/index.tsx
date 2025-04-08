import * as React from 'react';
import defaultColor from '../../constants/style/defaultColor';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

interface CustomSegmentedControlProps {
  selectedIndex?: number;
  values: string[];
  onChange?: (index: number) => void;
  appearance?: 'dark' | 'light';
  tintColor?: string;
  backgroundColor?: string;
  enabled?: boolean;
  fontStyle?: {
    color?: string;
    fontSize?: number;
    fontFamily?: string;
  };
}

const CustomSegmentedControl: React.FC<CustomSegmentedControlProps> = ({
  selectedIndex = 0,
  values = [],
  onChange,
  appearance = 'dark',
  tintColor = defaultColor.lightColor,
  backgroundColor = defaultColor.lightDegreeColor,
  ...props
}) => {
  const handleChange = React.useCallback(
    (event: {nativeEvent: {selectedSegmentIndex: number}}) => {
      onChange?.(event.nativeEvent.selectedSegmentIndex);
    },
    [onChange],
  );

  return (
    <SegmentedControl
      values={values}
      appearance={appearance}
      selectedIndex={selectedIndex}
      tintColor={tintColor}
      backgroundColor={backgroundColor}
      onChange={handleChange}
      {...props}
    />
  );
};

CustomSegmentedControl.displayName = 'CustomSegmentedControl';

export default CustomSegmentedControl;
