// @flow

import React from 'react';
import styled from 'styled-components';
import styledProps from 'styled-props';

// styles
import colors from './styles/alert';

type Props = {
  element: string,
};

const buildType = (props: Props) => {
  const StyledAlert = styled(`${props.element}`)`
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    border-color: ${styledProps(colors.borders, 'type')};
    background: ${styledProps(colors.backgrounds, 'type')};
    color: ${styledProps(colors.text, 'type')};
  `;
  const component = React.createElement(StyledAlert, props);
  return component;
};

const Alert = (props: Props) => buildType(props);

Alert.defaultProps = {
  element: 'div',
  type: 'primary',
};

export { Alert };
