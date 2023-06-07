import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import CustomButton from '../components/customButton';
import Padding from '../shared/fragment/padding';
import {getPermission} from '../components/customPermissions';

function PermissionsScreen() {
  const requiredFunc = () => {
    alert('Permission is Success');
  };
  return (
    <Container>
      <Content>
        <Padding />
        <CustomButton
          label="With Camera Permission"
          onPress={() => getPermission('camera', false, requiredFunc, true)}
        />
        <Padding />
        <CustomButton
          label="With Microphone Permission"
          onPress={() => getPermission('microphone', false, requiredFunc, true)}
        />
        <Padding />
      </Content>
    </Container>
  );
}
export default PermissionsScreen;
