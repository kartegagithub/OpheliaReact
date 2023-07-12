import React, {useState} from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomAnimateNumber from '../components/customAnimateNumber';
import CustomButton from '../components/customButton';

function AnimateNumberScreen() {
  const [number, setNumber] = useState(1);
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomAnimateNumber number={number} />
          </View>
          <Padding />
          <CustomButton onPress={() => setNumber(prev => prev + 1)}>
            <CustomText color="#fff">Artır</CustomText>
          </CustomButton>
          <CustomButton onPress={() => setNumber(prev => prev - 1)}>
            <CustomText color="#fff">Azalt</CustomText>
          </CustomButton>
        </View>
      </Content>
    </Container>
  );
}
export default AnimateNumberScreen;
