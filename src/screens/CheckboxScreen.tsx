import React, {useState} from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomCheckbox from '../components/customCheckbox';

function CheckboxScreen() {
  const [checkData, setCheckData] = useState({
    check1: false,
    check2: false,
    check3: true,
  });
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>No Props</CustomText>
            <CustomCheckbox
              isChecked={checkData?.check1}
              onPress={_ => {
                setCheckData(() => {
                  return {
                    ...checkData,
                    check1: !checkData?.check1,
                  };
                });
              }}
            />
          </View>
          <Padding />
          <View>
            <CustomText>With Text</CustomText>
            <CustomCheckbox
              text="Kartega Yazılım"
              isChecked={checkData?.check2}
              onPress={_ => {
                setCheckData(() => {
                  return {
                    ...checkData,
                    check2: !checkData?.check2,
                  };
                });
              }}
            />
          </View>
          <Padding />
          <View>
            <CustomText>With Color</CustomText>
            <CustomCheckbox
              text="Kartega Yazılım"
              fillColor="red"
              isChecked={checkData?.check3}
              onPress={_ => {
                setCheckData(() => {
                  return {
                    ...checkData,
                    check3: !checkData?.check3,
                  };
                });
              }}
            />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default CheckboxScreen;
