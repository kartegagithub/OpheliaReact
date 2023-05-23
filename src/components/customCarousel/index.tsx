import * as React from 'react';
import style from './style';
import {Image, View} from 'react-native';
import CustomText from '../customText';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {wp} from '../../shared/helpers/veriables';

const CustomCarousel = ({
  render,
  items,
  paginationContainerStyle,
  paginationDotStyle,
  inactiveDotStyle,
  paginationProps,
  showPagination,
  ...props
}) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const _renderItem = ({item, index}) => {
    return (
      <View style={style.slide}>
        <Image source={{uri: item?.illustration}} style={style.defaultItem} />

        <CustomText style={style.title}>{item.title}</CustomText>
      </View>
    );
  };
  return (
    <View>
      <Carousel
        data={items || []}
        renderItem={render || _renderItem}
        sliderWidth={wp(100)}
        itemWidth={wp(100)}
        {...props}
        onSnapToItem={index => {
          props?.onSnapToItem?.(index);
          setActiveSlide(index);
        }}
      />
      {showPagination && (
        <Pagination
          dotsLength={items?.length}
          activeDotIndex={activeSlide}
          containerStyle={{
            ...style.pagiContainer,
            ...paginationContainerStyle,
          }}
          dotStyle={{
            ...style.paginationDotStyle,
            ...paginationDotStyle,
          }}
          inactiveDotStyle={{
            ...style.inactiveDotStyle,
            ...inactiveDotStyle,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          {...paginationProps}
        />
      )}
    </View>
  );
};
export default CustomCarousel;
