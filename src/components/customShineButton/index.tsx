import * as React from 'react';
import style from './style';
import UserAvatar from 'react-native-user-avatar';
import defaultColor from '../../constants/style/defaultColor';
import {View} from 'react-native';
import CustomText from '../customText';
import RNShineButton from 'react-native-shine-button'

const generateRandomColor = () => {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
};
const CustomShineButton = ({
  size = 50,
  containerStyle,
  src,
  name,
  textColor,
  randomBg,
  bgColor,
  badgeContainer,
  badgeText,
  badgeTextStyle,
  ...props
}) => {
  return (
    <RNShineButton
  shape={'heart'}
  color={'#808080'}
  fillColor={'#ff0000'}
  size={100}
/>
  );
};
export default CustomShineButton;
