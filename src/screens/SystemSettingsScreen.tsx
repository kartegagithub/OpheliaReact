import React, {useEffect, useState} from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomButton from '../components/customButton';
import {
  airplaneStatus,
  bluetoothStatus,
  getBrightness,
  getVolume,
  locationStatus,
  openSettings,
  setBrightness,
  setVolume,
  wifiStatus,
} from '../components/customSystemSettings';

function SystemSettingsScreen() {
  const [deviceData, setDeviceData] = useState({});
  const getDeviceData = async () => {
    setDeviceData({
      bluetoothStatus: await bluetoothStatus(),
      wifiStatus: await wifiStatus(),
      locationStatus: await locationStatus(),
      airplaneStatus: await airplaneStatus(),
      volume: await getVolume(),
      brightness: await getBrightness(),
    });
  };
  useEffect(() => {
    getDeviceData();
  }, []);
  const setVolumeData = () => {
    setVolume(0.5);
  };
  const setBrightnessData = () => {
    setBrightness(0.5);
  };
  const openSetting = () => {
    openSettings();
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomButton onPress={setVolumeData}>
              <CustomText color="#fff">Set Volume 0.5</CustomText>
            </CustomButton>
            <Padding />
            <CustomButton onPress={setBrightnessData}>
              <CustomText color="#fff">Set Brightness 0.5</CustomText>
            </CustomButton>
            <Padding />
            <CustomButton onPress={openSetting}>
              <CustomText color="#fff">Open Settings</CustomText>
            </CustomButton>
            <Padding />
          </View>
          <Padding />
          <CustomText>Device Settings:</CustomText>
          <CustomText>{JSON.stringify(deviceData)}</CustomText>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default SystemSettingsScreen;
