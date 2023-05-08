import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/elements';
import containerStyle from './styles/containerStyle';

function Container({children, style, isView}) {
  if (isView) {
    return (
      <View style={[containerStyle.container, style || {}]}>{children}</View>
    );
  }
  const headerHeight = useHeaderHeight();
  const edges = ['left', 'right'];
  if (headerHeight === 0) {
    edges.push('top');
  }
  return (
    <SafeAreaView edges={edges} style={[containerStyle.container, style || {}]}>
      {children}
    </SafeAreaView>
  );
}
export default Container;
