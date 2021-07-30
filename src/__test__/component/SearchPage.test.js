import React from 'react';
import { mount } from 'enzyme';
import SearchPage from '../../pages/SearchPage';

describe('<LoginPage />', () => {
  test('Render LoginPage component', () => {
    const loginPage = mount(<SearchPage />);
    expect(loginPage.length).toEqual(1);
  });
});
