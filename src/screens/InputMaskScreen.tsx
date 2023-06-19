import React from 'react';
import Container from '../shared/fragment/container';
import CustomInputMask from '../components/customInputMask';
import CustomText from '../components/customText';
import Padding from '../shared/fragment/padding';

function InputMaskScreen() {
  const [value, setValue] = React.useState('');
  const handleChange = (text: any) => {
    setValue(text);
  };
  return (
    <Container>
      <Padding />
      <CustomText>No Props</CustomText>
      <CustomInputMask onChangeText={handleChange} value={value} />
      <Padding />
      <CustomText>Credit Card</CustomText>
      <CustomInputMask onChangeText={handleChange} value={value} mask="card" />
      <Padding />
      <CustomText>Date</CustomText>
      <CustomInputMask onChangeText={handleChange} value={value} mask="date" />
      <Padding />
    </Container>
  );
}
export default InputMaskScreen;
