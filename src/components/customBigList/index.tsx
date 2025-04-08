import * as React from 'react';
import style from './style';
import {View, ListRenderItem} from 'react-native';
import CustomText from '../customText';
import BigList from 'react-native-big-list';

interface ListItem {
  title?: string;
  description?: string;
  [key: string]: any;
}

interface CustomBigListProps {
  data?: ListItem[];
  customRender?: ListRenderItem<ListItem>;
  itemHeight?: number;
  numColumns?: number;
  refreshing?: boolean;
  placeholder?: boolean;
  [key: string]: any;
}

const CustomBigList: React.FC<CustomBigListProps> = ({
  data,
  customRender,
  itemHeight = 50,
  numColumns = 1,
  ...props
}) => {
  const renderItem: ListRenderItem<ListItem> = ({item, index}) => (
    <View style={style.item}>
      <CustomText style={style.itemT}>
        {item?.title || 'Not Found Title'}
      </CustomText>
      <CustomText style={style.itemD}>
        {item?.description || 'Not Found Description'}
      </CustomText>
    </View>
  );

  return (
    <BigList
      data={data || []}
      renderItem={customRender || renderItem}
      placeholder
      refreshing
      numColumns={numColumns}
      itemHeight={itemHeight}
      {...props}
    />
  );
};

export default CustomBigList;
