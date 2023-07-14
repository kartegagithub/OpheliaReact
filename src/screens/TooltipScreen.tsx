import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomText from '../components/customText';
import CustomTooltip from '../components/customTooltip';
import CustomImage from '../components/customImage';

function TooltipScreen() {
  const renderPopover = (
    <CustomImage
      source={{uri: 'https://picsum.photos/300'}}
      style={{
        width: 100,
        height: 100,
      }}
    />
  );
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomTooltip renderPopover={renderPopover} width={120} height={120}>
              <CustomText>Tooltip Göster</CustomText>
            </CustomTooltip>
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default TooltipScreen;
