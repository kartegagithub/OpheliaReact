import * as React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';
import {style} from './style';

const CustomSkeleton = ({...props}) => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
  return (
    <View>
      <ShimmerPlaceHolder
        style={style.questionBox}
        shimmerStyle={{borderRadius: 25}}
      />
    </View>
  );
};
export default CustomSkeleton;
