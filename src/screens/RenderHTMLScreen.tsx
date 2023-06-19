import React from 'react';
import Container from '../shared/fragment/container';
import CustomInputMask from '../components/customInputMask';
import CustomText from '../components/customText';
import Padding from '../shared/fragment/padding';
import CustomMoneyInputMask from '../components/customMoneyInputMask';
import CustomRenderHTML from '../components/customRenderHTML';
import Content from '../shared/fragment/content';

function RenderHTMLScreen() {
  const source = `<p style="font-size: 1.2rem; padding: 0 10px;">
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. 
  </p>
  <p style="color: purple; padding: 0 10px;">
    Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.
  </p>`;
  const source2 = `
  <div class="table-container">
  <table class="fixed-table">
    <thead>
      <tr><th>Fixed Header</th></tr>
    </thead>
    <tbody>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
      <tr><td>Fixed Column</td></tr>
    </tbody>
    <tfoot>
      <tr><td>Fixed Footer</td></tr>
    </tfoot>
  </table>
  
  <div class="table-horizontal-container">
    <table class="unfixed-table">
      <thead>
        <tr><th>Header</th><th>Header</th><th>Header</th><th>Header</th><th>Header</th><th>Header</th><th>Header</th><th>Header</th></tr>
      </thead>
      <tbody>
        <tr><th>Column one</th><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><th>Column one</th><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column one</td><td>Column two</td><td>Column three</td><td>Column four</td><td>Column firve</td><td>Column six</td><td>Column seven</td><td>Column eight</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
        <tr><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td><td>Column</td></tr>
      </tbody>
      
      <tfoot>
        <tr><td>Footer</td><td>Footer</td><td>Footer</td><td>Footer</td><td>Footer</td><td>Footer</td><th>Footer</th><th>Footer</th></tr>
      </tfoot>
    </table>
  </div>
</div>
</object>
</article>`;
  return (
    <Container>
      <Content>
        <Padding />
        <CustomRenderHTML source={source} />
        <Padding />
        <Padding />
        <Padding />
        <CustomRenderHTML source={source2} />
        <Padding />
        </Content>
    </Container>
  );
}
export default RenderHTMLScreen;
