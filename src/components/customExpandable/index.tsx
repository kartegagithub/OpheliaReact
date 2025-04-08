import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {View, ViewStyle} from 'react-native';
import CustomText from '../customText';
import CustomIcon from '../customIcon';

interface Section {
  id: number | string;
  title: string;
  content: string;
}

interface CustomExpandableProps {
  contentStyle?: ViewStyle;
  sections: Section[];
  headerStyle?: ViewStyle;
  sectionTitleStyle?: ViewStyle;
}

const CustomExpandable: React.FC<CustomExpandableProps> = ({
  contentStyle,
  sections,
  headerStyle,
  sectionTitleStyle,
}) => {
  const [active, setActive] = useState<number[]>([]);

  const _renderHeader = (section: Section): React.ReactElement => {
    return (
      <View style={headerStyle}>
        <CustomText>{section.title}</CustomText>
        {active[0] === section.id ? (
          <CustomIcon name="chevron-up" type="fontAwesome" size={15} />
        ) : (
          <CustomIcon name="chevron-down" type="fontAwesome" size={15} />
        )}
      </View>
    );
  };

  const _renderSectionTitle = (section: Section): React.ReactElement => {
    return <View style={sectionTitleStyle} />;
  };

  const _renderContent = (section: Section): React.ReactElement => {
    return (
      <View style={contentStyle}>
        <CustomText>{section.content}</CustomText>
      </View>
    );
  };

  const _updateSections = (activeSections: number[]): void => {
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

CustomExpandable.displayName = 'CustomExpandable';

export default CustomExpandable;
