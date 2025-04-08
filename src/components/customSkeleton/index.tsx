import * as React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {View, ViewStyle} from 'react-native';
import {style} from './style';

interface CustomSkeletonProps {
  shimmerStyle?: ViewStyle;
  style?: ViewStyle;
}

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({
  shimmerStyle,
  style: propStyle,
  ...props
}) => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <View>
      <ShimmerPlaceHolder
        style={[style.questionBox, propStyle]}
        shimmerStyle={[{borderRadius: 25}, shimmerStyle]}
        {...props}
      />
    </View>
  );
};

CustomSkeleton.displayName = 'CustomSkeleton';

export default CustomSkeleton;
