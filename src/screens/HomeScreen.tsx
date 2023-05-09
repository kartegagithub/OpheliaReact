import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../shared/fragment/container';
import CustomText from '../components/customText';

function HomeScreen({navigation}) {
  const onPressText=()=>{
    navigation.navigate("TextScreen")
  }
  const onPressTextInput=()=>{
    navigation.navigate("TextInputScreen")
  }
  return (
    <Container>
      <TouchableOpacity onPress={onPressText} style={{backgroundColor:'#EFF3F9', padding:16,marginTop:16}}>
        <Text>
          Text
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressTextInput} style={{backgroundColor:'#EFF3F9', padding:16,marginTop:16}}>
        <CustomText>
          TextInput
        </CustomText>
      </TouchableOpacity>
    </Container>
  );
}
export default HomeScreen;
