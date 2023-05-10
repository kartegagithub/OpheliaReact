import {StyleSheet} from 'react-native';

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
});

export default homeScreenStyle;
