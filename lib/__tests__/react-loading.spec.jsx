import React from 'react';
import { shallow, mount } from 'enzyme';

import Loading from '../react-loading';

jest.useFakeTimers();

describe('test Loading component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Loading />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should show classes', () => {
    const enzymeWrapper = shallow(<Loading className="some-class" />);

    expect(enzymeWrapper.find('div').hasClass('some-class')).toBeTruthy();
  });

  it('delayed key in state should be equal to false if prop delay is 0', () => {
    const enzymeWrapper = shallow(<Loading />);

    expect(enzymeWrapper.state('delayed')).toEqual(false);
  });

  it('delayed in state should be truthy when props delay is bigger than 0', () => {
    const enzymeWrapper = shallow(<Loading delay={100} />);

    expect(enzymeWrapper.state('delayed')).toEqual(true);
  });

  it('delayed key in state should remain truthy till delay time has passed', () => {
    const enzymeWrapper = shallow(<Loading delay={2000} />);

    jest.runTimersToTime(1000);

    expect(enzymeWrapper.state('delayed')).toEqual(true);
  });

  it('delayed key in state should become true and and then false after delay time has passed', () => {
    const enzymeWrapper = shallow(<Loading delay={2000} />);

    jest.runTimersToTime(2000);

    expect(enzymeWrapper.state('delayed')).toEqual(false);
  });
});
