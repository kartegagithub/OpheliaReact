import * as React from 'react';
import style from './style';
import defaultColor from '../../constants/style/defaultColor';
import Tooltip from 'rn-tooltip';
import {ViewStyle} from 'react-native';

interface CustomTooltipProps {
  children: React.ReactNode;
  renderPopover?: React.ReactNode;
  backgroundColor?: string;
  containerStyle?: ViewStyle;
  highlightColor?: string;
  onOpen?: () => void;
  onClose?: () => void;
  withOverlay?: boolean;
  overlayColor?: string;
  [key: string]: any;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  children,
  renderPopover = null,
  backgroundColor = defaultColor.lightColor,
  containerStyle,
  highlightColor,
  onOpen,
  onClose,
  withOverlay = true,
  overlayColor = 'rgba(255,255,255,0.5)',
  ...props
}) => {
  return (
    <Tooltip
      popover={renderPopover}
      backgroundColor={backgroundColor}
      containerStyle={containerStyle}
      highlightColor={highlightColor}
      withOverlay={withOverlay}
      overlayColor={overlayColor}
      onOpen={onOpen}
      onClose={onClose}
      {...props}>
      {children}
    </Tooltip>
  );
};

CustomTooltip.displayName = 'CustomTooltip';

export default CustomTooltip;
