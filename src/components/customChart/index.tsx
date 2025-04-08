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
  ChartConfig,
  AbstractChartConfig,
} from 'react-native-chart-kit';
import {hp, wp} from '../../shared/helpers/veriables';

type ChartType =
  | 'line'
  | 'bar'
  | 'pie'
  | 'progress'
  | 'contribution'
  | 'stacked';

interface Dataset {
  data: number[];
  color?: string;
  strokeWidth?: number;
  [key: string]: any;
}

interface ChartData {
  labels?: string[];
  datasets: Dataset[];
}

interface PieChartData {
  name: string;
  population: number;
  color: string;
  legendFontColor?: string;
}

interface CustomChartProps {
  type?: ChartType;
  width?: number;
  height?: number;
  config?: Partial<AbstractChartConfig>;
  data?: ChartData | PieChartData[] | {data: number[]};
  yAxisLabel?: string;
  yAxisSuffix?: string;
  style?: any;
  [key: string]: any;
}

const CustomChart: React.FC<CustomChartProps> = ({
  type = 'line',
  width = wp(80),
  height = hp(25),
  config,
  data,
  ...props
}) => {
  const generalConfig: AbstractChartConfig = {
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

  const defaultData: ChartData = {
    labels: ['test'],
    datasets: [
      {
        data: [1],
      },
    ],
  };

  switch (type) {
    case 'line':
      return (
        <LineChart
          data={(data as ChartData) || defaultData}
          width={width}
          height={height}
          yAxisLabel="₺"
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={generalConfig}
          bezier
          style={style.chart}
          {...props}
        />
      );
    case 'pie':
      return (
        <PieChart
          data={data as PieChartData[]}
          chartConfig={generalConfig}
          width={width}
          height={height}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          absolute
          {...props}
        />
      );
    case 'bar':
      return (
        <BarChart
          style={generalConfig?.style || {}}
          data={data as ChartData}
          width={width}
          height={height}
          yAxisLabel=""
          chartConfig={generalConfig}
          verticalLabelRotation={30}
          {...props}
        />
      );
    case 'progress':
      return (
        <ProgressChart
          data={data as {data: number[]}}
          width={width}
          height={height}
          strokeWidth={16}
          radius={32}
          chartConfig={generalConfig}
          hideLegend={false}
          {...props}
        />
      );
    case 'contribution':
      return (
        <ContributionGraph
          values={data as any[]}
          endDate={new Date('2023-05-30')}
          numDays={105}
          width={width}
          height={height}
          chartConfig={generalConfig}
          {...props}
        />
      );
    case 'stacked':
      return (
        <StackedBarChart
          style={generalConfig?.style || {}}
          data={data as ChartData}
          width={width}
          height={height}
          chartConfig={generalConfig}
          {...props}
        />
      );
    default:
      return null;
  }
};

CustomChart.displayName = 'CustomChart';

export default CustomChart;
