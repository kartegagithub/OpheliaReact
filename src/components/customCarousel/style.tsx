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
});

export default style;
