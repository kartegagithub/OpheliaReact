import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomAvatar from '../components/customAvatar';
import CustomText from '../components/customText';
import CustomCodeEditor from '../components/customCodeEditor';

function CodeEditorScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>No Props</CustomText>
            <CustomCodeEditor initialValue="<script>alert('HELLO WORLD!')</script>" />
          </View>
          <Padding />
          <View>
            <CustomText>With Style</CustomText>
            <CustomCodeEditor
              initialValue="<script>alert('HELLO WORLD!')</script>"
              style={{height: 50}}
            />
          </View>
          <Padding />
          <View>
            <CustomText>With Dracula Syntax Style</CustomText>
            <CustomCodeEditor
              initialValue="<script>alert('HELLO WORLD!')</script>"
              syntaxStyle="dracula"
              style={{height: 50}}
            />
          </View>
          <Padding />
          <View>
            <CustomText>With PHP</CustomText>
            <CustomCodeEditor
              initialValue={`<?php
              var_dump($_POST);
              ?>`}
              language="php"
            />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default CodeEditorScreen;
