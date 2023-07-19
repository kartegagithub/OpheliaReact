import {StatusBar, StyleSheet} from 'react-native';
import defaultColor from '../../constants/style/defaultColor';

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'gray',
      },
      mainWrapperView: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
      },
      activityIndicatorWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      contentContainer: {
        paddingHorizontal: 0,
        alignSelf: 'stretch',
      },
      img: {
        width: '100%',
        height: '100%',
      },
      avatarImage: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 18,
      },
});

export default style;