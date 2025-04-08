import * as React from 'react';
import styles from './style';
import {TouchableOpacity, View} from 'react-native';
import CustomText from '../customText';
import {SwipeListView, RowMap} from 'react-native-swipe-list-view';

interface ListItem {
  key: string;
  text: string;
  [key: string]: any;
}

interface CustomSwipeableListProps {
  data?: ListItem[];
  onItemPress?: (data: {item: ListItem; index: number}) => void;
  onItemDelete?: (index: number, newData: ListItem[]) => void;
  [key: string]: any;
}

const CustomSwipeableList: React.FC<CustomSwipeableListProps> = ({
  onItemPress,
  data,
  onItemDelete,
  ...props
}) => {
  const [listData, setListData] = React.useState<ListItem[]>(data || []);

  const closeRow = (rowMap: RowMap<ListItem>, rowKey: string): void => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap: RowMap<ListItem>, rowKey: string): void => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
    onItemDelete?.(prevIndex, newData);
  };

  const onRowDidOpen = (rowKey: string): void => {
    console.log('This row opened', rowKey);
  };

  const renderItem = (data: {
    item: ListItem;
    index: number;
  }): React.JSX.Element => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => onItemPress?.(data)}
      style={styles.rowFront}>
      <View>
        <CustomText>{data.item.text}</CustomText>
      </View>
    </TouchableOpacity>
  );

  const renderHiddenItem = (
    data: {item: ListItem; index: number},
    rowMap: RowMap<ListItem>,
  ): React.JSX.Element => (
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
    <SwipeListView<ListItem>
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

CustomSwipeableList.displayName = 'CustomSwipeableList';

export default CustomSwipeableList;
