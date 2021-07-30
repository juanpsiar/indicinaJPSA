import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchPage from '../../pages/SearchPage';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<SearchPage />', () => {
  test('Render SearchPage component', () => {
    let props = {
      location: {
        state: {
          code: 'data',
        },
      },
    };
    const search = shallow(<SearchPage {...props} />);

    expect(search.length).toEqual(1);
  });
});
