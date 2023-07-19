import React from 'react';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import CustomStaggerView from '../components/customStaggerView';

function StaggerViewScreen() {
  const data = Array.from({length: 25}, (_, i) => {
    return {url: 'https://picsum.photos/id/' + (i + 21 * 2) + '/1000/1000'};
  });
  return (
    <Container>
      <Content>
        <CustomStaggerView data={data} />
      </Content>
    </Container>
  );
}
export default StaggerViewScreen;
