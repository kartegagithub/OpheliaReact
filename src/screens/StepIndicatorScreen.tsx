import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomStepIndicator from '../components/customStepIndicator';
import defaultColor from '../constants/style/defaultColor';

function StepIndicatorScreen() {
  const labels = [
    'Cart',
    'Delivery Address',
    'Order Summary',
    'Payment Method',
    'Track',
  ];
  const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: defaultColor.grayColor,
    separatorFinishedColor: defaultColor.grayColor,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: defaultColor.middleColor,
    stepIndicatorUnFinishedColor: defaultColor.grayColor,
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: defaultColor.lightDegreeColor,
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: defaultColor.middleColor,
    labelSize: 30,
    currentStepLabelColor: defaultColor.grayColor,
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomStepIndicator labels={labels} />
            <Padding />
            <CustomStepIndicator
              direction="vertical"
              customStyles={customStyles}
              labels={labels}
            />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default StepIndicatorScreen;
