import React from 'react';
import { mount, shallow } from 'enzyme';
import RepoGithub from '../../components/RepoGithub';

describe('<RepoGithub />', () => {
  test('Render RepoGithub component', () => {
    let props = {
      data: {
        name: 'test',
        description: 'test',
        primaryLanguage: { name: 'test' },
        licenseInfo: { name: 'test' },
        latestRelease: { updatedAt: '' },
      },
      id: 0,
    };
    const search = mount(<RepoGithub {...props} />);

    expect(search.length).toEqual(1);
  });
  // test('Render')
});
