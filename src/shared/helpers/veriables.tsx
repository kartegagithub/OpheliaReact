import { Appearance } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const themeMode = () => {
  return Appearance.getColorScheme() === 'dark' ? 'd' : 'l';
}
export {
  wp, hp, themeMode,
};