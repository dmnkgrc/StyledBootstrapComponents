// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';

import { Alert, BootstrapWrapper } from '../src';

storiesOf('Alerts', module)
  .add('Primary', () => (
    <BootstrapWrapper>
      <Alert>A simple primary alert—check it out!</Alert>
    </BootstrapWrapper>
  ))
  .add('Secondary', () => (
    <BootstrapWrapper>
      <Alert type="secondary">A simple secondary alert—check it out!</Alert>
    </BootstrapWrapper>
  ))
  .add('Success', () => (
    <BootstrapWrapper>
      <Alert type="success">A simple success alert—check it out!</Alert>
    </BootstrapWrapper>
  ))
  .add('Danger', () => (
    <BootstrapWrapper>
      <Alert type="danger">A simple danger alert—check it out!</Alert>
    </BootstrapWrapper>
  ))
  .add('Warning', () => (
    <BootstrapWrapper>
      <Alert type="warning">A simple warning alert—check it out!</Alert>
    </BootstrapWrapper>
  ))
  .add('Info', () => (
    <BootstrapWrapper>
      <Alert type="info">A simple info alert—check it out!</Alert>
    </BootstrapWrapper>
  ))
  .add('Light', () => (
    <BootstrapWrapper>
      <Alert type="light">A simple light alert—check it out!</Alert>
    </BootstrapWrapper>
  ))
  .add('Dark', () => (
    <BootstrapWrapper>
      <Alert type="dark">A simple dark alert—check it out!</Alert>
    </BootstrapWrapper>
  ));
