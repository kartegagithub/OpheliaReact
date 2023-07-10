import * as React from 'react';
import style from './style';
import {
  Balloons,
  Hearts,
  Fireworks,
  Stars,
  EmojiPopper,
} from 'react-native-fiesta';

const CustomFiesta = ({type, ...props}) => {
  const generateType = t => {
    if (t === 'ballons') {
      return <Balloons autoHide={false} {...props} />;
    } else if (t === 'emojis') {
      return (
        <EmojiPopper
          emojis={['🤠', '🎈', '🎉', '🍻']}
          autoHide={false}
          {...props}
        />
      );
    } else if (t === 'fireworks') {
      return <Fireworks autoHide={false} {...props} />;
    } else if (t === 'hearts') {
      return <Hearts autoHide={false} {...props} />;
    } else {
      return <Stars autoHide={false} {...props} />;
    }
  };
  return generateType(type);
};
export default CustomFiesta;
