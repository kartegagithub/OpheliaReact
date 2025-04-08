import {Alert} from 'react-native';
import SystemSetting from 'react-native-system-setting';

const getVolume = async (): Promise<number> => {
  const volume = await SystemSetting.getVolume();
  return volume;
};

const setVolume = async (volume: number): Promise<void> => {
  SystemSetting.setVolume(volume);
};

const getBrightness = async (): Promise<number> => {
  const brightness = await SystemSetting.getBrightness();
  return brightness;
};

const setBrightness = async (brightness: number): Promise<void> => {
  const brightnessD = await SystemSetting.setBrightnessForce(brightness);
  !brightnessD &&
    Alert.alert('Permission Deny', 'You have no permission changing settings', [
      {text: 'Ok', style: 'cancel'},
      {
        text: 'Open Setting',
        onPress: () => SystemSetting.grantWriteSettingPremission(),
      },
    ]);
};

const saveBrightness = async (): Promise<void> => {
  SystemSetting.saveBrightness();
};

const restoreBrightness = async (): Promise<void> => {
  SystemSetting.restoreBrightness();
};

const wifiStatus = async (): Promise<boolean> => {
  const wifiPass = await SystemSetting.isWifiEnabled();
  return wifiPass;
};

const locationStatus = async (): Promise<boolean> => {
  const locationPass = await SystemSetting.isLocationEnabled();
  return locationPass;
};

const bluetoothStatus = async (): Promise<boolean> => {
  const bluetoothPass = await SystemSetting.isBluetoothEnabled();
  return bluetoothPass;
};

const airplaneStatus = async (): Promise<boolean> => {
  const airplanePass = await SystemSetting.isAirplaneEnabled();
  return airplanePass;
};

const openSettings = async (): Promise<void> => {
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
