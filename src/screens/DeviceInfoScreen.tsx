import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import CustomButton from '../components/customButton';
import Padding from '../shared/fragment/padding';
import {
  getApplicationName,
  getBaseOs,
  getBatteryLevel,
  getBrand,
  getCarrier,
  getDeviceModel,
  getDeviceName,
  getDeviceToken,
  getDeviceVersion,
} from '../components/customDeviceInfo';
import {showSuccess} from '../components/customMessage';

function DeviceInfoScreen() {
  const batteryLevel = async () => {
    const info = await getBatteryLevel();
    showSuccess(info);
  };
  const deviceName = async () => {
    const info = await getDeviceName();
    showSuccess(info);
  };
  const deviceVersion = async () => {
    const info = await getDeviceVersion();
    showSuccess(info);
  };
  const deviceModel = async () => {
    const info = await getDeviceModel();
    showSuccess(info);
  };
  const applicationName = async () => {
    const info = await getApplicationName();
    showSuccess(info);
  };
  const baseOS = async () => {
    const info = await getBaseOs();
    showSuccess(info);
  };
  const brand = async () => {
    const info = await getBrand();
    showSuccess(info);
  };
  const carrier = async () => {
    const info = await getCarrier();
    showSuccess(info);
  };
  const deviceToken = async () => {
    const info = await getDeviceToken();
    showSuccess(info);
  };
  return (
    <Container>
      <Content>
        <Padding />
        <CustomButton label="Battery Level" onPress={batteryLevel} />
        <Padding />
        <CustomButton label="Device Name" onPress={deviceName} />
        <Padding />
        <CustomButton label="Device Model" onPress={deviceModel} />
        <Padding />
        <CustomButton label="Device Version" onPress={deviceVersion} />
        <Padding />
        <CustomButton label="Application Name" onPress={applicationName} />
        <Padding />
        <CustomButton label="Base OS" onPress={baseOS} />
        <Padding />
        <CustomButton label="Device Brand" onPress={brand} />
        <Padding />
        <CustomButton label="Carrier" onPress={carrier} />
        <Padding />
        <CustomButton label="Device Token" onPress={deviceToken} />
        <Padding />
      </Content>
    </Container>
  );
}
export default DeviceInfoScreen;
