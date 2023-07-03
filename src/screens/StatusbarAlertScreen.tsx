import React from 'react';
import CustomButton from '../components/customButton';
import {useStatusBarAlert} from '../components/customStatusbarAlert';
import CustomText from '../components/customText';
import Container from '../shared/fragment/container';
import Padding from '../shared/fragment/padding';

function StatusbarAlertScreen() {
  const {show, setShow, setSetting} = useStatusBarAlert();

  const showHide = () => {
    setShow(!show);
  };
  const showErrorMessage = () => {
    setSetting({
      type: 'success',
      message: 'Sessiz Mod Kapatıldı',
    });
    setShow(!show);
  };
  return (
    <Container>
      <Padding />
      <CustomButton onPress={showHide}>
        <CustomText color="white">Göster/Gizle</CustomText>
      </CustomButton>
      <Padding />
      <CustomButton onPress={showErrorMessage}>
        <CustomText color="white">Göster/Gizle With Message</CustomText>
      </CustomButton>
    </Container>
  );
}
export default StatusbarAlertScreen;
