import React from 'react';
import Container from '../shared/fragment/container';
import CustomInputMask from '../components/customInputMask';
import CustomText from '../components/customText';
import Padding from '../shared/fragment/padding';
import CustomMoneyInputMask from '../components/customMoneyInputMask';

function MoneyInputMaskScreen() {
  const [value, setValue] = React.useState('');
  const handleChange = (text: any) => {
    setValue(text);
  };
  return (
    <Container>
      <Padding />
      <CustomText>No Props</CustomText>
      <CustomMoneyInputMask onChangeText={handleChange} value={value} />
      <Padding />
      <CustomText>With TL</CustomText>
      <CustomMoneyInputMask
        onChangeText={handleChange}
        value={value}
        prefix="₺"
      />
      <Padding />
    </Container>
  );
}
export default MoneyInputMaskScreen;
