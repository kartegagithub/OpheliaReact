import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconCalendar = props => (
  <Svg
    className="icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    {...props}>
    <Path
      d="M213.333 202.667C183.893 202.667 160 226.56 160 256v597.333c0 29.44 23.893 53.334 53.333 53.334h597.334c29.44 0 53.333-23.894 53.333-53.334V256c0-29.44-23.893-53.333-53.333-53.333H213.333zM96 256a117.333 117.333 0 0 1 117.333-117.333h597.334A117.333 117.333 0 0 1 928 256v597.333a117.333 117.333 0 0 1-117.333 117.334H213.333A117.333 117.333 0 0 1 96 853.333V256z"
      fill={props?.color1 || '#697686'}
    />
    <Path
      d="M682.667 53.333a32 32 0 0 1 32 32V256a32 32 0 0 1-64 0V85.333a32 32 0 0 1 32-32zm-341.334 0a32 32 0 0 1 32 32V256a32 32 0 0 1-64 0V85.333a32 32 0 0 1 32-32zM96 426.667a32 32 0 0 1 32-32h768a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32z"
      fill={props?.color2 || '#697686'}
    />
  </Svg>
);

export default IconCalendar;