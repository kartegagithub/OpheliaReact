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
];
export default menuData;
