import * as React from 'react';
import {useState} from 'react';
import StepIndicator from 'react-native-step-indicator';
import {ViewStyle, TextStyle} from 'react-native';

interface CustomStyles {
  stepIndicatorSize?: number;
  currentStepIndicatorSize?: number;
  separatorStrokeWidth?: number;
  separatorStrokeUnfinishedWidth?: number;
  separatorStrokeFinishedWidth?: number;
  currentStepStrokeWidth?: number;
  stepStrokeWidth?: number;
  stepStrokeCurrentColor?: string;
  stepStrokeFinishedColor?: string;
  stepStrokeUnFinishedColor?: string;
  separatorFinishedColor?: string;
  separatorUnFinishedColor?: string;
  stepIndicatorFinishedColor?: string;
  stepIndicatorUnFinishedColor?: string;
  stepIndicatorCurrentColor?: string;
  stepIndicatorLabelFontSize?: number;
  currentStepIndicatorLabelFontSize?: number;
  stepIndicatorLabelCurrentColor?: string;
  stepIndicatorLabelFinishedColor?: string;
  stepIndicatorLabelUnFinishedColor?: string;
  labelColor?: string;
  labelSize?: number;
  currentStepLabelColor?: string;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

interface CustomStepIndicatorProps {
  isOn?: boolean;
  onChange?: (step: number) => void;
  direction?: 'vertical' | 'horizontal';
  labels?: string[];
  customStyles?: CustomStyles;
  [key: string]: any;
}

const CustomStepIndicator: React.FC<CustomStepIndicatorProps> = ({
  isOn = false,
  onChange,
  direction = 'horizontal',
  labels = [],
  customStyles,
  ...props
}) => {
  const [value, setValue] = useState<number>(0);

  const handleStepChange = (step: number): void => {
    setValue(step);
    onChange?.(step);
  };

  return (
    <StepIndicator
      customStyles={customStyles}
      direction={direction}
      onPress={handleStepChange}
      currentPosition={value}
      labels={labels}
      {...props}
    />
  );
};

CustomStepIndicator.displayName = 'CustomStepIndicator';

export default CustomStepIndicator;
