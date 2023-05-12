import {StyleSheet} from 'react-native';
import defaultColor from '../../constants/style/defaultColor';

const homeScreenStyle = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  itemTitle: {
    marginLeft: 10,
  },
  itemButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  previewBtn: {
    marginRight: 5,
  },
  installArea: {
    paddingTop: 10,
  },
  installText: {
    paddingTop: 10,
  },
  setupText: {
    paddingTop: 10,
  },
  copyBtn: {
    marginTop: 10,
    backgroundColor: defaultColor.darkDegree,
  },
  createInstall: {
    backgroundColor: defaultColor.darkDegree,
  },
});

export default homeScreenStyle;
