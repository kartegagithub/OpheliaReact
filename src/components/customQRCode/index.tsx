import * as React from 'react';
import style from './style';
import QRCode from 'react-native-qrcode-svg';

const CustomQRCode = ({
  backgroundColor,
  color,
  value,
  gradientDirection,
  linearGradient,
  enableLinearGradient,
  logo,
  logoSize,
  logoBackgroundColor,
  logoMargin,
  logoBorderRadius,
  quietZone,
  ...props
}) => {
  return (
    <QRCode
      value={value}
      backgroundColor={backgroundColor}
      color={color}
      gradientDirection={gradientDirection}
      linearGradient={linearGradient}
      enableLinearGradient={enableLinearGradient}
      logo={logo}
      logoSize={logoSize}
      logoBackgroundColor={logoBackgroundColor}
      logoMargin={logoMargin}
      logoBorderRadius={logoBorderRadius}
      quietZone={quietZone}
    />
  );
};
export default CustomQRCode;
