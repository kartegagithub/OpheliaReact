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
    description: 'Klavye aracılığıyla metin girişi yapılmasına olanak sağlar',
    installDescription: '',
    usageDescription: {
      codes: [
        `<CustomInput
        placeholderText="placeholder"
        placeholderTextColor={'gray'}
        leftIcon={<IconUser />}
        rightIcon={<IconUser />}
        />`,
      ],
      description: '',
    },
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
  {
    id: 12,
    title: 'Native Picker',
    package: '@react-native-picker/picker react-native-picker-select',
    description: 'Cross Platform dropdown picker desteği.',
    installDescription:
      'Bu paketin @react-native-picker/picker bağımlılığı vardır.',
    usageDescription: {
      codes: [
        `
        <CustomNativePicker
        items={[
          {label: 'Ankara', value: '06'},
          {label: 'İstanbul', value: '34'},
          {label: 'İzmir', value: '35'},
        ]}
      />`,
      ],
      description: 'https://github.com/lawnstarter/react-native-picker-select',
    },
    screenName: 'NativePickerScreen',
  },
  {
    id: 13,
    title: 'İcons',
    package: 'react-native-vector-icons',
    description:
      'Popüler icon kitlerinin uygulamada kullanılmasını sağlar. ios icon Fonts, android için main/assets/fonts klasörüne fontlar taşınmalıdır.',
    installDescription: `android için android/app/build.gradle içinde apply from: "../../node_modules/react-native-vector-icons/fonts.gradle" ios için, info.plist içerisine <key>UIAppFonts</key>
      <array>
        <string>AntDesign.ttf</string>
        <string>Entypo.ttf</string>
        <string>EvilIcons.ttf</string>
        <string>Feather.ttf</string>
        <string>FontAwesome.ttf</string>
        <string>FontAwesome5_Brands.ttf</string>
        <string>FontAwesome5_Regular.ttf</string>
        <string>FontAwesome5_Solid.ttf</string>
        <string>Foundation.ttf</string>
        <string>Ionicons.ttf</string>
        <string>MaterialIcons.ttf</string>
        <string>MaterialCommunityIcons.ttf</string>
        <string>SimpleLineIcons.ttf</string>
        <string>Octicons.ttf</string>
        <string>Zocial.ttf</string>
        <string>Fontisto.ttf</string>
      </array>`,
    usageDescription: {
      codes: [
        `
        <CustomIcon name="add-circle" type="ionicons" size={26} />
        <CustomIcon
        name="videocam-outline"
        type="ionicons"
        size={16}
        isButton={true}
        text="Video Arama"
        backgroundColor="#44bd32"
        onPress={() => Alert.alert('Call video')}
      />`,
      ],
      description: 'https://github.com/oblador/react-native-vector-icons',
    },
    screenName: 'IconScreen',
  },
  {
    id: 14,
    title: 'Dropwdown',
    package: 'react-native-dropdown-picker',
    description: 'Cross Platform dropdown desteği.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        const items = [
          {label: 'Adana', value: '01'},
          {label: 'Adıyaman', value: '02'},
          {label: 'Afyon', value: '03'},
        ];
        const onSelect = item => {
          alert(JSON.stringify(item));
        };
        <CustomDropdown items={items} onSelect={onSelect} />`,
      ],
      description:
        'https://hossein-zare.github.io/react-native-dropdown-picker-website/',
    },
    screenName: 'DropdownScreen',
  },
  {
    id: 15,
    title: 'Masonry Images',
    package: '@react-native-seoul/masonry-list',
    description: 'Cross Platform masonry resim listesi desteği',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        const data = [
          {
            id: 'id123',
            imgURL:
              'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
            text: 'Pioneer LHS Chaise Lounger in Grey Colour',
          },]
          <CustomMasonryImages data={data} render={item => <CustomText>{item.text}</CustomText>} />
          `,
      ],
      description: 'https://github.com/hyochan/react-native-masonry-list',
    },
    screenName: 'MasonryImagesScreen',
  },
  {
    id: 16,
    title: 'Toast',
    package: 'react-native-root-toast',
    description: 'Cross Platform toast mesaj desteği',
    installDescription:
      'Navigation başlatılan noktada <RootSiblingParent> ile sarılması gerekir.',
    usageDescription: {
      codes: [
        `
        import {toastShow} from '../components/customToast';
        toastShow('Hello!', {
          position: 'center',
        });
          `,
      ],
      description: 'https://github.com/magicismight/react-native-root-toast',
    },
    screenName: 'ToastScreen',
  },
  {
    id: 17,
    title: 'DateTime',
    package: 'react-native-date-picker',
    description:
      'This is a React Native Date Picker with following main features ,Supports iOS, Android and Expo,3 different modes: Time, Date, DateTime,Various languages, Customizable,Modal or Inlined',
    installDescription:
      'Xcode >= 11.6 ,React Native >= 0.57,If using React Native 0.64, 0.64.2 or later must be used,If using Expo, SDK 42 or later must be used. If using Expo SDK 44, 44.0.4 or later must be used.',
    usageDescription: {
      codes: [
        `
        import React, { useState } from 'react'
        import { Button } from 'react-native'
        import DatePicker from 'react-native-date-picker'
        
        export default () => {
          const [date, setDate] = useState(new Date())
          const [open, setOpen] = useState(false)
        
          return (
            <>
              <Button title="Open" onPress={() => setOpen(true)} />
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                  setOpen(false)
                  setDate(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
            </>
          )
        }
          `,
      ],
      description: 'https://github.com/henninghall/react-native-date-picker',
    },
    screenName: 'DateTimeScreen',
  },
  {
    id: 18,
    title: 'Carousel',
    package: 'react-native-snap-carousel',
    description: 'Cross Platform Carousel, Slider desteği. Animasyon desteği.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        import CustomCarousel from '../components/customCarousel';
        <CustomCarousel
              items={data}
              layout={'stack'}
              layoutCardOffset={'18'}
              showPagination={true}
            />
          `,
      ],
      description: 'https://github.com/meliorence/react-native-snap-carousel',
    },
    screenName: 'CarouselScreen',
  },
  {
    id: 19,
    title: 'Linear Gradient',
    package: 'react-native-linear-gradient',
    description:
      'Cross Platform Linear Gradient işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomLinearGradient
              colors={['#f9ce34', '#ee2a7b', '#6228d7']}
              start={{x: 0.0, y: 0}}
              end={{x: 1, y: 1.0}}
              locations={[0, 0.3, 0.8]}
              style={linearGradientScreenStyle.button}>
              <CustomText style={linearGradientScreenStyle.buttonText}>
                Instagram ile bağlan
              </CustomText>
            </CustomLinearGradient>
          `,
      ],
      description:
        'https://github.com/react-native-linear-gradient/react-native-linear-gradient',
    },
    screenName: 'LinearGradientScreen',
  },
  {
    id: 20,
    title: 'Shadow',
    package: 'react-native-svg react-native-shadow-2',
    description: 'Cross Platform Shadow Gölge işlemleri için kullanılabilir.',
    installDescription: 'react-native-svg paket bağımlılığı vardır.',
    usageDescription: {
      codes: [
        `
        <CustomShadow distance={20} startColor={'#ccc'}>
        <CustomImage source={{uri: 'https://picsum.photos/1000'}} />
      </CustomShadow>
          `,
      ],
      description: 'https://github.com/SrBrahma/react-native-shadow-2',
    },
    screenName: 'ShadowScreen',
  },
  {
    id: 21,
    title: 'Marquee Text',
    package: '',
    description: 'Cross Platform Marquee Text desteği',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomMarqueeText speed={1} loop={true} delay={1000}>
        <CustomText size={24}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry and typesetting industry.
        </CustomText>
      </CustomMarqueeText>
          `,
      ],
      description: '',
    },
    screenName: 'MarqueeTextScreen',
  },
  {
    id: 22,
    title: 'Progress',
    package: 'react-native-svg react-native-progress',
    description: 'Cross Platform progress için kullanılabilir.',
    installDescription: 'react-native-svg paket bağımlılığı vardır.',
    usageDescription: {
      codes: [
        `
        <CustomProgress
              type='bar'
              progress={0.3}
              width={200}
              height={30}
              borderRadius={30}
            />
            <CustomProgress
              type="circle"
              size={100}
              showsText
              progress={0.5}
              borderWidth={0}
            />
          `,
      ],
      description: 'https://github.com/oblador/react-native-progress',
    },
    screenName: 'ProgressScreen',
  },
  {
    id: 23,
    title: 'Message',
    package: 'react-native-flash-message',
    description: 'Cross Platform alert message için kullanılabilir.',
    installDescription: `App.tsx navigation öncesinde başlatılması gerekir.
      <FlashMessage
        position="top"
        //titleStyle={{fontSize: 14}}
        floating
        duration={2500}
      />`,
    usageDescription: {
      codes: [
        `
        import {
          showError,
          showInfo,
          showSuccess,
          showWarn,
        } from '../components/customMessage';
        showSuccess('Merhaba Dünya!');
          `,
      ],
      description:
        'https://github.com/lucasferreira/react-native-flash-message',
    },
    screenName: 'MessageScreen',
  },
  {
    id: 24,
    title: 'Blur',
    package: 'react-native-blur',
    description: 'Cross Platform Blur efekt işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomBlur
          style={blurScreenStyle.blur}
          blurType="xlight"
          blurAmount={3}>
        <CustomText
          style={[blurScreenStyle.buttonText, blurScreenStyle.blackText]}>
          Orjinal görsel için satın alım yapın
        </CustomText>
      </CustomBlur>
          `,
      ],
      description: 'https://github.com/Kureev/react-native-blur',
    },
    screenName: 'BlurScreen',
  },
  {
    id: 25,
    title: 'QRCode',
    package: 'react-native-qrcode-svg',
    description:
      'Cross Platform QRCode generate işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomQRCode
              value="Merhaba"
              logo={{uri: 'https://kartega.com/Files/img/logo_bar.png'}}
              color="red"
              logoSize={40}
            />
          `,
      ],
      description: 'https://github.com/awesomejerry/react-native-qrcode-svg',
    },
    screenName: 'QRCodeScreen',
  },
  {
    id: 27,
    title: 'Compressor',
    package: 'react-native-compressor',
    description: 'Video ve Resim compres işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomQRCode
              value="Merhaba"
              logo={{uri: 'https://kartega.com/Files/img/logo_bar.png'}}
              color="red"
              logoSize={40}
            />
          `,
      ],
      description: 'https://github.com/Shobbak/react-native-compressor',
    },
    screenName: 'CompressorScreen',
  },
  {
    id: 28,
    title: 'Modal',
    package: 'react-native-modal',
    description: 'Modal Örnekleri.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomQRCode
              value="Merhaba"
              logo={{uri: 'https://kartega.com/Files/img/logo_bar.png'}}
              color="red"
              logoSize={40}
            />
          `,
      ],
      description: 'https://github.com/Shobbak/react-native-compressor',
    },
    screenName: 'ModalScreen',
  },
  {
    id: 29,
    title: 'Permissions',
    package: 'react-native-permissions',
    description: 'Native özellik izinleri için kullanılabilir.',
    installDescription: `<key>NSAppleMusicUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSBluetoothAlwaysUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSBluetoothPeripheralUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSCalendarsUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSCameraUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSContactsUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSFaceIDUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSLocationAlwaysUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSLocationTemporaryUsageDescriptionDictionary</key>
    <dict>
      <key>YOUR-PURPOSE-KEY</key>
      <string>İzin isteği</string>
    </dict>
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSMotionUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSPhotoLibraryUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSPhotoLibraryAddUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSRemindersUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSSpeechRecognitionUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSSiriUsageDescription</key>
    <string>İzin isteği</string>
    <key>NSUserTrackingUsageDescription</key>
    <string>İzin isteği</string>`,
    usageDescription: {
      codes: [
        `
        <CustomQRCode
              value="Merhaba"
              logo={{uri: 'https://kartega.com/Files/img/logo_bar.png'}}
              color="red"
              logoSize={40}
            />
          `,
      ],
      description: 'https://github.com/zoontek/react-native-permissions',
    },
    screenName: 'PermissionsScreen',
  },
  {
    id: 30,
    title: 'Calendar',
    package: 'react-native-calendars',
    description: 'Takvim gösterimi için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomQRCode
              value="Merhaba"
              logo={{uri: 'https://kartega.com/Files/img/logo_bar.png'}}
              color="red"
              logoSize={40}
            />
          `,
      ],
      description: 'https://github.com/wix/react-native-calendars',
    },
    screenName: 'CalendarScreen',
  },
  {
    id: 31,
    title: 'Lottie',
    package: 'lottie-react-native lottie-ios@3.4.1',
    description: 'Lottie animasyonları gösterimi için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomQRCode
              value="Merhaba"
              logo={{uri: 'https://kartega.com/Files/img/logo_bar.png'}}
              color="red"
              logoSize={40}
            />
          `,
      ],
      description: 'https://github.com/lottie-react-native/lottie-react-native',
    },
    screenName: 'LottieScreen',
  },
  {
    id: 32,
    title: 'Checkbox',
    package: 'react-native-bouncy-checkbox',
    description: 'Checbox için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomQRCode
              value="Merhaba"
              logo={{uri: 'https://kartega.com/Files/img/logo_bar.png'}}
              color="red"
              logoSize={40}
            />
          `,
      ],
      description: 'https://github.com/WrathChaos/react-native-bouncy-checkbox',
    },
    screenName: 'CheckboxScreen',
  },
  {
    id: 33,
    title: 'MediaPicker',
    package: 'react-native-image-picker',
    description: 'Media Picker işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        const selected = await getSelectVideo();
        const selected = await getSelectImage();
        const selected = await getSelectCamera();
          `,
      ],
      description:
        'https://github.com/react-native-image-picker/react-native-image-picker',
    },
    screenName: 'MediaPickerScreen',
  },
  {
    id: 34,
    title: 'Device Info',
    package: 'react-native-device-info',
    description: 'Device ile ilgili bilgi işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        const info = await getBatteryLevel();
          `,
      ],
      description:
        'https://github.com/react-native-device-info/react-native-device-info',
    },
    screenName: 'DeviceInfoScreen',
  },
  {
    id: 35,
    title: 'Custom Input Mask',
    package: 'react-native-mask-input',
    description: 'Input mask işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomInputMask onChangeText={handleChange} value={value} mask="card" />
          `,
      ],
      description:
        'https://github.com/CaioQuirinoMedeiros/react-native-mask-input',
    },
    screenName: 'InputMaskScreen',
  },
  {
    id: 36,
    title: 'Custom Currency Input Mask',
    package: 'react-native-currency-input',
    description: 'Sadece para birimi mask işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomMoneyInputMask
          onChangeText={handleChange}
          value={value}
          prefix="₺"
        />
          `,
      ],
      description:
        'https://github.com/CaioQuirinoMedeiros/react-native-currency-input',
    },
    screenName: 'MoneyInputMaskScreen',
  },
  {
    id: 37,
    title: 'HTML Render',
    package: 'react-native-render-html',
    description: 'HTML gösterim işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomRenderHTML source={source} />
          `,
      ],
      description: 'https://github.com/meliorence/react-native-render-html',
    },
    screenName: 'RenderHTMLScreen',
  },
  {
    id: 38,
    title: 'Rating',
    package: 'react-native-ratings',
    description: 'Değerlendirme işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
         <CustomRating
            ratingCount={5}
            type={'custom'} //star, rocket, bell, heart
            imageSize={50}
            onFinishRating={ratingCompleted}/>
          `,
      ],
      description: 'https://github.com/Monte9/react-native-ratings',
    },
    screenName: 'RatingScreen',
  },
  {
    id: 39,
    title: 'Video',
    package: 'react-native-video',
    description: 'Video play işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomVideo
          source={'https://download.samplelib.com/mp4/sample-15s.mp4'}
        />
          `,
      ],
      description: 'https://github.com/react-native-video/react-native-video',
    },
    screenName: 'VideoScreen',
  },
  {
    id: 40,
    title: 'Masked View',
    package: '@react-native-masked-view/masked-view',
    description: 'Masked View işlemleri için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomMaskedView
        maskElement={
          <View>
            <CustomText style={{fontSize: 35}}>Merhaba Dünya!</CustomText>
          </View>
        }>
        <View style={{width: 80, backgroundColor: '#324376'}} />
        <View style={{width: 80, backgroundColor: '#F5DD90'}} />
        <View style={{width: 80, backgroundColor: '#F76C5E'}} />
        <View style={{width: 80, backgroundColor: '#e1e1e1'}} />
      </CustomMaskedView>
          `,
      ],
      description: 'https://github.com/react-native-masked-view/masked-view',
    },
    screenName: 'MaskedViewScreen',
  },
  {
    id: 41,
    title: 'Expandable',
    package: 'react-native-collapsible',
    description: 'Her item detayı için genişletilebilir görünüm sunar.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
          CustomExpandable
            sections={SECTIONS}
            headerStyle={}
            contentStyle={}
            sectionTitleStyle={}/>
           `,
      ],
      description: 'https://github.com/oblador/react-native-collapsible',
    },
    screenName: 'ExpandableScreen',
  },
  {
    id: 42,
    title: 'Bounce Card',
    package:
      'react-native-apple-card-views @freakycoder/react-native-bounceable',
    description: 'Card ve Bounce görünümü sunar.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
      <CustomBCard
        type="other"
        title={'Test Uygulaması'}
        subtitle={'Değişime Hazır Olun!'}
        largeTitle={'DILEK' + '\n' + 'ISTE' + '\n' + 'HEMEN!'}
        buttonText={'İNDİR'}
        iconSource={{
          uri: 'https://play-lh.googleusercontent.com/6NoDzI5d956RNFq88Ydxp70TPKCfC-JoMQaWZLZDOASne6dUKrafZQsfZLPgeUMofA',
        }}
        backgroundSource={{uri: 'https://picsum.photos/id/111/900/900'}}
        buttonSubtitle={'İndirmek için Tıkla'}
        onButtonPress={() => alert('download Press')}
      />
           `,
      ],
      description:
        'https://github.com/WrathChaos/react-native-apple-card-views',
    },
    screenName: 'BCardScreen',
  },
  {
    id: 43,
    title: 'Cupertino List',
    package: 'react-native-cupertino-list',
    description: 'IOS Style Cupertino Liste görünümü sunar.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
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
            title: 'Ekstra',
            data: [{title: 'Ayarlar', icon: 'ios-settings-outline'}],
          },
        ];
        <CustomCupertinoList items={items} />
           `,
      ],
      description: 'https://github.com/isaced/react-native-cupertino-list',
    },
    screenName: 'CupertinoListScreen',
  },
  {
    id: 44,
    title: 'Curved Tab',
    package: 'react-native-curved-bottom-bar',
    description: 'Curved Botton tabbar için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomCurvedBar screens={screens} _renderIcon={_renderIcon} />
          `,
      ],
      description:
        'https://github.com/hoaphantn7604/react-native-curved-bottom-bar',
    },
    screenName: 'CurvedBarScreen',
  },
  {
    id: 45,
    title: 'DataTable',
    package: 'react-native-datatable-component',
    description: 'Tablo görünümü için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
          <CustomDataTable
            data={data}
            noOfPages={2}
            colNames={colNames}
            />
           `,
      ],
      description:
        'https://github.com/MuhammadRafeh/react-native-datatable-component',
    },
    screenName: 'DataTableScreen',
  },
  {
    id: 46,
    title: 'Statusbar Alert',
    package: 'react-native-statusbar-alert',
    description: 'Statusbar Alert için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomCurvedBar screens={screens} _renderIcon={_renderIcon} />
          `,
      ],
      description: 'https://github.com/gnestor/react-native-statusbar-alert',
    },
    screenName: 'StatusbarAlertScreen',
  },
  {
    id: 47,
    title: 'Notifications',
    package: 'react-native-notificated',
    description: 'Genel alert yapısı için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        showInfo('Title', 'Test Message');
        showSuccess('Title', 'Test Message');
          `,
      ],
      description:
        'https://thewidlarzgroup.github.io/react-native-notificated/docs/intro/',
    },
    screenName: 'NotificationScreen',
  },
  {
    id: 48,
    title: 'Loaders',
    package: 'react-native-loader-kit',
    description: 'Loader animasyonları için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomLoaders type={2} style={{width: 30, height: 30}} color='red' />
          `,
      ],
      description: 'https://github.com/maitrungduc1410/react-native-loader-kit',
    },
    screenName: 'LoadersScreen',
  },
  {
    id: 49,
    title: 'Skeleton Content',
    package: 'react-native-skeleton-content',
    description: 'Skeleton Content animasyonları için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        const placeholderData = [
          {
            height: 10,
            width: 100,
            noMargin: false,
            style: {},
          },
          {
            height: 10,
            width: 60,
            noMargin: false,
            style: {},
          },
          {
            height: 10,
            width: 35,
            noMargin: false,
            style: {},
          },
          {
            height: 10,
            width: 100,
            color: '#000',
            noMargin: false,
            style: {},
          },
        ];
        <CustomSkeleton data={placeholderData} leftMedia={true} />
          `,
      ],
      description: 'https://github.com/alexZajac/react-native-skeleton-content',
    },
    screenName: 'SkeletonContentScreen',
  },
  {
    id: 50,
    title: 'Input Spinner',
    package: 'react-native-input-spinner',
    description: 'Spinner inputlar için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomInputSpinner onChange={b => alert(b)} />
          `,
      ],
      description:
        'https://github.com/marcocesarato/react-native-input-spinner',
    },
    screenName: 'InputSpinnerScreen',
  },
  {
    id: 51,
    title: 'Animation Card',
    package: 'react-native-gesture-flip-card',
    description: 'Animation Card için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        const renderFront = () => {
          return (
            <View>
              <View
                style={{
                  backgroundColor: 'rgba(255,0,0,0.3)',
                  position: 'absolute',
                  zIndex: 999,
                  width: 300,
                  height: 500,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomText
                  style={{
                    fontSize: 30,
                    color: '#fff',
                  }}>
                  Ön Yüz
                </CustomText>
              </View>
              <Image
                source={{uri: 'https://picsum.photos/1000/1000'}}
                style={{
                  width: 300,
                  height: 500,
                }}
              />
            </View>
          );
        };
        <CustomAnimationCard
        renderBack={renderBack}
        renderFront={renderFront}
      />
          `,
      ],
      description:
        'https://github.com/JungHsuan/react-native-gesture-flip-card',
    },
    screenName: 'AnimationCardScreen',
  },
  {
    id: 52,
    title: 'Fiesta',
    package: '@shopify/react-native-skia react-native-fiesta',
    description: 'Fiesta Animations için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomFiesta type="stars" />
          `,
      ],
      description: 'https://github.com/mateoguzmana/react-native-fiesta',
    },
    screenName: 'FiestaScreen',
  },
  {
    id: 53,
    title: 'Image Zoom',
    package: 'react-native-image-zoom-viewer',
    description: 'Image zoom için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomImageZoom uri={'https://picsum.photos/1000/1000'} />
          `,
      ],
      description: 'https://github.com/ascoders/react-native-image-viewer',
    },
    screenName: 'ImageZoomScreen',
  },
  {
    id: 54,
    title: 'Step Indicator',
    package: 'react-native-step-indicator',
    description: 'Adım göstergesi için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomStepIndicator
          direction="vertical"
          customStyles={customStyles}
          labels={labels}
        />
          `,
      ],
      description: 'https://github.com/24ark/react-native-step-indicator',
    },
    screenName: 'StepIndicatorScreen',
  },
  {
    id: 55,
    title: 'Animate Number',
    package: 'react-native-animated-numbers',
    description: 'Animasyonlu sayı değişimi için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        const [number, setNumber] = useState(1);
        <CustomAnimateNumber number={number} />
          `,
      ],
      description: 'https://github.com/heyman333/react-native-animated-numbers',
    },
    screenName: 'AnimateNumberScreen',
  },
  {
    id: 56,
    title: 'Circle Time',
    package: 'react-countdown-circle-timer',
    description: 'Circle progess ve değişimi için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomCircleTime duration={15} />
          `,
      ],
      description: 'https://github.com/vydimitrov/react-countdown-circle-timer',
    },
    screenName: 'CircleTimeScreen',
  },
  {
    id: 57,
    title: 'Wheel Picker',
    package: 'rreact-native-picky',
    description: 'Wheel picker için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        const data = [
          {
            selected: 3,
            items: [
              {
                label: 'Pazartesi',
                value: 1,
              },
              {
                label: 'Salı',
                value: 2,
              },
            ],
          },
          {
            selected: 1,
            items: [
              {
                label: 'Ocak',
                value: 1,
              },
              {
                label: 'Şubat',
                value: 2,
              },
            ],
          },
        ];
        const onChange = val => {
          alert(JSON.stringify(val));
        };
        <CustomWheelPicker data={data} onChange={onChange} />
          `,
      ],
      description: 'https://github.com/Liamandrew/react-native-picky',
    },
    screenName: 'WheelPickerScreen',
  },
  {
    id: 58,
    title: 'Tooltip',
    package: 'rn-tooltip',
    description: 'Tooltip için kullanılabilir.',
    installDescription: '',
    usageDescription: {
      codes: [
        `
        <CustomTooltip renderPopover={renderPopover} width={120} height={120}>
              <CustomText>Tooltip Göster</CustomText>
        </CustomTooltip>
          `,
      ],
      description: 'https://github.com/AndreiCalazans/rn-tooltip',
    },
    screenName: 'TooltipScreen',
  },
];
export default menuData;
