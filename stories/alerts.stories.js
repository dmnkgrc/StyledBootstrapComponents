// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';

import { Alert, BootstrapWrapper } from '../src';

storiesOf('Alerts', module).add('with text', () => (
  <BootstrapWrapper>
    <Alert>Hello Alert</Alert>
  </BootstrapWrapper>
));
