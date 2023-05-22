import {StyleSheet} from 'react-native';
import defaultColor from '../../constants/style/defaultColor';

const style = StyleSheet.create({
  default: {},
  textStyle: {
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  seperator: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 1,
  },
  dropdownTextStyle: {
    color: '#000',
    fontSize: 14,
    paddingHorizontal: 15,
    width: '100%',
    borderRadius: 7,
    backgroundColor: 'transparent',
  },
  selectedStyle: {
    backgroundColor: '#f1f1f1',
  },
  dropdownStyle: {
    width: 'auto',
    borderRadius: 7,
    marginTop: 7,
    width: 300,
  },
});

export default style;
