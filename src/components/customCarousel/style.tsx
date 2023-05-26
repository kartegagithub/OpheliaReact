import {StyleSheet} from 'react-native';
import defaultColor from '../../constants/style/defaultColor';
import {hp} from '../../shared/helpers/veriables';

const style = StyleSheet.create({
  slide: {},
  title: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    bottom: 0,
    color: '#fff',
    padding: 10,
  },
  defaultItem: {
    width: '100%',
    height: hp(30),
    resizeMode: 'cover',
  },
  arrow: {
    zIndex: 9999,
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  arrowLeft: {left: 0, paddingLeft: 10},
  arrowRight: {right: 0, paddingRight: 10},
});

export default style;
