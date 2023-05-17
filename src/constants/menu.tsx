const menuData = [
  {
    id: 0,
    title: 'ActionSheet',
    package: 'react-native-actionsheet',
    description:
      'Platformlar arası ActionSheet.\nBu bileşen, özel bir ActionSheet uygular ve onu farklı platformlarda (iOS ve Android) çizmek için aynı yolu sağlar.\nAslında, en iyi etkiyi korumak için iOS ta hala ActionSheetIOS u kullanıyor.',
    installDescription: '',
    usageDescription: {
      codes: [
        `<CustomActionSheet
          options={['Button 1', 'Button 2', 'Button 3']}
          title="Example Title"
          message="Example Message"
          cancelButtonIndex={1}
          destructiveButtonIndex={2}
          ref={ref}
          onPress={index => Alert.alert('Selected Button Index: ' + index)}
        />`,
      ],
      description:
        'Önemli Not: iOS tarafında sadece string option verilebilir. <Text> gibi bir component çalışmayacaktır.\nÖncelikle ref oluşturulması gereklidir. const ref = createRef();\nSonrasında ref üzerinden gösterim sağlanabilir. ref?.current?.show()',
    },
    screenName: 'ActionSheetScreen',
  },
  {
    id: 1,
    title: 'Switch',
    package: 'react-native-switch-toggle',
    description: '',
    installDescription: 'asdasdasd',
    usageDescription: '',
    screenName: '',
  },
  {
    id: 2,
    title: 'Buttons',
    package: 'react-native-material-ripple',
    description: '',
    installDescription: '',
    usageDescription: '',
    screenName: 'ButtonScreen',
  },
  {
    id: 3,
    title: 'TextInput',
    package: 'react-native-textinput-effects',
    description: '',
    installDescription: '',
    usageDescription: '',
    screenName: 'TextInputScreen',
  },
  {
    id: 4,
    title: 'Text',
    package: '',
    description: '',
    installDescription: '',
    usageDescription: '',
    screenName: 'TextScreen',
  },
  {
    id: 5,
    title: 'Avatar',
    package: 'react-native-user-avatar',
    description:
      'Avatar olarak renkli bir arka plan üzerinde kullanıcının baş harflerini kullanmaya geri dönmeyi destekleyen sade bir kullanıcı avatarı ekranı.',
    installDescription: '',
    usageDescription: {
      codes: [
        `<CustomAvatar
          src="https://picsum.photos/id/237/200/200"
          name="Kartega Yazılım"
          badgeText={5}
          size={75}
          randomBg={true}
        />`,
      ],
      description: '',
    },
    screenName: 'AvatarScreen',
  },
  {
    id: 6,
    title: 'Swipeable List',
    package: 'react-native-swipeable-list',
    description:
      'Avatar olarak renkli bir arka plan üzerinde kullanıcının baş harflerini kullanmaya geri dönmeyi destekleyen sade bir kullanıcı avatarı ekranı.',
    installDescription: '',
    usageDescription: {
      codes: [`<CustomSwipeableList data={dummyData} />`],
      description:
        'renderHiddenItem ile butonların tasarımı ayarlanabilir. renderItem gözükecek item tasarımı sağlar.',
    },
    screenName: 'SwipeableListScreen',
  },
  {
    id: 7,
    title: 'Charts',
    package: 'react-native-chart-kit react-native-svg',
    description: 'Cross Platform grafikler oluşturmanızı sağlar.',
    installDescription:
      'react-native-svg bağımlılığı vardor. Kurulması gerekir.',
    usageDescription: {
      codes: [
        `
      const lineConfig = {
        labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum'],
        datasets: [
          {
            data: [500, 750, 950, 250, 800],
            color: (opacity = 1) => 'rgba(134, 65, 244, '+opacity+')',
            strokeWidth: 2,
          },
        ],
        legend: ['Günlük Kazanç'],
      };
      <CustomChart type="line" data={lineConfig} width={wp(100) - 40} />`,
        `
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
        ];
      <CustomChart type="pie" data={pieData} width={wp(100) - 40} />`,
      ],
      description: 'https://github.com/indiespirit/react-native-chart-kit',
    },
    screenName: 'ChartScreen',
  },
  {
    id: 8,
    title: 'Image',
    package: 'react-native-fast-image',
    description: 'Hızlı, performanslı görselleri oluşturmanızı sağlar.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
      <CustomImage
        source={{uri: 'https://picsum.photos/id/111/200/300'}}
        style={{width: 300, height: 300}}
      />`,
      ],
      description:
        'https://github.com/DylanVann/react-native-fast-image priority: normal || high || low olarak ayarlanabilir. Öncelik belirtir.',
    },
    screenName: 'ImageScreen',
  },
  {
    id: 9,
    title: 'BigList',
    package: 'react-native-big-list',
    description:
      'Büyük boyutlu listelerin; hızlı ve performanslı gösterimni sağlar.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        const customRender = ({item, index}) => (
          <View>
            <CustomText>
              {item?.title || '-'}
            </CustomText>
          </View>
        );
        <CustomBigList data={data} customRender={customRender} />`,
      ],
      description:
        'https://github.com/marcocesarato/react-native-big-list  customRender props ile render düzenlenebilir.',
    },
    screenName: 'BigListScreen',
  },
  {
    id: 10,
    title: 'Code Editor',
    package: '@rivascva/react-native-code-editor',
    description:
      'Kaynak kodlarının editör içerindeki örnek görüntüsünü oluşturur',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomCodeEditor
              initialValue={'<?php var_dump($_POST); ?>'}
              language="php"
            />`,
      ],
      description:
        'https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_HLJS.MD syntax style list. https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD desteklenen diller. Diğer detaylar için https://github.com/RivasCVA/react-native-code-editor',
    },
    screenName: 'CodeEditorScreen',
  },
  {
    id: 11,
    title: 'Youtube Video',
    package: 'react-native-webview react-native-youtube-iframe',
    description: 'Youtube videolarını gösterimini sağlar.',
    installDescription: 'Bu paketin react-native-webview bağımlılığı vardır.',
    usageDescription: {
      codes: [
        `
        <CustomYoutubeVideo
          videoID={
            'N5HaMCMaPL4'
          }
      />`,
      ],
      description: 'https://lonelycpp.github.io/react-native-youtube-iframe/',
    },
    screenName: 'YoutubeVideoScreen',
  },
];
export default menuData;
