import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomRating from '../components/customRating';
import defaultColor from '../constants/style/defaultColor';

function RatingScreen() {
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <Padding />
            <CustomRating
              reviewColor={defaultColor.textColor}
              selectedColor={defaultColor.middleColor}
              reviews={[
                'Terrible',
                'Bad',
                'Meh',
                'OK',
                'Good',
                'Hmm...',
                'Very Good',
                'Wow',
                'Amazing',
                'Unbelievable',
                'Jesus',
              ]}
              size={20}
              onFinishRating={ratingCompleted}
            />
            <Padding />
            <CustomRating
              ratingCount={5}
              imageSize={40}
              type={'rocket'}
              tintColor={defaultColor.pageBackground}
              ratingColor={defaultColor.middleColor}
              unSelectedColor={defaultColor.grayColor}
              onFinishRating={ratingCompleted}
            />
            <Padding />
            <CustomRating
              ratingCount={5}
              type={'heart'} //star, rocket, bell, heart
              imageSize={50}
              tintColor={defaultColor.pageBackground}
              ratingTextColor={defaultColor.middleColor}
              onFinishRating={ratingCompleted}
            />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default RatingScreen;
