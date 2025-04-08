import * as React from 'react';
import QRCode, {QRCodeProps} from 'react-native-qrcode-svg';

interface CustomQRCodeProps extends Omit<QRCodeProps, 'value'> {
  value: string;
  backgroundColor?: string;
  color?: string;
  gradientDirection?: string[];
  linearGradient?: string[];
  enableLinearGradient?: boolean;
  logo?: any;
  logoSize?: number;
  logoBackgroundColor?: string;
  logoMargin?: number;
  logoBorderRadius?: number;
  quietZone?: number;
}

const CustomQRCode: React.FC<CustomQRCodeProps> = ({
  backgroundColor = '#FFFFFF',
  color = '#000000',
  value,
  gradientDirection,
  linearGradient,
  enableLinearGradient = false,
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
      {...props}
    />
  );
};

CustomQRCode.displayName = 'CustomQRCode';

export default CustomQRCode;
