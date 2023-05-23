import * as React from 'react';
import style from './style';
import defaultColor from '../../constants/style/defaultColor';
import {View} from 'react-native';
import CustomText from '../customText';
import Carousel from 'react-native-snap-carousel';
import {hp, wp} from '../../shared/helpers/veriables';

const CustomCarousel = ({...props}) => {
  const _renderItem = ({item, index}) => {
    return (
      <View style={style.slide}>
        <CustomText style={style.title}>{item.title}</CustomText>
      </View>
    );
  };
  return (
    <Carousel
      data={['', '']}
      renderItem={_renderItem}
      sliderWidth={wp(100)}
      itemWidth={hp(50)}
    />
  );
};
export default CustomCarousel;
