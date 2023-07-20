import {Alert} from 'react-native';
import SystemSetting from 'react-native-system-setting';

const getVolume = async () => {
  const volume = await SystemSetting.getVolume();
  return volume;
};
const setVolume = async volume => {
  SystemSetting.setVolume(volume);
};
const getBrightness = async () => {
  const brightness = await SystemSetting.getBrightness();
  return brightness;
};
const setBrightness = async brightness => {
  const brightnessD = await SystemSetting.setBrightnessForce(brightness);
  !brightnessD &&
    Alert.alert('Permission Deny', 'You have no permission changing settings', [
      {text: 'Ok', style: 'cancel'},
      {
        text: 'Open Setting',
        onPress: () => SystemSetting.grantWriteSettingPermission(),
      },
    ]);
};
const saveBrightness = async () => {
  SystemSetting.saveBrightness();
};
const restoreBrightness = async () => {
  SystemSetting.restoreBrightness();
};

const wifiStatus = async () => {
  const wifiPass = await SystemSetting.isWifiEnabled();
  return wifiPass;
};
const locationStatus = async () => {
  const locationPass = await SystemSetting.isLocationEnabled();
  return locationPass;
};
const bluetoothStatus = async () => {
  const bluetoothPass = await SystemSetting.isBluetoothEnabled();
  return bluetoothPass;
};

const airplaneStatus = async () => {
  const airplanePass = await SystemSetting.isAirplaneEnabled();
  return airplanePass;
};

const openSettings = async () => {
  SystemSetting.openAppSystemSettings();
};

export {
  getVolume,
  setVolume,
  getBrightness,
  setBrightness,
  saveBrightness,
  restoreBrightness,
  wifiStatus,
  locationStatus,
  bluetoothStatus,
  airplaneStatus,
  openSettings,
};
