import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {FlatList, View} from 'react-native';
import CustomButton from '../components/customButton';
import CustomSwitch from '../components/customSwitch';
import CustomText from '../components/customText';
import menuData from '../constants/menu';
import Container from '../shared/fragment/container';
import homeScreenStyle from './styles/homeScreenStyle';
import Clipboard from '@react-native-clipboard/clipboard';

function HomeScreen({navigation}) {
  const [menu, setMenu] = useState(menuData);
  const [setupData, setSetupDate] = useState({
    code: null,
    intallDescription: null,
  });
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
      <View>
        <FlatList
          data={menu}
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
      </View>
    </Container>
  );
}
export default HomeScreen;
