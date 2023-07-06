import * as React from 'react';
import style from './style';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

const CustomSkeleton = ({data, leftMedia, rightMedia, ...props}) => {
  return (
    <Placeholder
      Animation={Fade}
      Left={leftMedia ? PlaceholderMedia : null}
      Right={rightMedia ? PlaceholderMedia : null}>
      {data?.map(item => (
        <PlaceholderLine {...item} />
      ))}
    </Placeholder>
  );
};
export default CustomSkeleton;
