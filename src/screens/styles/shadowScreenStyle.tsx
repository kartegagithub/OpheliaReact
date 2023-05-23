import {StyleSheet} from 'react-native';
import {wp} from '../../shared/helpers/veriables';

const shadowScreenStyle = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    width: wp(100) - 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {paddingHorizontal: 20},
});

export default shadowScreenStyle;
