import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomDraggableGrid from '../components/customDraggableGrid';
import CustomText from '../components/customText';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import defaultColor from '../constants/style/defaultColor';

function DraggableGridScreen({}) {
  const data = [
    {name: '1', key: 'one'},
    {name: '2', key: 'two'},
    {name: '3', key: 'three'},
    {name: '4', key: 'four'},
    {name: '5', key: 'five'},
    {name: '6', key: 'six'},
    {name: '7', key: 'seven'},
    {name: '8', key: 'eight'},
    {name: '9', key: 'night'},
    {name: '0', key: 'zero'},
  ];
  const renderItem = data => (
    <View style={styles.item} key={data?.key}>
      <CustomText style={styles.item_text}>{data?.name}</CustomText>
    </View>
  );
  return (
    <Container>
      <Content contentStyle={{flex: 1}}>
        <View>
          <Padding />
          <View style={styles.wrapper}>
            <CustomDraggableGrid data={data} renderItem={renderItem} />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default DraggableGridScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  item: {
    width: 70,
    height: 70,
    borderRadius: 18,
    backgroundColor: defaultColor.middleColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_text: {
    fontSize: 40,
    color: '#FFFFFF',
  },
});
