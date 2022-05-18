import React from 'react';
import ImageIcon from './ImageIcon';

export default {
  title: 'ImageIcon',
  component: ImageIcon,
};
const Template = args => <ImageIcon {...args}></ImageIcon>;

export const Default = Template.bind({});
Default.args = {
  imageIconColor: 'primary',
};
