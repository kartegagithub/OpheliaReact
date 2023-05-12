import React from 'react';
import {View} from 'react-native';

function Padding({b = 10, t, r, l}) {
  return (
    <View
      style={{
        paddingTop: t || 0,
        paddingLeft: l || 0,
        paddingBottom: b || 0,
        paddingRight: r || 0,
      }}
    />
  );
}

export default Padding;
