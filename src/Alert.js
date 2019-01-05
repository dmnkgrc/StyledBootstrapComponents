// @flow

import React from 'react';
import styled from 'styled-components';
import styledProps from 'styled-props';

// styles
import colors from './styles/alert';

type Props = {
  element: string,
};

const createComponent = (StyledComponent, props) =>
  React.createElement(StyledComponent, props);

const buildAlert = (props: Props) => {
  const StyledAlert = styled(props.element)`
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    border-color: ${styledProps(colors.borders, 'type')};
    background: ${styledProps(colors.backgrounds, 'type')};
    color: ${styledProps(colors.text, 'type')};
  `;
  return createComponent(StyledAlert, props);
};

const buildAlertLink = (props: Props) => {
  const StyledAlertLink = styled(props.element)`
    font-weight: 700;
    color: ${styledProps(colors.link, 'type')};
  `;
  return createComponent(StyledAlertLink, props);
};

const Alert = (props: Props) => buildAlert(props);

Alert.defaultProps = {
  element: 'div',
  type: 'primary',
};

const AlertLink = (props: Props) => buildAlertLink(props);

AlertLink.defaultProps = {
  element: 'a',
  type: 'primary',
};

export { Alert, AlertLink };
