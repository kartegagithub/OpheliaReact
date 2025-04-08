import * as React from 'react';
import style from './style';
import defaultColor from '../../constants/style/defaultColor';
import {ActivityIndicator, Dimensions, View, ViewStyle} from 'react-native';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import CustomImage from '../customImage';

interface StaggerItem {
  id: string | number;
  url: string;
  [key: string]: any;
}

interface CustomStaggerViewProps {
  data?: StaggerItem[];
  containerStyle?: ViewStyle;
  activityIndicatorStyle?: ViewStyle;
  [key: string]: any;
}

const CustomStaggerView: React.FC<CustomStaggerViewProps> = ({
  data,
  containerStyle,
  activityIndicatorStyle,
  ...props
}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const SCREEN_WIDTH = Dimensions.get('window').width;

  const getChildrenStyle = (): ViewStyle => {
    return {
      width: (SCREEN_WIDTH - 60) / 2,
      height: Number(Math.random() * 20 + 12) * 10,
      backgroundColor: 'gray',
      margin: 4,
      borderRadius: 18,
    };
  };

  const renderChildren = (item: StaggerItem): React.JSX.Element => {
    return (
      <View style={getChildrenStyle()} key={item.id}>
        <View style={style.avatarImage}>
          <CustomImage
            style={style.img}
            source={{
              uri: item.url,
            }}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  };

  return (
    <StaggeredList
      data={data || []}
      animationType="SLIDE_DOWN"
      contentContainerStyle={{...style.contentContainer, ...containerStyle}}
      showsVerticalScrollIndicator={false}
      renderItem={({item}: {item: StaggerItem}) => renderChildren(item)}
      loading={isLoading}
      LoadingView={
        <View style={style.activityIndicatorWrapper}>
          <ActivityIndicator
            color="black"
            size="large"
            style={activityIndicatorStyle}
          />
        </View>
      }
      {...props}
    />
  );
};

CustomStaggerView.displayName = 'CustomStaggerView';

export default CustomStaggerView;
