import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import RenderHtml, {RenderHTMLProps} from 'react-native-render-html';

interface CustomRenderHTMLProps
  extends Omit<RenderHTMLProps, 'source' | 'contentWidth'> {
  source: string;
  contentWidth?: number;
}

const CustomRenderHTML: React.FC<CustomRenderHTMLProps> = ({
  contentWidth,
  source,
  ...props
}) => {
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
};

CustomRenderHTML.displayName = 'CustomRenderHTML';

export default CustomRenderHTML;
