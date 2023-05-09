import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../shared/fragment/container';
import IconUser from '../components/customInput/iconUser';
import CustomInput from '../components/customInput';

function TextInputScreen() {

  return (
    <Container>
        <CustomInput
        style={{
            fontSize: 12,
            borderRadius: 4,
            height: 48,
            color: '#697686',
            backgroundColor:"#EFF3F9"}}
        />
        <CustomInput
        style={{
            fontSize: 12,
            borderRadius: 4,
            height: 48,
            color: '#697686',
            backgroundColor:"#EFF3F9"}}
        placeholderTextColor={"red"}
        leftIcon={<IconUser/>}
        />
        <CustomInput
        style={ {fontSize: 12,
            borderRadius: 4,
            height: 48,
            color: '#697686',
            backgroundColor:"#EFF3F9"}}
            placeholderText="placeholder"
        placeholderTextColor={"gray"}
        rightIcon={<IconUser/>}
        />
    </Container>
  );
}
export default TextInputScreen;
