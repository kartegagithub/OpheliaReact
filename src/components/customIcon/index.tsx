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
const CustomIcon = ({type, isButton, text, ...props}) => {
  const Icon = () => {
    switch (type) {
      case 'fontAwesome5':
        return isButton ? (
          <FontAwesome5.Button {...props}>{text || ''}</FontAwesome5.Button>
        ) : (
          <FontAwesome5 {...props} />
        );
        break;
      case 'fontAwesome5Pro':
        return isButton ? (
          <FontAwesome5Pro.Button {...props}>
            {text || ''}
          </FontAwesome5Pro.Button>
        ) : (
          <FontAwesome5Pro {...props} />
        );
        break;
      case 'fontisto':
        return isButton ? (
          <Fontisto.Button {...props}>{text || ''}</Fontisto.Button>
        ) : (
          <Fontisto {...props} />
        );
        break;
      case 'foundation':
        return isButton ? (
          <Foundation.Button {...props}>{text || ''}</Foundation.Button>
        ) : (
          <Foundation {...props} />
        );
        break;
      case 'ionicons':
        return isButton ? (
          <Ionicons.Button {...props}>{text || ''}</Ionicons.Button>
        ) : (
          <Ionicons {...props} />
        );
        break;
      case 'materialCommunityIcons':
        return isButton ? (
          <MaterialCommunityIcons.Button {...props}>
            {text || ''}
          </MaterialCommunityIcons.Button>
        ) : (
          <MaterialCommunityIcons {...props} />
        );
        break;
      case 'materialIcons':
        return isButton ? (
          <MaterialIcons.Button {...props}>{text || ''}</MaterialIcons.Button>
        ) : (
          <MaterialIcons {...props} />
        );
        break;
      case 'octicons':
        return isButton ? (
          <Octicons.Button {...props}>{text || ''}</Octicons.Button>
        ) : (
          <Octicons {...props} />
        );
        break;
      case 'simpleLineIcons':
        return isButton ? (
          <SimpleLineIcons.Button {...props}>
            {text || ''}
          </SimpleLineIcons.Button>
        ) : (
          <SimpleLineIcons {...props} />
        );
        break;
      case 'zocial':
        return isButton ? (
          <Zocial.Button {...props}>{text || ''}</Zocial.Button>
        ) : (
          <Zocial {...props} />
        );
        break;
      default:
        return isButton ? (
          <FontAwesome.Button {...props}>{text || ''}</FontAwesome.Button>
        ) : (
          <FontAwesome {...props} />
        );
    }
  };
  return <Icon />;
};
export default CustomIcon;
