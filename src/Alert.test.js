import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { enzymeFind } from 'styled-components/test-utils';
import { mount } from 'enzyme';
import { expect as expectChai } from 'chai';

import { Alert } from './';

describe('<Alert />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Alert>Test alert</Alert>);
    expect(wrapper).toMatchSnapshot();
    console.log(wrapper.find(Alert).type());
    expectChai(wrapper.find('div')).to.have.lengthOf(1);
  });
});
