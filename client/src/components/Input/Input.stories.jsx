import React from 'react';
import ButtonTest from './Input';

export default {
  title: 'Input',
  component: Input,
};
const Template = args => <Input {...args}></Input>;

export const primary = Template.bind({});
primary.args = {
  buttonColor: 'primary',
  label: 'Press Me',
};

export const secondary = Template.bind({});
secondary.args = {
  buttonColor: 'secondary',
  label: 'Press Me',
};
