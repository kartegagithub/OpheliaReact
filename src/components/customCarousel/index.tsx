import * as React from 'react';
import style from './style';
import {Image, TouchableOpacity, View} from 'react-native';
import CustomText from '../customText';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {wp} from '../../shared/helpers/veriables';
import CustomIcon from '../customIcon';

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
  const [activeSlide, setActiveSlide] = React.useState(0);
  const _renderItem = ({item, index}) => {
    return (
      <View style={style.slide}>
        <Image source={{uri: item?.illustration}} style={style.defaultItem} />

        <CustomText style={style.title}>{item.title}</CustomText>
      </View>
    );
  };
  const carouselRef = React.useRef();
  const goBack = () => {
    carouselRef?.current?.snapToPrev?.();
  };
  const goNext = () => {
    carouselRef?.current?.snapToNext?.();
  };
  return (
    <View
      style={{
        width: width || wp(100),
      }}>
      <Carousel
        ref={carouselRef}
        data={items || []}
        renderItem={render || _renderItem}
        sliderWidth={width || wp(100)}
        itemWidth={itemWidth || width || wp(100)}
        {...props}
        onSnapToItem={index => {
          props?.onSnapToItem?.(index);
          setActiveSlide(index);
        }}
      />
      {showArrow && (
        <>
          <TouchableOpacity
            onPress={goBack}
            style={[style.arrow, style.arrowLeft]}>
            <CustomIcon
              type="fontAwesome"
              name="angle-left"
              size={36}
              color="#000"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goNext}
            style={[style.arrow, style.arrowRight]}>
            <CustomIcon
              type="fontAwesome"
              name="angle-right"
              size={36}
              color="#000"
            />
          </TouchableOpacity>
        </>
      )}
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
