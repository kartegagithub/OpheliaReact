import * as React from 'react';
import {Alert, Linking, StyleSheet, TextStyle} from 'react-native';
import ParsedText, {ParseShape} from 'react-native-parsed-text';

interface CustomParsedTextProps {
  children: string;
  style?: TextStyle;
  [key: string]: any;
}

interface MatchResult {
  [key: number]: string;
}

const CustomParsedText: React.FC<CustomParsedTextProps> = ({
  children,
  ...props
}) => {
  const handleUrlPress = (url: string, matchIndex: number): void => {
    Linking.openURL(url);
  };

  const handlePhonePress = (phone: string, matchIndex: number): void => {
    Alert.alert(`${phone} has been pressed!`);
  };

  const handleNamePress = (name: string, matchIndex: number): void => {
    Alert.alert(`Hello ${name}`);
  };

  const handleEmailPress = (email: string, matchIndex: number): void => {
    Alert.alert(`send email to ${email}`);
  };

  const renderText = (matchingString: string, matches: MatchResult): string => {
    const pattern = /\[(@[^:]+):([^\]]+)\]/i;
    const match = matchingString.match(pattern);
    return match ? `^^${match[1]}^^` : matchingString;
  };

  const parsePatterns: ParseShape[] = [
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
  ];

  return (
    <ParsedText
      style={styles.text}
      parse={parsePatterns}
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

CustomParsedText.displayName = 'CustomParsedText';

export default CustomParsedText;
