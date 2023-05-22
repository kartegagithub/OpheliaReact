import * as React from 'react';
import style from './style';
import {View} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import CustomText from '../customText';
import CustomImage from '../customImage';

const CustomMasonryImages = ({data = [], render, ...props}) => {
  const FurnitureCard = ({item}) => {
    return (
      <View>
        <CustomImage
          source={{uri: item?.imgURL}}
          style={{
            height: Math.random() < 0.5 ? 150 : 280,
            alignSelf: 'stretch',
          }}
          resizeMode="cover"
        />
        <CustomText style={style.textStyle}>{item?.text}</CustomText>
      </View>
    );
  };

  const renderItem = ({item, i}): ReactElement => {
    if (render) {
      return render(item);
    }
    return <FurnitureCard item={item} />;
  };
  return (
    <MasonryList
      data={data}
      keyExtractor={(item): string => item.id}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      {...props}
    />
  );
};
export default CustomMasonryImages;
