import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomAvatar from '../components/customAvatar';
import CustomText from '../components/customText';
import CustomShineButton from '../components/customShineButton';

function ShineButtonScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>No Props</CustomText>
            <CustomShineButton />
          </View>
          <Padding />
          <View>
            <CustomText>With Name Kartega Yazılım</CustomText>
            <CustomAvatar name="Kartega Yazılım" />
          </View>
          <Padding />
          <View>
            <CustomText>With Random Bg Color</CustomText>
            <CustomAvatar name="Kartega Yazılım" randomBg />
          </View>
          <Padding />
          <View>
            <CustomText>With Random Bg Color, Size</CustomText>
            <CustomAvatar name="Kartega Yazılım" randomBg size={80} />
          </View>
          <Padding />
          <View>
            <CustomText>With Badge</CustomText>
            <CustomAvatar name="Kartega Yazılım" badgeText={5} size={75} />
          </View>
          <Padding />
          <View>
            <CustomText>With Image and Badge</CustomText>
            <CustomAvatar
              src="https://picsum.photos/id/237/200/200"
              name="Kartega Yazılım"
              badgeText={5}
              size={75}
            />
          </View>
          <Padding />
          <View>
            <CustomText>With Image and Badge Color</CustomText>
            <CustomAvatar
              src="https://picsum.photos/id/110/200/200"
              badgeText={5}
              size={75}
              badgeContainer={{backgroundColor: 'red'}}
            />
          </View>
        </View>
      </Content>
    </Container>
  );
}
export default ShineButtonScreen;
