import * as React from 'react';
import style from './style';
import {AppleCard, AppOfTheDayCard} from 'react-native-apple-card-views';
const CustomBCard = ({type, onPress, onButtonPress, ...props}) => {
  if (!type || type == 'standart') {
    return (
      <AppleCard
        source={{uri: 'https://picsum.photos/id/237/900/900'}}
        onPress={onPress}
        {...props}
      />
    );
  } else if (type == 'other') {
    return (
      <AppOfTheDayCard
        onPress={onPress}
        onButtonPress={onButtonPress}
        {...props}
      />
    );
  }
};
export default CustomBCard;
