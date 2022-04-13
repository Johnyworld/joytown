import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};
const Template = args => <Button {...args} />;

export const primary = Template.bind({});
primary.args = {
  backgroundColor: '#079c28',
  label: 'Press Me',
  size: 'default',
};

export const secondary = Template.bind({});
secondary.args = {
  backgroundColor: 'blue',
  label: 'Press Me',
  size: 'default',
};
