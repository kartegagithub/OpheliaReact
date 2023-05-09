import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../shared/fragment/container';

function HomeScreen({navigation}) {
  const onPressText=()=>{
    navigation.navigate("TextScreen")
  }
  return (
    <Container>
      <TouchableOpacity onPress={onPressText} style={{backgroundColor:'#EFF3F9', padding:16,marginTop:16}}>
        <Text>
          CustomText Screen
        </Text>
      </TouchableOpacity>
    </Container>
  );
}
export default HomeScreen;
