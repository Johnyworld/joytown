import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};
const Template = args => <Input {...args}></Input>;

export const Default = Template.bind({});
Default.args = {
  name: 'name',
  type: 'text',
};

export const label = Template.bind({});
label.args = {
  name: 'name',
  label: 'Name',
  type: 'text',
};

export const labelComment = Template.bind({});
labelComment.args = {
  name: 'name',
  label: 'Name',
  comment: 'input값에 대한 추가 설명',
  type: 'text',
};

export const err = Template.bind({});
err.args = {
  name: 'name',
  label: 'Name',
  errorMessage: 'Error!!',
  type: 'text',
};
