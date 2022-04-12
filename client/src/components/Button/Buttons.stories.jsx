import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};
const Template = args => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  label: 'Press Me',
  size: 'medium',
};

export const Green = Template.bind({});
Green.args = {
  label: 'Press Me',
  size: 'medium',
};
