import DeviceInfo from 'react-native-device-info';

const getBatteryLevel = async () => {
  return await DeviceInfo.getBatteryLevel();
};
const getDeviceName = async () => {
  return await DeviceInfo.getDeviceName();
};
const getDeviceModel = async () => {
  return await DeviceInfo.getDeviceName();
};
const getDeviceVersion = async () => {
  return await DeviceInfo.getVersion();
};
const getApplicationName = async () => {
  return await DeviceInfo.getApplicationName();
};
const getBaseOs = async () => {
  return await DeviceInfo.getBaseOs();
};
const getBrand = async () => {
  return await DeviceInfo.getBrand();
};
const getCarrier = async () => {
  return await DeviceInfo.getCarrier();
};
const getDeviceToken = async () => {
  return await DeviceInfo.getDeviceToken();
};

export {
  getBatteryLevel,
  getDeviceName,
  getDeviceModel,
  getDeviceVersion,
  getApplicationName,
  getBaseOs,
  getBrand,
  getCarrier,
  getDeviceToken,
};
