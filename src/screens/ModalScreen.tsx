import React, {useState} from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import CustomModal from '../components/customModal';
import {Button, View} from 'react-native';
import defaultColor from '../constants/style/defaultColor';

function ModalScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSloowModalVisible, setSloowModalVisible] = useState(false);
  const [isAnimationModalVisible, setAnimationModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleSloowModal = () => {
    setSloowModalVisible(!isSloowModalVisible);
  };

  const toggleAnimationModal = () => {
    setAnimationModalVisible(!isAnimationModalVisible);
  };

  return (
    <Container>
      <Content>
        <View style={{marginTop: 10}}>
          <Button
            color={defaultColor.lightColor}
            title="Show modal"
            onPress={toggleModal}
          />
          <CustomModal
            isModalVisible={isModalVisible}
            buttonText="Helloo"
            toggleModal={toggleModal}
            titleContentModal={'Hide Modal'}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button
            color={defaultColor.lightColor}
            title="Sloow modal"
            onPress={toggleSloowModal}
          />
          <CustomModal
            animationInTiming={4000}
            isModalVisible={isSloowModalVisible}
            buttonText="Helloo"
            toggleModal={toggleSloowModal}
            titleContentModal={'Hide Modal'}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button
            color={defaultColor.lightColor}
            title="Animation modal"
            onPress={toggleAnimationModal}
          />
          <CustomModal
            swipeDirection={'left'}
            deviceHeight={1000}
            hasBackdrop={true}
            coverScreen={true}
            avoidKeyboard={true}
            style={{backgroundColor: 'red'}}
            animationInTiming={3000}
            animationOutTiming={3000}
            animationIn={'fadeInLeft'}
            animationOut={'rotate'}
            isModalVisible={isAnimationModalVisible}
            buttonText="Helloo"
            toggleModal={toggleAnimationModal}
            titleContentModal={'Hide Modal'}
          />
        </View>
      </Content>
    </Container>
  );
}
export default ModalScreen;
