import React, {useState} from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import CustomModal from '../components/customModal';
import {Button} from 'react-native';

function ModalScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Container>
      <Content>
        <Button title="Show modal" onPress={toggleModal} />
        <CustomModal
          isModalVisible={isModalVisible}
          buttonText="Helloo"
          toggleModal={toggleModal}
          titleContentModal={'Hide Modal'}
        />
      </Content>
    </Container>
  );
}
export default ModalScreen;
