import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomDataTable from '../components/customDataTable';
import defaultColor from '../constants/style/defaultColor';

function DataTableScreen() {
  const data = [
    {name: 'Aslı', age: 21, gender: 'female'},
    {name: 'Cansu', age: 22, gender: 'female'},
    {name: 'Doruk', age: 21, gender: 'male'},
    {name: 'Suna', age: 22, gender: 'female'},
    {name: 'Emir', age: 20, gender: 'male'},
    {name: 'Barış', age: 13, gender: 'male'},
  ];
  const colNames = ['name', 'age', 'gender'];
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomDataTable
              data={data}
              noOfPages={2}
              colNames={colNames}
              backgroundColor={'rgba(23,2,4,0.2)'}
              headerLabelStyle={{
                backgroundColor: defaultColor.lightColor,
                width: 400,
              }}
            />
            <Padding />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default DataTableScreen;
