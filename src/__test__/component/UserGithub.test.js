import React from 'react';
import { mount, shallow } from 'enzyme';
import UserGithub from '../../components/UserGithub';

describe('<UserGithub />', () => {
  test('Render UserGithub component', () => {
    let props = {
      data: {
        name: 'test',
        description: 'test',
        email: 'test@email.com',
      },
      id: 0,
    };
    const search = mount(<UserGithub {...props} />);

    expect(search.length).toEqual(1);
  });
  // test('Render')
});
