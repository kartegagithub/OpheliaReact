import * as React from 'react';
import style from './style';
import {Dimensions, Image, View, ViewStyle, StyleProp} from 'react-native';
import CustomText from '../customText';
import Carousel, {
  ICarouselInstance,
  Pagination,
  BaseCarouselProps,
} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';

interface CarouselItem {
  illustration?: string;
  title?: string;
  [key: string]: any;
}

interface CustomCarouselProps extends Partial<BaseCarouselProps<CarouselItem>> {
  render?: (item: CarouselItem, index: number) => React.ReactElement;
  items: CarouselItem[];
  paginationContainerStyle?: StyleProp<ViewStyle>;
  paginationDotStyle?: StyleProp<ViewStyle>;
  inactiveDotStyle?: StyleProp<ViewStyle>;
  paginationProps?: Pagination.BasicProps;
  showPagination?: boolean;
  showArrow?: boolean;
  width?: number;
  itemWidth?: number;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  render,
  items,
  paginationContainerStyle,
  paginationDotStyle,
  inactiveDotStyle,
  paginationProps,
  showPagination = false,
  showArrow = false,
  width = Dimensions.get('window').width,
  itemWidth,
  ...props
}) => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = React.useCallback(
    (index: number) => {
      ref.current?.scrollTo({
        count: index - progress.value,
        animated: true,
      });
    },
    [progress.value],
  );

  const _renderItem = React.useCallback(
    ({item, index}: {item: CarouselItem; index: number}) => {
      return (
        <View style={style.slide}>
          <Image source={{uri: item?.illustration}} style={style.defaultItem} />
          <CustomText style={style.title}>{item?.title}</CustomText>
        </View>
      );
    },
    [],
  );

  return (
    <View>
      <Carousel
        ref={ref}
        data={items}
        height={258}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={width}
        style={{
          width: width,
        }}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onProgressChange={progress}
        renderItem={render || _renderItem}
        {...props}
      />
      {showPagination && (
        <Pagination.Basic
          progress={progress}
          data={items}
          dotStyle={style.pagination}
          containerStyle={{gap: 5, marginTop: 10}}
          onPress={onPressPagination}
          {...paginationProps}
        />
      )}
    </View>
  );
};

CustomCarousel.displayName = 'CustomCarousel';

export default CustomCarousel;
