import React from 'react';
import ButtonTest from './ButtonTest';

export default {
  title: 'ButtonTest',
  component: ButtonTest,
};
const Template = args => <ButtonTest {...args}>Press Me</ButtonTest>;

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
