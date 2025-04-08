import * as React from 'react';
import style from './style';
import {View} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import CustomText from '../customText';
import CustomImage from '../customImage';

interface ImageItem {
  id: string;
  imgURL: string;
  text?: string;
  [key: string]: any;
}

interface FurnitureCardProps {
  item: ImageItem;
}

interface CustomMasonryImagesProps {
  data?: ImageItem[];
  render?: (item: ImageItem) => React.ReactElement;
  numColumns?: number;
  showsVerticalScrollIndicator?: boolean;
  [key: string]: any;
}

const CustomMasonryImages: React.FC<CustomMasonryImagesProps> = ({
  data = [],
  render,
  ...props
}) => {
  const FurnitureCard: React.FC<FurnitureCardProps> = ({item}) => {
    return (
      <View>
        <CustomImage
          source={{uri: item.imgURL}}
          style={{
            height: Math.random() < 0.5 ? 150 : 280,
            alignSelf: 'stretch',
          }}
          resizeMode="cover"
        />
        <CustomText style={style.textStyle}>{item.text}</CustomText>
      </View>
    );
  };

  const renderItem = ({
    item,
    i,
  }: {
    item: ImageItem;
    i: number;
  }): React.ReactElement => {
    if (render) {
      return render(item);
    }
    return <FurnitureCard item={item} />;
  };

  return (
    <MasonryList
      data={data}
      keyExtractor={(item: ImageItem): string => item.id}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      {...props}
    />
  );
};

CustomMasonryImages.displayName = 'CustomMasonryImages';

export default CustomMasonryImages;
