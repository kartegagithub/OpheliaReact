import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomAvatar from '../components/customAvatar';
import CustomText from '../components/customText';
import CustomChart from '../components/customChart';
import {wp} from '../shared/helpers/veriables';
import defaultColor from '../constants/style/defaultColor';

function ChartScreen() {
  const lineConfig = {
    labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum'],
    datasets: [
      {
        data: [500, 750, 950, 250, 800],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['Günlük Kazanç'],
  };
  const pieData = [
    {
      name: 'Ankara',
      population: 150,
      color: defaultColor.lightColor,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'İstanbul',
      population: 300,
      color: defaultColor.darkDegree,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'İzmir',
      population: 75,
      color: defaultColor.grayColor,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Bursa',
      population: 50,
      color: defaultColor.middleColor,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  const barData = {
    labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum'],
    datasets: [
      {
        data: [500, 750, 950, 250, 800],
      },
    ],
  };
  const progressData = {
    labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum'],
    data: [0.2, 0.1, 0.25, 0.15, 0.3],
  };
  const contributionData = [
    {date: '2023-05-09', count: 12},
    {date: '2023-05-10', count: 24},
    {date: '2023-05-11', count: 36},
    {date: '2023-05-12', count: 41},
    {date: '2023-05-13', count: 5},
    {date: '2023-05-14', count: 6},
    {date: '2023-05-15', count: 7},
    {date: '2023-05-16', count: 8},
    {date: '2023-05-17', count: 9},
    {date: '2023-05-18', count: 88},
    {date: '2023-05-19', count: 111},
  ];
  const stackedData = {
    labels: ['Pazartesi', 'Salı'],
    legend: ['Sabah', 'Öğle', 'Akşam'],
    data: [
      [6, 6, 6],
      [3, 3, 6],
    ],
    barColors: ['#999', '#555', '#000'],
  };
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomText>Line Chart</CustomText>
            <CustomChart type="line" data={lineConfig} width={wp(100) - 40} />
          </View>
          <Padding />
          <View>
            <CustomText>Pie Chart</CustomText>
            <CustomChart type="pie" data={pieData} width={wp(100) - 40} />
          </View>
          <Padding />
          <View>
            <CustomText>Bar Chart</CustomText>
            <CustomChart type="bar" data={barData} width={wp(100) - 40} />
          </View>
          <Padding />
          <View>
            <CustomText>Progress Bar</CustomText>
            <CustomChart
              type="progress"
              data={progressData}
              width={wp(100) - 40}
            />
          </View>
          <Padding />

          <View>
            <CustomText>Contribution Chart</CustomText>
            <CustomChart
              type="contribution"
              data={contributionData}
              width={wp(100) - 40}
            />
          </View>
          <Padding />
          <View>
            <CustomText>Stacked Chart</CustomText>
            <CustomChart
              type="stacked"
              data={stackedData}
              width={wp(100) - 40}
            />
          </View>
          <Padding b={20} />
        </View>
      </Content>
    </Container>
  );
}
export default ChartScreen;
