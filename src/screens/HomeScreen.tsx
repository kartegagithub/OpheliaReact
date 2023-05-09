import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Container from '../shared/fragment/container';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomButton from '../components/customButton';
import CustomText from '../components/customText';

type RootStackParamList = {
  TextScreen: undefined;
  ButtonScreen: undefined;
  TextInputScreen: undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'TextScreen'>;

function HomeScreen({ navigation }: Props) {
  const onPressText = () => {
    navigation.navigate("TextScreen")
  }
  const onPressButton = () => {
    navigation.navigate("ButtonScreen")
  }
  const onPressTextInput = () => {
    navigation.navigate("TextInputScreen")
  }

  return (
    <Container>
      <TouchableOpacity onPress={onPressText} style={{ backgroundColor: '#EFF3F9', padding: 16, marginTop: 16 }}>
        <Text>
          Text
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressButton} style={{ backgroundColor: '#EFF3F9', padding: 16, marginTop: 16 }}>
        <Text>ButtonScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressTextInput} style={{ backgroundColor: '#EFF3F9', padding: 16, marginTop: 16 }}>
        <CustomText>
          TextInput
        </CustomText>
      </TouchableOpacity>
    </Container>
  );
}
export default HomeScreen;
