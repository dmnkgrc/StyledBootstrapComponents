// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';

import { Alert, AlertLink, BootstrapWrapper } from '../src';

storiesOf('Alerts', module)
  .add('Simple', () => (
    <BootstrapWrapper>
      <Alert>A simple primary alert—check it out!</Alert>
      <Alert type="secondary">A simple secondary alert—check it out!</Alert>
      <Alert type="success">A simple success alert—check it out!</Alert>
      <Alert type="danger">A simple danger alert—check it out!</Alert>
      <Alert type="warning">A simple warning alert—check it out!</Alert>
      <Alert type="info">A simple info alert—check it out!</Alert>
      <Alert type="light">A simple light alert—check it out!</Alert>
      <Alert type="dark">A simple dark alert—check it out!</Alert>
    </BootstrapWrapper>
  ))
  .add('With link', () => (
    <BootstrapWrapper>
      <Alert>
        A simple primary alert with{' '}
        <AlertLink href="#">an example link</AlertLink>. Give it a click if you
        like.
      </Alert>
      <Alert type="secondary">
        A simple secondary alert with{' '}
        <AlertLink href="#">an example link</AlertLink>. Give it a click if you
        like.
      </Alert>
      <Alert type="success">
        A simple success alert with{' '}
        <AlertLink href="#">an example link</AlertLink>. Give it a click if you
        like.
      </Alert>
      <Alert type="danger">
        A simple danger alert with{' '}
        <AlertLink href="#">an example link</AlertLink>. Give it a click if you
        like.
      </Alert>
      <Alert type="warning">
        A simple warning alert with{' '}
        <AlertLink href="#">an example link</AlertLink>. Give it a click if you
        like.
      </Alert>
      <Alert type="info">
        A simple info alert with <AlertLink href="#">an example link</AlertLink>
        . Give it a click if you like.
      </Alert>
      <Alert type="light">
        A simple light alert with{' '}
        <AlertLink href="#">an example link</AlertLink>. Give it a click if you
        like.
      </Alert>
      <Alert type="dark">
        A simple dark alert with <AlertLink href="#">an example link</AlertLink>
        . Give it a click if you like.
      </Alert>
    </BootstrapWrapper>
  ))
  .add('With content', () => (
    <BootstrapWrapper>
      <Alert type="success">
        <h4>Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p>
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    </BootstrapWrapper>
  ));
