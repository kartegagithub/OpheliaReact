import * as React from 'react';
import { Text } from 'react-native';
import styles from './style';

function CustomText(props) {
  const {
    children
  } = props || {};
    return (
      <Text style={styles.customTextStyle}>
        {children}
      </Text>
    );
}
export default CustomText;
