import StepIndicator from 'react-native-step-indicator';
import {useState} from 'react';

const CustomStepIndicator = ({
  isOn,
  onChange,
  direction,
  labels,
  customStyles,
  ...props
}) => {
  const [value, setValue] = useState(0);
  return (
    <StepIndicator
      customStyles={customStyles}
      direction={direction}
      onPress={it => setValue(it)}
      currentPosition={value}
      labels={labels}
    />
  );
};
export default CustomStepIndicator;
