import {StyleSheet} from 'react-native';
import defaultColor from '../../constants/style/defaultColor';

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: defaultColor.lightColor,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 2,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  defaultText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default style;
