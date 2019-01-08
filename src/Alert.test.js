import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { enzymeFind } from 'styled-components/test-utils';
import { mount } from 'enzyme';
import { expect as expectChai } from 'chai';
import sinon from 'sinon';

import { Alert, AlertLink } from './';
import colors from './styles/alert';

describe('<Alert />', () => {
  describe('Simple Alert', () => {
    it('renders correctly', () => {
      const wrapper = mount(<Alert>Test alert</Alert>);
      expect(wrapper).toMatchSnapshot();
      expectChai(wrapper.find('div')).to.have.lengthOf(1);
    });

    it('renders correctly other elements', () => {
      const wrapper = mount(<Alert element={'p'}>Test alert</Alert>);
      expect(wrapper).toMatchSnapshot();
      expectChai(wrapper.find('div')).to.have.lengthOf(0);
      expectChai(wrapper.find('p')).to.have.lengthOf(1);
    });

    it('has the right primary colors', () => {
      const wrapper = mount(<Alert>Test alert</Alert>);
      expect(wrapper).toMatchSnapshot();
      const children = wrapper.children();
      expect(children).toHaveStyleRule('color', colors.text.primary);
      expect(children).toHaveStyleRule(
        'background',
        colors.backgrounds.primary,
      );
      expect(children).toHaveStyleRule('border-color', colors.borders.primary);
    });

    it('has the right secondary colors', () => {
      const wrapper = mount(<Alert type="secondary">Test alert</Alert>);
      expect(wrapper).toMatchSnapshot();
      const children = wrapper.children();
      expect(children).toHaveStyleRule('color', colors.text.secondary);
      expect(children).toHaveStyleRule(
        'background',
        colors.backgrounds.secondary,
      );
      expect(children).toHaveStyleRule(
        'border-color',
        colors.borders.secondary,
      );
    });

    it('has the right success colors', () => {
      const wrapper = mount(<Alert type="success">Test alert</Alert>);
      expect(wrapper).toMatchSnapshot();
      const children = wrapper.children();
      expect(children).toHaveStyleRule('color', colors.text.success);
      expect(children).toHaveStyleRule(
        'background',
        colors.backgrounds.success,
      );
      expect(children).toHaveStyleRule('border-color', colors.borders.success);
    });

    it('has the right danger colors', () => {
      const wrapper = mount(<Alert type="danger">Test alert</Alert>);
      expect(wrapper).toMatchSnapshot();
      const children = wrapper.children();
      expect(children).toHaveStyleRule('color', colors.text.danger);
      expect(children).toHaveStyleRule('background', colors.backgrounds.danger);
      expect(children).toHaveStyleRule('border-color', colors.borders.danger);
    });

    it('has the right warning colors', () => {
      const wrapper = mount(<Alert type="warning">Test alert</Alert>);
      expect(wrapper).toMatchSnapshot();
      const children = wrapper.children();
      expect(children).toHaveStyleRule('color', colors.text.warning);
      expect(children).toHaveStyleRule(
        'background',
        colors.backgrounds.warning,
      );
      expect(children).toHaveStyleRule('border-color', colors.borders.warning);
    });

    it('has the right info colors', () => {
      const wrapper = mount(<Alert type="info">Test alert</Alert>);
      expect(wrapper).toMatchSnapshot();
      const children = wrapper.children();
      expect(children).toHaveStyleRule('color', colors.text.info);
      expect(children).toHaveStyleRule('background', colors.backgrounds.info);
      expect(children).toHaveStyleRule('border-color', colors.borders.info);
    });

    it('has the right light colors', () => {
      const wrapper = mount(<Alert type="light">Test alert</Alert>);
      expect(wrapper).toMatchSnapshot();
      const children = wrapper.children();
      expect(children).toHaveStyleRule('color', colors.text.light);
      expect(children).toHaveStyleRule('background', colors.backgrounds.light);
      expect(children).toHaveStyleRule('border-color', colors.borders.light);
    });

    it('has the right dark colors', () => {
      const wrapper = mount(<Alert type="dark">Test alert</Alert>);
      expect(wrapper).toMatchSnapshot();
      const children = wrapper.children();
      expect(children).toHaveStyleRule('color', colors.text.dark);
      expect(children).toHaveStyleRule('background', colors.backgrounds.dark);
      expect(children).toHaveStyleRule('border-color', colors.borders.dark);
    });
  });

  describe('Alert with AlertLink', () => {
    it('renders correctly', () => {
      const wrapper = mount(
        <Alert>
          Test alert <AlertLink href="#">with link</AlertLink>
        </Alert>,
      );
      expect(wrapper).toMatchSnapshot();
      expectChai(wrapper.find('div')).to.have.lengthOf(1);
      expectChai(wrapper.find('a')).to.have.lengthOf(1);
      expectChai(wrapper.find('a').props().href).to.eq('#');
    });

    it('renders correctly other elements', () => {
      const wrapper = mount(
        <Alert>
          Test alert <AlertLink element="p">with link</AlertLink>
        </Alert>,
      );
      expect(wrapper).toMatchSnapshot();
      expectChai(wrapper.find('div')).to.have.lengthOf(1);
      expectChai(wrapper.find('p')).to.have.lengthOf(1);
    });

    it('has the right primary link color', () => {
      const wrapper = mount(
        <Alert>
          Test alert <AlertLink href="#">with link</AlertLink>
        </Alert>,
      );
      expect(wrapper).toMatchSnapshot();
      const children = wrapper.find('AlertLink').children();
      expect(children).toHaveStyleRule('color', colors.link.primary);
    });

    it('has the right link color', () => {
      [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].forEach(type => {
        const wrapper = mount(
          <Alert type={type}>
            Test alert <AlertLink href="#">with link</AlertLink>
          </Alert>,
        );
        expect(wrapper).toMatchSnapshot();
        const children = wrapper.find('AlertLink').children();
        expect(children).toHaveStyleRule('color', colors.link[type]);
      });
    });
  });

  describe('Alert with content', () => {
    it('renders the right elements', () => {
      const texts = [
        'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
        'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.',
      ];
      const wrapper = mount(
        <Alert>
          <h4>Well done!</h4>
          <p>{texts[0]}</p>
          <hr />
          <p>{texts[1]}</p>
        </Alert>,
      );
      expect(wrapper).toMatchSnapshot();
      expectChai(wrapper.find('p')).to.have.lengthOf(2);
      wrapper.find('p').forEach((node, index) => {
        expectChai(node.text()).to.eq(texts[index]);
      });
      expectChai(wrapper.find('hr')).to.have.lengthOf(1);
    });
  });

  describe('Dismissable Alert', () => {
    it('performs the right actions', () => {
      const clickCallback = sinon.spy();
      const wrapper = mount(
        <Alert onDismiss={clickCallback}>Test alert</Alert>,
      );
      expect(wrapper).toMatchSnapshot();
      expectChai(wrapper.find('div')).to.have.lengthOf(1);
      expectChai(wrapper.find('button')).to.have.lengthOf(1);
      expectChai(wrapper.find('span')).to.have.lengthOf(1);
      wrapper.find('button').simulate('click');
      sinon.assert.called(clickCallback);
    });
  });
});
