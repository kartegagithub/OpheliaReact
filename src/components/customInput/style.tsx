import {StyleSheet} from 'react-native';
import {wp} from '../../shared/helpers/veriables';
import defaultColor from '../../constants/style/defaultColor';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  leftIconView: {
    position: 'absolute',
    marginTop: 12,
    left: 12,
  },
  rightIconView: {
    position: 'absolute',
    marginTop: 12,
    marginLeft: wp(100) - 70,
  },
  labelStyle: {
    fontSize: 14,
    color: defaultColor.middleColor,
  },
  errorMessage: {
    fontSize: 12,
    color: '#dc143c',
    top: 4,
  },
});

export default styles;
