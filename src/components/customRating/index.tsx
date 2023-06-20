import {Rating, AirbnbRating} from 'react-native-ratings';
const CustomRating = ({
  type,
  reviews,
  ratingCount,
  imageSize,
  size,
  reviewColor,
  selectedColor,
  tintColor,
  ratingColor,
  unSelectedColor,
  ratingTextColor,
  onFinishRating,
  ...props
}) => {
  return (
    <>
      {reviews ? (
        <AirbnbRating
          reviewColor={reviewColor}
          selectedColor={selectedColor}
          count={11}
          reviews={reviews}
          defaultRating={11}
          size={size}
        />
      ) : (
        <Rating
          tintColor={tintColor}
          ratingTextColor={ratingTextColor}
          ratingColor={ratingColor}
          ratingBackgroundColor={unSelectedColor}
          type={type || 'custom'}
          ratingCount={ratingCount}
          imageSize={imageSize}
          showRating
          onFinishRating={onFinishRating}
        />
      )}
    </>
  );
};
export default CustomRating;
