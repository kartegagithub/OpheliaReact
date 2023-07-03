import React from 'react';
import Container from '../shared/fragment/container';
import CustomCurvedBar from '../components/customCurvedBar';
import HomeScreen from './HomeScreen';
import ChartScreen from './ChartScreen';
import CustomIcon from '../components/customIcon';

function CurvedBarScreen() {
  const screens = [
    {
      name: 'Anasayfa',
      position: 'LEFT',
      component: () => <HomeScreen />,
    },
    {
      name: 'Ayarlar',
      position: 'RIGHT',
      component: () => <ChartScreen />,
    },
  ];
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Anasayfa':
        icon = 'ios-home-outline';
        break;
      case 'Ayarlar':
        icon = 'settings-outline';
        break;
    }

    return (
      <CustomIcon
        type="ionicons"
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  return (
    <Container>
      <CustomCurvedBar screens={screens} _renderIcon={_renderIcon} />
    </Container>
  );
}
export default CurvedBarScreen;
