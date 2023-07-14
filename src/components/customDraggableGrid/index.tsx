import * as React from 'react';
import {DraggableGrid} from 'react-native-draggable-grid';

const CustomDraggableGrid = ({renderItem, data, ...props}) => {
  const [data1, setData1] = React.useState(data);
  console.log('sdksl', data1);
  return (
    <DraggableGrid
      numColumns={4}
      renderItem={renderItem}
      data={data1}
      onDragRelease={val => {
        setData1(val);
      }}
    />
  );
};
export default CustomDraggableGrid;
