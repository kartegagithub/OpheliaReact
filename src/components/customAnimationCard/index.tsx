import * as React from 'react';
import style from './style';
import GestureFlipView from 'react-native-gesture-flip-card';
const CustomAnimationCard = ({
  renderBack,
  renderFront,
  width,
  height,
  ...props
}) => {
  return (
    <GestureFlipView width={width || 300} height={height || 500} gestureEnabled={true} {...props}>
      {renderFront?.()}
      {renderBack?.()}
    </GestureFlipView>
  );
};
export default CustomAnimationCard;
