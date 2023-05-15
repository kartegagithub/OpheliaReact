import {StyleSheet} from 'react-native';
import {wp} from '../../shared/helpers/veriables';
import defaultColor from '../../constants/style/defaultColor';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    padding: 10,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: defaultColor.grayColor,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backLeftBtn: {},
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    height: '100%',
  },
  backRightBtnLeft: {
    backgroundColor: defaultColor.lightColor,
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: defaultColor.darkDegree,
    right: 0,
  },
});

export default style;
