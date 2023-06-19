import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

function CustomRenderHTML({contentWidth, source, ...props}: InputProps) {
  const {width} = useWindowDimensions();
  if (!source) {
    return null;
  }
  return (
    <View>
      <RenderHtml
        contentWidth={contentWidth || width}
        source={{
          html: source,
        }}
        {...props}
      />
    </View>
  );
}
export default CustomRenderHTML;
