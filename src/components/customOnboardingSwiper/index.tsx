import * as React from 'react';
import style from './style';
import Onboarding, {Page} from 'react-native-onboarding-swiper';

interface CustomOnboardingSwiperProps {
  onSkip?: () => void;
  onDone?: () => void;
  pages?: Page[];
  showSkip?: boolean;
  bottomBarHighlight?: boolean;
  showNext?: boolean;
  showDone?: boolean;
  skipToPage?: number;
}

const CustomOnboardingSwiper: React.FC<CustomOnboardingSwiperProps> = ({
  onSkip,
  onDone,
  pages = [],
  ...props
}) => {
  return (
    <Onboarding
      nextLabel="Sonraki"
      skipLabel="Atla"
      onSkip={onSkip}
      onDone={onDone}
      pages={pages}
      {...props}
    />
  );
};

CustomOnboardingSwiper.displayName = 'CustomOnboardingSwiper';

export default CustomOnboardingSwiper;
