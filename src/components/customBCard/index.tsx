import * as React from 'react';
import style from './style';
import {AppleCard, AppOfTheDayCard} from 'react-native-apple-card-views';
import {GestureResponderEvent} from 'react-native';

type CardType = 'standart' | 'other';

interface BaseCardProps {
  type?: CardType;
  onPress?: (event: GestureResponderEvent) => void;
}

interface AppleCardProps extends BaseCardProps {
  type?: 'standart';
  source: {
    uri: string;
  };
}

interface AppOfTheDayCardProps extends BaseCardProps {
  type: 'other';
  onButtonPress?: (event: GestureResponderEvent) => void;
  title?: string;
  subtitle?: string;
  // Add other AppOfTheDayCard specific props here
}

type CustomBCardProps = AppleCardProps | AppOfTheDayCardProps;

const CustomBCard: React.FC<CustomBCardProps> = ({
  type = 'standart',
  onPress,
  ...props
}) => {
  if (!type || type === 'standart') {
    return (
      <AppleCard
        source={(props as AppleCardProps).source}
        onPress={onPress}
        {...props}
      />
    );
  } else if (type === 'other') {
    const {onButtonPress} = props as AppOfTheDayCardProps;
    return (
      <AppOfTheDayCard
        onPress={onPress}
        onButtonPress={onButtonPress}
        {...props}
      />
    );
  }
  return null;
};

export default CustomBCard;
