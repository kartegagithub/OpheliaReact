import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomInputSpinner from '../components/customInputSpinner';

function InputSpinnerScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomInputSpinner onChange={b => alert(b)} />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default InputSpinnerScreen;
