import * as React from 'react';
import style from './style';
import UserAvatar from 'react-native-user-avatar';
import defaultColor from '../../constants/style/defaultColor';
import {View} from 'react-native';
import CustomText from '../customText';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {hp, wp} from '../../shared/helpers/veriables';
//types line,bar,pie,progress,contribution,stacked
const CustomChart = ({
  type = 'line',
  width,
  height,
  config,
  data,
  ...props
}) => {
  const generalConfig = {
    backgroundColor: defaultColor.lightColor,
    backgroundGradientFrom: defaultColor.middleColor,
    backgroundGradientTo: defaultColor.lightColor,
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: defaultColor.grayColor,
    },
    ...config,
  };
  if (type === 'line') {
    return (
      <LineChart
        data={
          data || {
            labels: ['test'],
            datasets: [
              {
                data: [1],
              },
            ],
          }
        }
        width={width || wp(80)}
        height={height || hp(25)}
        yAxisLabel="₺"
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={generalConfig}
        bezier
        style={style.chart}
        {...props}
      />
    );
  } else if (type === 'pie') {
    return (
      <PieChart
        data={data}
        chartConfig={generalConfig}
        width={width || wp(80)}
        height={height || hp(25)}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        absolute
        {...props}
      />
    );
  } else if (type === 'bar') {
    return (
      <BarChart
        style={generalConfig?.style || {}}
        data={data}
        width={width || wp(80)}
        height={height || hp(25)}
        yAxisLabel=""
        chartConfig={generalConfig}
        verticalLabelRotation={30}
        {...props}
      />
    );
  } else if (type === 'progress') {
    return (
      <ProgressChart
        data={data}
        width={width || wp(80)}
        height={height || hp(25)}
        strokeWidth={16}
        radius={32}
        chartConfig={generalConfig}
        hideLegend={false}
        style={generalConfig?.style || {}}
        {...props}
      />
    );
  } else if (type === 'contribution') {
    return (
      <ContributionGraph
        values={data}
        endDate={new Date('2023-05-30')}
        numDays={105}
        width={width || wp(80)}
        height={height || hp(25)}
        chartConfig={generalConfig}
        {...props}
      />
    );
  } else if (type === 'stacked') {
    return (
      <StackedBarChart
        style={generalConfig?.style || {}}
        data={data}
        width={width || wp(80)}
        height={height || hp(25)}
        chartConfig={generalConfig}
        {...props}
      />
    );
  } else {
    return null;
  }
};
export default CustomChart;
