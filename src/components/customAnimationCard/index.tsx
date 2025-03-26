import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, StyleSheet, Image} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const CustomAnimationCard = () => {
  const [flipped, setFlipped] = useState(false);
  const rotateY = useSharedValue(0);

  const flipCard = () => {
    setFlipped(!flipped);
    rotateY.value = withTiming(flipped ? 0 : 180, {duration: 500});
  };

  const frontAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{rotateY: `${rotateY.value}deg`}],
  }));

  const backAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{rotateY: `${rotateY.value + 180}deg`}],
  }));

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <View style={styles.container}>
        {/* Ön Yüz */}
        <Animated.View style={[styles.card, styles.front, frontAnimatedStyle]}>
          <Image
            source={{uri: 'https://picsum.photos/1000/1000'}}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Animated.View>

        {/* Arka Yüz */}
        <Animated.View style={[styles.card, styles.back, backAnimatedStyle]}>
          <Image
            source={{uri: 'https://picsum.photos/1000/1000'}}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
