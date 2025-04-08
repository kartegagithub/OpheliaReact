import * as React from 'react';
import {
  CupertinoSectionList,
  CupertinoSectionListProps,
} from 'react-native-cupertino-list';
import {SectionListData} from 'react-native';

interface SectionItem {
  title: string;
  data: any[];
}

interface CustomCupertinoListProps
  extends Omit<CupertinoSectionListProps, 'sections'> {
  items?: SectionListData<any, SectionItem>[];
}

const CustomCupertinoList: React.FC<CustomCupertinoListProps> = ({
  items = [],
  ...props
}) => {
  return <CupertinoSectionList sections={items} {...props} />;
};

CustomCupertinoList.displayName = 'CustomCupertinoList';

export default CustomCupertinoList;
