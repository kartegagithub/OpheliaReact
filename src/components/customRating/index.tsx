import * as React from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';

interface CustomRatingProps {
  type?: 'star' | 'rocket' | 'bell' | 'heart' | 'custom';
  reviews?: string[];
  ratingCount?: number;
  imageSize?: number;
  size?: number;
  reviewColor?: string;
  selectedColor?: string;
  tintColor?: string;
  ratingColor?: string;
  unSelectedColor?: string;
  ratingTextColor?: string;
  onFinishRating?: (rating: number) => void;
}

const CustomRating: React.FC<CustomRatingProps> = ({
  type = 'custom',
  reviews,
  ratingCount = 5,
  imageSize = 30,
  size = 20,
  reviewColor = '#000',
  selectedColor = '#f1c40f',
  tintColor = 'transparent',
  ratingColor = '#f1c40f',
  unSelectedColor = '#BDC3C7',
  ratingTextColor = '#000',
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
          {...props}
        />
      ) : (
        <Rating
          tintColor={tintColor}
          ratingTextColor={ratingTextColor}
          ratingColor={ratingColor}
          ratingBackgroundColor={unSelectedColor}
          type={type}
          ratingCount={ratingCount}
          imageSize={imageSize}
          showRating
          onFinishRating={onFinishRating}
          {...props}
        />
      )}
    </>
  );
};

CustomRating.displayName = 'CustomRating';

export default CustomRating;
