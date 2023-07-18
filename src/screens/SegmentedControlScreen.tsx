import React, {useState} from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import Padding from '../shared/fragment/padding';
import CustomSegmentedControl from '../components/customSegmentedControl';
import CustomText from '../components/customText';

function SegmentedControlScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onChange = index => {
    setSelectedIndex(index);
  };
  return (
    <Container>
      <Content>
        <Padding />
        <CustomSegmentedControl
          onChange={onChange}
          values={['Profil', 'Ayarlar', 'Hakkında']}
        />
        <Padding />
        <CustomText>Selected Tab: {selectedIndex}</CustomText>
        <Padding />
      </Content>
    </Container>
  );
}
export default SegmentedControlScreen;
