import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar, Text} from 'react-native';
import {FlatList, View} from 'react-native';
import CustomButton from '../components/customButton';
import CustomSwitch from '../components/customSwitch';
import CustomText from '../components/customText';
import menuData from '../constants/menu';
import Container from '../shared/fragment/container';
import homeScreenStyle from './styles/homeScreenStyle';
import Clipboard from '@react-native-clipboard/clipboard';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import CustomInput from '../components/customInput';
import defaultColor from '../constants/style/defaultColor';
import IconUser from '../components/customInput/iconUser';

function HomeScreen({navigation}) {
  const [menu, setMenu] = useState(menuData);
  const [setupData, setSetupDate] = useState({
    code: null,
    intallDescription: null,
  });
  const [searchText, onChangeSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
  useEffect(() => {
    const filtered = menu?.map(item => {
      return {
        ...item,
        isHide: !item.title.toLowerCase().includes(searchText.toLowerCase()),
      };
    });
    setMenu(filtered);
  }, [searchText]);
  const goScreen = screenName => {
    navigation.navigate(screenName);
  };
  const goScreenDetail = data => {
    navigation.navigate('DetailScreen', data);
  };

  const onChange = item => {
    const filtered = menu?.map(val => {
      return {
        ...val,
        isOn: item?.id === val.id ? !val?.isOn : val.isOn,
      };
    });
    setMenu(filtered);
    //setMenu( );
  };

  const renderMenu = ({item}) => {
    return (
      <View style={homeScreenStyle.item}>
        <CustomSwitch isOn={item?.isOn} onChange={() => onChange(item)} />
        <CustomText style={homeScreenStyle.itemTitle}>{item.title}</CustomText>
        <View style={homeScreenStyle.itemButtons}>
          <CustomButton
            containerStyle={homeScreenStyle.previewBtn}
            onPress={() => goScreen(item?.screenName)}
            label={'Önizle'}
          />
          <CustomButton onPress={() => goScreenDetail(item)} label={'Detay'} />
        </View>
      </View>
    );
  };
  const generateInstall = () => {
    const getSelectedComponents = menu?.filter(item => item.isOn);
    console.log({getSelectedComponents});
    if (getSelectedComponents?.length < 1) {
      setSetupDate({
        code: null,
        intallDescription: null,
      });
      return;
    }
    let installText = '';
    let code = 'npm i --save';
    for (let i = 0; i < getSelectedComponents.length; i++) {
      if (getSelectedComponents[i].installDescription) {
        installText +=
          '\n' +
          getSelectedComponents[i].package +
          '\n' +
          getSelectedComponents[i].installDescription +
          '\n----------------------------\n';
      }
      code += ' ' + getSelectedComponents[i].package;
    }
    setSetupDate({
      code: code,
      intallDescription: installText,
    });
  };
  const copyCode = () => {
    Clipboard.setString(`${setupData.code} --legacy-peer-deps`);
  };
  return (
    <Container>
      <Content>
        <View>
          <CustomInput
            onChangeText={newText => onChangeSearch(newText)}
            style={{
              fontSize: 12,
              borderRadius: 4,
              height: 48,
              color: defaultColor.textColor,
              backgroundColor: defaultColor.grayColor,
            }}
            rightIcon={<IconUser />} //iconSearch
          />
        </View>
        <FlatList
          data={menu?.filter(k => !k.isHide)}
          keyExtractor={item => item.id}
          renderItem={renderMenu}
        />
        <View style={homeScreenStyle.installArea}>
          <CustomButton
            onPress={generateInstall}
            label="Kurulum oluştur"
            containerStyle={homeScreenStyle.createInstall}
          />
          {setupData && (setupData?.intallDescription || setupData?.code) && (
            <>
              {setupData.intallDescription && (
                <CustomText style={homeScreenStyle.installText}>
                  {setupData.intallDescription}
                </CustomText>
              )}
              <View>
                <CustomText
                  style={
                    homeScreenStyle.setupText
                  }>{`${setupData.code} --legacy-peer-deps`}</CustomText>
                <CustomButton
                  onPress={copyCode}
                  label="Komutu Kopyala"
                  containerStyle={homeScreenStyle.copyBtn}
                />
              </View>
            </>
          )}
        </View>
        <Padding b={30} />
      </Content>
    </Container>
  );
}
export default HomeScreen;
