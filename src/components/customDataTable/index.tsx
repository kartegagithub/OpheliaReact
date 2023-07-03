import * as React from 'react';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';

const CustomDataTable = ({
  data,
  colNames,
  backgroundColor,
  headerLabelStyle,
  noOfPages,
  ...props
}) => {
  return (
    <DataTable
      data={data}
      colNames={colNames}
      colSettings={[
        {name: 'name', type: COL_TYPES.STRING, width: '35%'},
        {name: 'age', type: COL_TYPES.INT, width: '30%'},
        {name: 'gender', type: COL_TYPES.STRING, width: '30%'},
      ]} //List of Objects
      noOfPages={noOfPages}
      backgroundColor={backgroundColor} //Table Background Color
      headerLabelStyle={headerLabelStyle} //Text Style Works
    />
  );
};
export default CustomDataTable;
