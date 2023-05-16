import React from 'react';
import Container from '../shared/fragment/container';
import Padding from '../shared/fragment/padding';
import CustomText from '../components/customText';
import CustomBigList from '../components/customBigList';
import data from '../assets/bigListData.json';
function BigListScreen() {
  return (
    <Container>
      <Padding />
      <CustomText>Standart List</CustomText>
      <CustomBigList data={data} />
      <Padding />
    </Container>
  );
}
export default BigListScreen;
