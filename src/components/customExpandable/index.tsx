import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {View} from 'react-native';
import CustomText from '../customText';
import CustomIcon from '../customIcon';
const CustomExpandable = ({
  contentStyle,
  sections,
  headerStyle,
  sectionTitleStyle,
}) => {
  const [active, setActive] = useState([]);

  const _renderHeader = section => {
    return (
      <View style={headerStyle}>
        <CustomText>{section?.title}</CustomText>
        {active?.[0] === section?.id ? (
          <CustomIcon name="chevron-up" type="fontAwesome" size={15} />
        ) : (
          <CustomIcon name="chevron-down" type="fontAwesome" size={15} />
        )}
      </View>
    );
  };
  const _renderSectionTitle = section => {
    return <View style={sectionTitleStyle}></View>;
  };
  const _renderContent = section => {
    return (
      <View style={contentStyle}>
        <CustomText>{section?.content}</CustomText>
      </View>
    );
  };

  const _updateSections = activeSections => {
    setActive(activeSections);
  };

  return (
    <Accordion
      renderSectionTitle={_renderSectionTitle}
      sections={sections}
      activeSections={active}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      onChange={_updateSections}
    />
  );
};

export default CustomExpandable;
