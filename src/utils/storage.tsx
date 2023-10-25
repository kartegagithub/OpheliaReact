import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const getStorageData = (key, initialValue) => {
  const value = storage.getString(key) ?? initialValue;
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};

export const setStorageData = (key, value) => {
  typeof value === 'object'
    ? storage.set(key, JSON.stringify(value))
    : storage.set(key, value);
};

export const removeStorageData = key => {
  try {
    storage.delete(key);
    return true;
  } catch (error) {
    return false;
  }
};
