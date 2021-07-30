import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

test('renders App component', () => {
  const app = mount(<App />);
  expect(app.length).toEqual(1);
});
