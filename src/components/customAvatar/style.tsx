import {StyleSheet} from 'react-native';
import defaultColor from '../../constants/style/defaultColor';

const style = StyleSheet.create({
  badgeContainer: {
    backgroundColor: defaultColor.darkColor,
    //height: 16,
    position: 'absolute',
    borderRadius: 20,
    paddingHorizontal: 7,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
  },
  badgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default style;
