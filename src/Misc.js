// @flow

import React from 'react';
import styled from 'styled-components';

const CloseButton = styled.button`
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  ${props =>
    !props.as || props.as === 'button'
      ? `
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
  `
      : ''}
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  &:not(:disabled):not(.disabled):hover,
  &:not(:disabled):not(.disabled):focus {
    color: #000;
    text-decoration: none;
    opacity: 0.75;
  }
`;

CloseButton.defaultProps = {
  children: <span aria-hidden="true">&times;</span>,
};

export { CloseButton };
