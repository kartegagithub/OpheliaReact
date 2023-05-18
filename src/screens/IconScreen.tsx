import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {Alert, View} from 'react-native';
import CustomText from '../components/customText';
import CustomIcon from '../components/customIcon';
import iconScreenStyle from './styles/iconScreenStyle';
import defaultColor from '../constants/style/defaultColor';

function IconScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <CustomText>Font Awasome</CustomText>
          <View style={iconScreenStyle.iconArea}>
            <CustomIcon name="user" type="fontAwesome" size={26} />
            <CustomIcon name="address-card" type="fontAwesome" size={26} />
            <CustomIcon name="imdb" type="fontAwesome" size={26} />
            <CustomIcon name="podcast" type="fontAwesome" size={26} />
            <CustomIcon name="bars" type="fontAwesome" size={26} />
            <CustomIcon name="bell" type="fontAwesome" size={26} />
          </View>
          <View style={iconScreenStyle.iconArea}>
            <CustomIcon name="ban" type="fontAwesome" size={26} />
            <CustomIcon name="bug" type="fontAwesome" size={26} />
            <CustomIcon name="certificate" type="fontAwesome" size={26} />
            <CustomIcon name="check" type="fontAwesome" size={26} />
            <CustomIcon name="code" type="fontAwesome" size={26} />
            <CustomIcon name="cogs" type="fontAwesome" size={26} />
          </View>
        </View>
        <View>
          <Padding />
          <CustomText>IonIcons</CustomText>
          <View style={iconScreenStyle.iconArea}>
            <CustomIcon name="add-circle-outline" type="ionicons" size={26} />
            <CustomIcon name="airplane-outline" type="ionicons" size={26} />
            <CustomIcon name="boat-outline" type="ionicons" size={26} />
            <CustomIcon
              name="chatbox-ellipses-outline"
              type="ionicons"
              size={26}
            />
            <CustomIcon name="heart-outline" type="ionicons" size={26} />
            <CustomIcon name="location-outline" type="ionicons" size={26} />
          </View>
          <View style={iconScreenStyle.iconArea}>
            <CustomIcon name="add-circle" type="ionicons" size={26} />
            <CustomIcon name="airplane" type="ionicons" size={26} />
            <CustomIcon name="boat" type="ionicons" size={26} />
            <CustomIcon name="chatbox-ellipses" type="ionicons" size={26} />
            <CustomIcon name="heart" type="ionicons" size={26} />
            <CustomIcon name="location" type="ionicons" size={26} />
          </View>
        </View>
        <View>
          <Padding />
          <CustomText>Font Awesome 5</CustomText>
          <View style={iconScreenStyle.iconArea}>
            <CustomIcon name="ad" type="fontAwesome5" size={26} />
            <CustomIcon name="clone" type="fontAwesome5" size={26} />
            <CustomIcon name="comments" type="fontAwesome5" size={26} />
            <CustomIcon name="mobile" type="fontAwesome5" size={26} />
            <CustomIcon name="pills" type="fontAwesome5" size={26} />
            <CustomIcon name="lock" type="fontAwesome5" size={26} />
          </View>
          <View style={iconScreenStyle.iconArea}>
            <CustomIcon
              name="futbol"
              type="fontAwesome5"
              color={defaultColor.darkColor}
              size={26}
            />
            <CustomIcon
              name="lemon"
              type="fontAwesome5"
              size={26}
              color={defaultColor.darkDegree}
            />
            <CustomIcon
              name="image"
              type="fontAwesome5"
              size={26}
              color={defaultColor.middleColor}
            />
            <CustomIcon
              name="smile"
              type="fontAwesome5"
              size={26}
              color={defaultColor.lightColor}
            />
            <CustomIcon
              name="star"
              type="fontAwesome5"
              size={26}
              color={defaultColor.grayColor}
            />
            <CustomIcon
              name="hospital"
              type="fontAwesome5"
              size={26}
              color="red"
            />
          </View>
        </View>
        <View>
          <Padding />
          <CustomText>IonIcons</CustomText>
          <View style={iconScreenStyle.iconArea}>
            <CustomIcon name="heart" type="octicons" size={26} />
            <CustomIcon name="codescan-checkmark" type="octicons" size={26} />
            <CustomIcon name="file-directory" type="octicons" size={26} />
            <CustomIcon name="mark-github" type="octicons" size={26} />
            <CustomIcon name="pin" type="octicons" size={26} />
            <CustomIcon name="sign-out" type="octicons" size={26} />
          </View>
          <View style={iconScreenStyle.iconArea}>
            <CustomIcon name="heart-fill" type="octicons" size={26} />
            <CustomIcon name="skip" type="octicons" size={26} />
            <CustomIcon name="file" type="octicons" size={26} />
            <CustomIcon name="feed-star" type="octicons" size={26} />
            <CustomIcon name="x-circle-fill" type="octicons" size={26} />
            <CustomIcon name="location" type="octicons" size={26} />
          </View>
        </View>
        <View>
          <Padding />
          <CustomText>Button</CustomText>
          <View style={iconScreenStyle.iconArea}>
            <CustomIcon
              name="plus"
              type="fontAwesome"
              size={16}
              isButton={true}
              text="Yeni Ürün Ekle"
            />
            <CustomIcon
              name="facebook"
              type="fontAwesome"
              size={16}
              isButton={true}
              text="Facebook ile bağlan"
              backgroundColor="#3b5998"
            />
          </View>
          <Padding />
          <View style={iconScreenStyle.iconArea}>
            <CustomIcon
              name="call-outline"
              type="ionicons"
              size={16}
              isButton={true}
              text="Sesli Arama"
              backgroundColor="#9c88ff"
              onPress={() => Alert.alert('Call voice')}
            />
            <CustomIcon
              name="videocam-outline"
              type="ionicons"
              size={16}
              isButton={true}
              text="Video Arama"
              backgroundColor="#44bd32"
              onPress={() => Alert.alert('Call video')}
            />
          </View>
        </View>
        <Padding />
      </Content>
    </Container>
  );
}
export default IconScreen;
