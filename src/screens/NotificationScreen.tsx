import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import CustomButton from '../components/customButton';
import Padding from '../shared/fragment/padding';
import { showError, showSuccess, showWarning, showInfo } from '../components/customNotification';

function NotificationScreen() {
  return (
    <Container>
      <Content>
        <Padding />
        <CustomButton
          label="Success Message"
          onPress={() => showSuccess('Title', 'Test Message')}
        />
        <Padding />
        <CustomButton
          label="Error Message"
          onPress={() => showError('Title', 'Test Message')}
        />
        <Padding />
        <CustomButton
          label="Info Message"
          onPress={() => showInfo('Title', 'Test Message')}
        />
        <Padding />
        <CustomButton
          label="Warning Message"
          onPress={() => showWarning('Title', 'Test Message')}
        />
        <Padding />
       
      </Content>
    </Container>
  );
}
export default NotificationScreen;
