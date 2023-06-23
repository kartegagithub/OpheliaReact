import React from 'react';
import Container from '../shared/fragment/container';
import CustomCupertinoList from '../components/customCupertinoList';
import defaultColor from '../constants/style/defaultColor';

function CupertinoListScreen() {
  const items = [
    {
      data: [
        {
          title: 'Bütün Kayıtlar',
          forward: {},
          icon: 'ios-grid-outline',
          onPress: () => {
            alert('Bütün kayıtlar');
          },
        },
        {
          title: 'Favoriler',
          forward: {title: '6'},
          icon: 'ios-star-outline',
          enabledSwipeDelete: true,
          onSwipeDelete: () => {
            alert('silindi');
          },
        },
      ],
    },

    {
      title: 'Yaşam Tarzı',
      data: [
        {
          title: 'Aktiviteler',
          forward: {title: '3'},
          icon: {
            name: 'ios-watch-outline',
            color: defaultColor.middleColor,
          },
        },
        {
          title: 'Uyku',
          forward: {title: '5'},
          icon: 'ios-bed-outline',
        },
      ],
    },
    {
      title: 'Ekstra',
      data: [{title: 'Ayarlar', icon: 'ios-settings-outline'}],
    },
  ];
  return (
    <Container>
      <CustomCupertinoList items={items} />
    </Container>
  );
}
export default CupertinoListScreen;
