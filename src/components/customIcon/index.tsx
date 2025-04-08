import * as React from 'react';
import style from './style';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {IconProps} from 'react-native-vector-icons/Icon';

type IconType =
  | 'fontAwesome5'
  | 'fontAwesome5Pro'
  | 'fontisto'
  | 'foundation'
  | 'ionicons'
  | 'materialCommunityIcons'
  | 'materialIcons'
  | 'octicons'
  | 'simpleLineIcons'
  | 'zocial'
  | 'fontAwesome';

interface CustomIconProps extends Omit<IconProps, 'children'> {
  type?: IconType;
  isButton?: boolean;
  text?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  type = 'fontAwesome',
  isButton = false,
  text = '',
  ...props
}) => {
  const Icon = React.useCallback((): React.ReactElement => {
    switch (type) {
      case 'fontAwesome5':
        return isButton ? (
          <FontAwesome5.Button {...props}>{text}</FontAwesome5.Button>
        ) : (
          <FontAwesome5 {...props} />
        );
      case 'fontAwesome5Pro':
        return isButton ? (
          <FontAwesome5Pro.Button {...props}>{text}</FontAwesome5Pro.Button>
        ) : (
          <FontAwesome5Pro {...props} />
        );
      case 'fontisto':
        return isButton ? (
          <Fontisto.Button {...props}>{text}</Fontisto.Button>
        ) : (
          <Fontisto {...props} />
        );
      case 'foundation':
        return isButton ? (
          <Foundation.Button {...props}>{text}</Foundation.Button>
        ) : (
          <Foundation {...props} />
        );
      case 'ionicons':
        return isButton ? (
          <Ionicons.Button {...props}>{text}</Ionicons.Button>
        ) : (
          <Ionicons {...props} />
        );
      case 'materialCommunityIcons':
        return isButton ? (
          <MaterialCommunityIcons.Button {...props}>
            {text}
          </MaterialCommunityIcons.Button>
        ) : (
          <MaterialCommunityIcons {...props} />
        );
      case 'materialIcons':
        return isButton ? (
          <MaterialIcons.Button {...props}>{text}</MaterialIcons.Button>
        ) : (
          <MaterialIcons {...props} />
        );
      case 'octicons':
        return isButton ? (
          <Octicons.Button {...props}>{text}</Octicons.Button>
        ) : (
          <Octicons {...props} />
        );
      case 'simpleLineIcons':
        return isButton ? (
          <SimpleLineIcons.Button {...props}>{text}</SimpleLineIcons.Button>
        ) : (
          <SimpleLineIcons {...props} />
        );
      case 'zocial':
        return isButton ? (
          <Zocial.Button {...props}>{text}</Zocial.Button>
        ) : (
          <Zocial {...props} />
        );
      default:
        return isButton ? (
          <FontAwesome.Button {...props}>{text}</FontAwesome.Button>
        ) : (
          <FontAwesome {...props} />
        );
    }
  }, [type, isButton, text, props]);

  return <Icon />;
};

CustomIcon.displayName = 'CustomIcon';

export default CustomIcon;
