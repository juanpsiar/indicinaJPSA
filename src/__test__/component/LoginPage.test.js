import React from 'react';
import { mount } from 'enzyme';
import LoginPage from '../../pages/LoginPage';

describe('<LoginPage />', () => {
  test('Render LoginPage component', () => {
    const loginPage = mount(<LoginPage />);
    expect(loginPage.length).toEqual(1);
  });
});
