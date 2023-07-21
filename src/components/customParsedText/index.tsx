import {Alert} from 'react-native';
import {Linking} from 'react-native';
import {StyleSheet} from 'react-native';
import ParsedText from 'react-native-parsed-text';

const CustomParsedText = ({children, ...props}) => {
  const handleUrlPress = (url, matchIndex /*: number*/) => {
    Linking.openURL(url);
  };

  handlePhonePress = (phone, matchIndex /*: number*/) => {
    Alert.alert(`${phone} has been pressed!`);
  };

  handleNamePress = (name, matchIndex /*: number*/) => {
    Alert.alert(`Hello ${name}`);
  };

  handleEmailPress = (email, matchIndex /*: number*/) => {
    Alert.alert(`send email to ${email}`);
  };

  renderText = (matchingString, matches) => {
    let pattern = /\[(@[^:]+):([^\]]+)\]/i;
    let match = matchingString.match(pattern);
    return `^^${match[1]}^^`;
  };
  return (
    <ParsedText
      style={styles.text}
      parse={[
        {type: 'url', style: styles.url, onPress: handleUrlPress},
        {type: 'phone', style: styles.phone, onPress: handlePhonePress},
        {type: 'email', style: styles.email, onPress: handleEmailPress},
        {
          pattern: /\[(@[^:]+):([^\]]+)\]/i,
          style: styles.username,
          onPress: handleNamePress,
          renderText: renderText,
        },
        {pattern: /42/, style: styles.magicNumber},
        {pattern: /#(\w+)/, style: styles.hashTag},
      ]}
      childrenProps={{allowFontScaling: false}}
      {...props}>
      {children}
    </ParsedText>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  url: {
    color: 'red',
    textDecorationLine: 'underline',
  },

  email: {
    textDecorationLine: 'underline',
  },

  text: {
    color: 'black',
    fontSize: 15,
  },

  phone: {
    color: 'blue',
    textDecorationLine: 'underline',
  },

  name: {
    color: 'red',
  },

  username: {
    color: 'green',
    fontWeight: 'bold',
  },

  magicNumber: {
    fontSize: 42,
    color: 'pink',
  },

  hashTag: {
    fontStyle: 'italic',
  },
});
export default CustomParsedText;
