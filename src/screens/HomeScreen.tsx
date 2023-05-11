import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {FlatList, View} from 'react-native';
import CustomButton from '../components/customButton';
import CustomSwitch from '../components/customSwitch';
import CustomText from '../components/customText';
import menuData from '../constants/menu';
import Container from '../shared/fragment/container';
import homeScreenStyle from './styles/homeScreenStyle';

function HomeScreen({navigation}) {
  const [menu, setMenu] = useState(menuData);
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
  const goScreen = screenName => {
    navigation.navigate(screenName);
  };
  const goScreenDetail = data => {
    navigation.navigate('DetailScreen', data);
  };
  const renderMenu = ({item}) => {
    const onChange = () => {
      setMenu(
        menu?.map(val => {
          return {
            ...val,
            isOn: item?.id == val.id ? !val?.isOn : val.isOn,
          };
        }),
      );
    };
    return (
      <View style={homeScreenStyle.item}>
        <CustomSwitch isOn={item?.isOn} onChange={onChange} />
        <CustomText style={homeScreenStyle.itemTitle}>{item.title}</CustomText>
        <View style={homeScreenStyle.itemButtons}>
          <CustomButton
            onPress={() => goScreen(item?.screenName)}
            label={'Önizle'}
          />
          <CustomButton onPress={() => goScreenDetail(item)} label={'Detay'} />
        </View>
      </View>
    );
  };
  return (
    <Container>
      <View>
        <FlatList
          data={menu}
          keyExtractor={item => item.id}
          renderItem={renderMenu}
        />
      </View>
    </Container>
  );
}
export default HomeScreen;
