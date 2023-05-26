import {StyleSheet} from 'react-native';
import {hp, wp} from '../../shared/helpers/veriables';

const blurScreenStyle = StyleSheet.create({
  blur: {
    position: 'absolute',
    height: hp(100) - 250,
    width: wp(100) - 40,
    justifyContent: 'center',
  },
  backImg: {
    width: wp(100) - 40,
    height: '100%',
  },
  view: {
    width: wp(100) - 40,
    height: hp(100) - 250,
  },
  buttonText: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
  },
  blackText: {
    color: '#000',
  },
});

export default blurScreenStyle;
