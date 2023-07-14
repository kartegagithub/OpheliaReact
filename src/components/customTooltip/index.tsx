import * as React from 'react';
import style from './style';
import defaultColor from '../../constants/style/defaultColor';
import Tooltip from 'rn-tooltip';

const CustomTooltip = ({
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
      onOpen={() => onOpen?.()}
      onOpen={() => onClose?.()}
      {...props}
    >
      {children}
    </Tooltip>
  );
};
export default CustomTooltip;
