import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { A } from '.';

export default {
  title: 'Styled/A',
  component: A,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof A>;

const Template: ComponentStory<any> = (args) => <A {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
