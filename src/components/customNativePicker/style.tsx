import {StyleSheet} from 'react-native';
import defaultColor from '../../constants/style/defaultColor';

const style = StyleSheet.create({
  default: {
    inputAndroid: {
      backgroundColor: defaultColor.lightColor,
      padding: 10,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
    },
    inputIOS: {
      backgroundColor: defaultColor.lightColor,
      padding: 10,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
    },
    iconContainer: {
      alignSelf: 'center',
      right: 10,
      top: 9,
    },
  },
});

export default style;
