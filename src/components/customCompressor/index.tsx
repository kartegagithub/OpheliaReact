import {
  Image,
  Video,
  getVideoMetaData,
  getRealPath,
} from 'react-native-compressor';

export const videoCompress = async (source, progress) => {
  return await Video.compress(
    source,
    {
      compressionMethod: 'auto',
    },
    onProgress => {
      progress?.(onProgress);
    },
  );
};
export const imageCompress = async (source, settings) => {
  const result = await Image.compress(source, {
    maxWidth: settings?.maxWidth || 1000,
    quality: settings?.quality || 0.8,
  });
  return result;
};
export const getMetaData = async source => {
  return await getVideoMetaData(source);
};
export const realPath = async (source, type) => {
  // type is video||image
  return await getRealPath(source, type || 'video');
};
