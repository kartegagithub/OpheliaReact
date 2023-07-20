import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomStyledText from '../components/customStyledText';

function StyledTextScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomStyledText>
              {'Welcome to <b><u>React Native</u> <i>Styled</i> Text</b> demo!'}
            </CustomStyledText>
            <Padding />
            <CustomStyledText
              textStyles={{
                demo: {
                  backgroundColor: 'yellow',
                },
              }}
              styles={{
                backgroundColor: 'red',
              }}>
              {
                'Welcome to <b><u>React Native</u> <demo><i>Styled</i> Text</demo></b> demo!'
              }
            </CustomStyledText>
            <Padding />
          </View>
        </View>
      </Content>
    </Container>
  );
}
export default StyledTextScreen;
