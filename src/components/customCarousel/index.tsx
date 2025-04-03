import * as React from 'react';
import style from './style';
import {Dimensions, Image, View} from 'react-native';
import CustomText from '../customText';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';

const CustomCarousel = ({
  render,
  items,
  paginationContainerStyle,
  paginationDotStyle,
  inactiveDotStyle,
  paginationProps,
  showPagination,
  showArrow,
  width,
  itemWidth,
  ...props
}) => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const _renderItem = ({item, index}) => {
    return (
      <View style={style.slide}>
        <Image source={{uri: item?.illustration}} style={style.defaultItem} />
        <CustomText style={style.title}>{item?.title}</CustomText>
      </View>
    );
  };

  return (
    <View id="carousel-component" dataSet={items}>
      <Carousel
        data={items}
        height={258}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={Dimensions.get('window').width}
        style={{
          width: Dimensions.get('window').width,
        }}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onProgressChange={progress}
        renderItem={item => _renderItem(item)}
        {...props}
      />
      {showPagination && (
        <Pagination.Basic
          progress={progress}
          data={items}
          dotStyle={style.pagination}
          containerStyle={{gap: 5, marginTop: 10}}
          onPress={onPressPagination}
        />
      )}
    </View>
  );
};
export default CustomCarousel;
