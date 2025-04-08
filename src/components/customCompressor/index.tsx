import {
  Image,
  Video,
  getVideoMetaData,
  getRealPath,
  VideoCompressorConfig,
  ImageCompressorConfig,
  VideoMetadata,
} from 'react-native-compressor';

interface CompressionSettings {
  maxWidth?: number;
  quality?: number;
}

type MediaType = 'video' | 'image';

export const videoCompress = async (
  source: string,
  progress?: (progress: number) => void,
): Promise<string> => {
  return await Video.compress(
    source,
    {
      compressionMethod: 'auto',
    } as VideoCompressorConfig,
    (onProgress: number) => {
      progress?.(onProgress);
    },
  );
};

export const imageCompress = async (
  source: string,
  settings?: CompressionSettings,
): Promise<string> => {
  const result = await Image.compress(source, {
    maxWidth: settings?.maxWidth || 1000,
    quality: settings?.quality || 0.8,
  } as ImageCompressorConfig);
  return result;
};

export const getMetaData = async (source: string): Promise<VideoMetadata> => {
  return await getVideoMetaData(source);
};

export const realPath = async (
  source: string,
  type?: MediaType,
): Promise<string> => {
  return await getRealPath(source, type || 'video');
};
