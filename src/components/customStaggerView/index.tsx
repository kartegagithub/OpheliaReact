import * as React from 'react';
import style from './style';
import defaultColor from '../../constants/style/defaultColor';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import CustomImage from '../customImage';

const CustomStaggerView = ({
  data,
  containerStyle,
  activityIndicatorStyle,
  ...props
}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const renderChildren = item => {
    return (
      <View style={getChildrenStyle()} key={item.id}>
        <View style={style.avatarImage}>
          <CustomImage
            onError={() => {}}
            style={style.img}
            source={{
              uri: item.url,
            }}
            resizeMode={'cover'}
          />
        </View>
      </View>
    );
  };
  const SCREEN_WIDTH = Dimensions.get('window').width;

  const getChildrenStyle = () => {
    return {
      width: (SCREEN_WIDTH - 60) / 2,
      height: Number(Math.random() * 20 + 12) * 10,
      backgroundColor: 'gray',
      margin: 4,
      borderRadius: 18,
    };
  };

  return (
    <StaggeredList
      data={data || []}
      animationType={'SLIDE_DOWN'}
      contentContainerStyle={{...style.contentContainer, ...containerStyle}}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => renderChildren(item)}
      isLoading={isLoading}
      LoadingView={
        <View style={style.activityIndicatorWrapper}>
          <ActivityIndicator
            color={'black'}
            size={'large'}
            style={activityIndicatorStyle}
          />
        </View>
      }
      {...props}
    />
  );
};
export default CustomStaggerView;
