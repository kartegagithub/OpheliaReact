import * as React from 'react';
import style from './style';
import {View} from 'react-native';
import CustomText from '../customText';
import BigList from 'react-native-big-list';

const CustomBigList = ({data, customRender, ...props}) => {
  const renderItem = ({item, index}) => (
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
      numColumns={1}
      itemHeight={50}
      {...props}
    />
  );
};
export default CustomBigList;
