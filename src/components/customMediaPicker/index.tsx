import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const getSelectImage = async options => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    includeBase64: true,
    ...options,
  });
  return result;
};
const getSelectCamera = async options => {
  const result = await launchCamera({
    mediaType: 'photo',
    includeBase64: true,
    ...options,
  });
  return result;
};
const getSelectVideo = async options => {
  const result = await launchImageLibrary({
    mediaType: 'video',
    includeBase64: true,
    ...options,
  });
  return result;
};

export {getSelectVideo, getSelectCamera, getSelectImage};
