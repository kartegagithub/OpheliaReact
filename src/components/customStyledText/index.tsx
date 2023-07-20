import * as React from 'react';
import StyledText from 'react-native-styled-text';

const CustomStyledText = ({styles, textStyles, children, ...props}) => {
  return (
    <StyledText style={{...styles}} textStyles={{...textStyles}}>
      {children}
    </StyledText>
  );
};
export default CustomStyledText;
