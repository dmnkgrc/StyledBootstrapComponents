// @flow

import React from 'react';
import styled from 'styled-components';
import styledProps from 'styled-props';

import { CloseButton as StyledCloseButton } from './Misc';

// styles
import colors from './styles/alert';

type Props = {
  element: string,
  children: any,
  type: string,
  onDismiss?: Function,
};

const CloseButton = styled(StyledCloseButton)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem 1.25rem;
  color: inherit;
`;

const StyledAlertLink = styled.a`
  font-weight: 700;
  color: ${styledProps(colors.link, 'type')};
`;

const AlertLink = (props: Props) => (
  <StyledAlertLink {...props} as={props.element}>
    {props.children}
  </StyledAlertLink>
);

AlertLink.defaultProps = {
  element: 'a',
  type: 'primary',
};

const searchForAlertLink = (children, type) =>
  React.Children.map(children, child => {
    if (!child.props || !child.props.children) return child;
    if (child.type === AlertLink) {
      return React.cloneElement(child, {
        children: searchForAlertLink(child.props.children, type),
        type,
      });
    }
    return child;
  });

const StyledAlert = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  border-color: ${styledProps(colors.borders, 'type')};
  background: ${styledProps(colors.backgrounds, 'type')};
  color: ${styledProps(colors.text, 'type')};
  hr {
    border-top-color: ${styledProps(colors.hr, 'type')};
  }
`;

const Alert = (props: Props) => {
  let { children } = props;
  if (children) {
    children = searchForAlertLink(children, props.type);
  } else {
    children = [];
  }
  if (props.onDismiss) {
    children = React.Children.map([...children, 'onDismiss'], child => {
      if (child === 'onDismiss') {
        return <CloseButton onClick={props.onDismiss} />;
      }
      return child;
    });
  }
  return (
    <StyledAlert as={props.element} {...props}>
      {children}
    </StyledAlert>
  );
};

Alert.defaultProps = {
  element: 'div',
  type: 'primary',
};

export { Alert, AlertLink };
