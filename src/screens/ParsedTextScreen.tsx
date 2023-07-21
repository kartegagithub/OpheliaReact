import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomParsedText from '../components/customParsedText';

function ParsedTextScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomParsedText>
              Hello this is an example of the ParsedText, links like
              http://www.google.com or http://www.facebook.com are clickable and
              phone number 444-555-6666 can call too. But you can also do more
              with this package, for example Bob will change style and David
              too. foo@gmail.com And the magic number is 42! #react
              #react-native
            </CustomParsedText>
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default ParsedTextScreen;
