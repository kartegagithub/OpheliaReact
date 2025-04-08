import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  ImageLibraryOptions,
  CameraOptions,
} from 'react-native-image-picker';

interface MediaPickerOptions
  extends Omit<ImageLibraryOptions, 'mediaType'>,
    Omit<CameraOptions, 'mediaType'> {
  mediaType?: 'photo' | 'video' | 'mixed';
  includeBase64?: boolean;
  [key: string]: any;
}

const getSelectImage = async (
  options?: MediaPickerOptions,
): Promise<ImagePickerResponse> => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    includeBase64: true,
    ...options,
  });
  return result;
};

const getSelectCamera = async (
  options?: MediaPickerOptions,
): Promise<ImagePickerResponse> => {
  const result = await launchCamera({
    mediaType: 'photo',
    includeBase64: true,
    ...options,
  });
  return result;
};

const getSelectVideo = async (
  options?: MediaPickerOptions,
): Promise<ImagePickerResponse> => {
  const result = await launchImageLibrary({
    mediaType: 'video',
    includeBase64: true,
    ...options,
  });
  return result;
};

export {
  getSelectVideo,
  getSelectCamera,
  getSelectImage,
  type MediaPickerOptions,
  type ImagePickerResponse,
};
