import * as React from 'react';
import {CupertinoSectionList} from 'react-native-cupertino-list';

function CustomCupertinoList({items, ...props}) {
  return <CupertinoSectionList sections={items || []} {...props} />;
}
export default CustomCupertinoList;
