import React from 'react';
import {Text, View} from 'react-native';
import Container from '../../shared/fragment/container';

function CustomButton() {
  return (
    <Container>
      <View>
        <Text style={{color: '#000'}}>Hello World!</Text>
      </View>
    </Container>
  );
}
export default CustomButton;
