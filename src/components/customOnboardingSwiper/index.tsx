import * as React from 'react';
import style from './style';
import Onboarding from 'react-native-onboarding-swiper';

const CustomOnboardingSwiper = ({onSkip, onDone, pages = [], ...props}) => {
  return (
    <Onboarding
      nextLabel="Sonraki"
      backLabel="Önceki"
      skipLabel="Atla"
      onSkip={onSkip}
      onDone={onDone}
      pages={pages || []}
      {...props}
    />
  );
};
export default CustomOnboardingSwiper;
