import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import {View} from 'react-native';
import CustomAvatar from '../components/customAvatar';
import CustomText from '../components/customText';
import CustomYoutubeVideo from '../components/customYoutubeVideo';

function YoutubeVideoScreen() {
  return (
    <Container>
      <Content>
        <View>
          <Padding />
          <View>
            <CustomYoutubeVideo
              videoID={
                'https://www.youtube.com/watch?v=N5HaMCMaPL4&ab_channel=kalmukb'
              }
            />
          </View>
          <Padding />
        </View>
      </Content>
    </Container>
  );
}
export default YoutubeVideoScreen;
