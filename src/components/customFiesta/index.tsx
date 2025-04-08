import * as React from 'react';
import style from './style';
import {
  Balloons,
  Hearts,
  Fireworks,
  Stars,
  EmojiPopper,
  FiestaProps,
} from 'react-native-fiesta';

type FiestaType = 'ballons' | 'emojis' | 'fireworks' | 'hearts' | 'stars';

interface CustomFiestaProps extends Omit<FiestaProps, 'emojis'> {
  type: FiestaType;
  emojis?: string[];
}

const CustomFiesta: React.FC<CustomFiestaProps> = ({type, ...props}) => {
  const generateType = (t: FiestaType): React.ReactElement => {
    switch (t) {
      case 'ballons':
        return <Balloons autoHide={false} {...props} />;
      case 'emojis':
        return (
          <EmojiPopper
            emojis={props.emojis || ['🤠', '🎈', '🎉', '🍻']}
            autoHide={false}
            {...props}
          />
        );
      case 'fireworks':
        return <Fireworks autoHide={false} {...props} />;
      case 'hearts':
        return <Hearts autoHide={false} {...props} />;
      default:
        return <Stars autoHide={false} {...props} />;
    }
  };

  return generateType(type);
};

CustomFiesta.displayName = 'CustomFiesta';

export default CustomFiesta;
