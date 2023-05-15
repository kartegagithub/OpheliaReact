import * as React from 'react';
import styles from './style';
import defaultColor from '../../constants/style/defaultColor';
import {TouchableOpacity, View} from 'react-native';
import CustomText from '../customText';
import {SwipeListView} from 'react-native-swipe-list-view';

const CustomSwipeableList = ({onItemPress, data, onItemDelete, ...props}) => {
  const [listData, setListData] = React.useState(data || []);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
    onItemDelete?.(prevIndex, newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = data => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => onItemPress?.(data)}
      style={styles.rowFront}>
      <View>
        <CustomText>{data.item.text}</CustomText>
      </View>
    </TouchableOpacity>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backLeftBtn]}
        onPress={() => closeRow(rowMap, data.item.key)}>
        <CustomText style={styles.backTextWhite}>Kapat</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.key)}>
        <CustomText style={styles.backTextWhite}>Kapat</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}>
        <CustomText style={styles.backTextWhite}>Sil</CustomText>
      </TouchableOpacity>
    </View>
  );

  return (
    <SwipeListView
      data={listData}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={-150}
      previewRowKey={'0'}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      onRowDidOpen={onRowDidOpen}
      {...props}
    />
  );
};
export default CustomSwipeableList;
