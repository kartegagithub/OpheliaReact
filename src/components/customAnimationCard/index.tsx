import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  ImageStyle,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  AnimatedStyle,
} from 'react-native-reanimated';

interface StyleProps {
  container: ViewStyle;
  card: ViewStyle;
  front: ViewStyle;
  back: ViewStyle;
  text: TextStyle;
}

interface CustomAnimationCardProps {
  frontImage?: string;
  backImage?: string;
  duration?: number;
  cardWidth?: number;
  cardHeight?: number;
}

const CustomAnimationCard: React.FC<CustomAnimationCardProps> = ({
  frontImage = 'https://picsum.photos/1000/1000',
  backImage = 'https://picsum.photos/1000/1000',
  duration = 500,
  cardWidth = 200,
  cardHeight = 300,
}) => {
  const [flipped, setFlipped] = useState<boolean>(false);
  const rotateY = useSharedValue<number>(0);

  const flipCard = (): void => {
    setFlipped(!flipped);
    rotateY.value = withTiming(flipped ? 0 : 180, {duration});
  };

  const frontAnimatedStyle = useAnimatedStyle(
    (): AnimatedStyle<ViewStyle> => ({
      transform: [{rotateY: `${rotateY.value}deg`}],
    }),
  );

  const backAnimatedStyle = useAnimatedStyle(
    (): AnimatedStyle<ViewStyle> => ({
      transform: [{rotateY: `${rotateY.value + 180}deg`}],
    }),
  );

  const imageStyle: ImageStyle = {
    width: '100%',
    height: '100%',
  };

  const dynamicStyles = StyleSheet.create({
    container: {
      width: cardWidth,
      height: cardHeight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      position: 'absolute',
      width: cardWidth,
      height: cardHeight,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backfaceVisibility: 'hidden',
      overflow: 'hidden',
    },
  });

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <View style={dynamicStyles.container}>
        <Animated.View
          style={[dynamicStyles.card, styles.front, frontAnimatedStyle]}>
          <Image source={{uri: frontImage}} style={imageStyle} />
        </Animated.View>

        <Animated.View
          style={[dynamicStyles.card, styles.back, backAnimatedStyle]}>
          <Image source={{uri: backImage}} style={imageStyle} />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create<StyleProps>({
  container: {
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    width: 200,
    height: 300,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    overflow: 'hidden',
  },
  front: {
    backgroundColor: '#3498db',
  },
  back: {
    backgroundColor: '#e74c3c',
    transform: [{rotateY: '180deg'}],
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomAnimationCard;
