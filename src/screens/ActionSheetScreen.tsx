import React, {createRef, useRef} from 'react';
import Container from '../shared/fragment/container';
import CustomText from '../components/customText';
import Content from '../shared/fragment/content';
import CustomButton from '../components/customButton';
import CustomActionSheet from '../components/customActionSheet';
import {Alert} from 'react-native';

function ActionSheetScreen() {
  const ref = createRef();
  const ref1 = createRef();
  const ref2 = createRef();
  const ref3 = createRef();
  const ref4 = createRef();
  return (
    <Container>
      <Content>
        <CustomButton
          label="ActionSheet With Buttons"
          onPress={() => ref?.current?.show()}
        />
        <CustomButton
          label="ActionSheet With Buttons and Title"
          onPress={() => ref1?.current?.show()}
        />
        <CustomButton
          label="ActionSheet With Buttons, Title and Message"
          onPress={() => ref2?.current?.show()}
        />
        <CustomButton
          label="ActionSheet With Buttons Index"
          onPress={() => ref3?.current?.show()}
        />
        <CustomButton
          label="ActionSheet With Cancel Index 1, Destructive Index 2"
          onPress={() => ref4?.current?.show()}
        />
        <CustomActionSheet
          options={['Button 1', 'Button 2']}
          ref={ref}
          onPress={title => Alert.alert('Selected Button: ' + title)}
        />
        <CustomActionSheet
          options={['Button 1', 'Button 2']}
          title="Example Title"
          ref={ref1}
          onPress={title => Alert.alert('Selected Button: ' + title)}
        />
        <CustomActionSheet
          options={['Button 1', 'Button 2']}
          title="Example Title"
          message="Example Message"
          ref={ref2}
          onPress={title => Alert.alert('Selected Button: ' + title)}
        />
        <CustomActionSheet
          options={['Button 1', 'Button 2']}
          title="Example Title"
          message="Example Message"
          ref={ref3}
          onPress={index => Alert.alert('Selected Button Index: ' + index)}
        />
        <CustomActionSheet
          options={['Button 1', 'Button 2', 'Button 3']}
          title="Example Title"
          message="Example Message"
          cancelButtonIndex={1}
          destructiveButtonIndex={2}
          ref={ref4}
          onPress={index => Alert.alert('Selected Button Index: ' + index)}
        />
      </Content>
    </Container>
  );
}
export default ActionSheetScreen;
