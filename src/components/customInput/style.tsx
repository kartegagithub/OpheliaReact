import { StyleSheet } from 'react-native';
import { wp } from '../../shared/helpers/veriables';

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 12,
    borderRadius: 4,
    height: 48,
    color: '#697686',
  },
  container: {
    marginTop: 16,
  },
  leftIconView: {
    position: "absolute",
    marginTop: 12,
    left: 12
  },
  rightIconView: {
    position: "absolute",
    marginTop: 12,
    marginLeft: wp(100) - 70
  }
});

export default styles;