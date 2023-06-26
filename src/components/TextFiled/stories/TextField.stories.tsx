import type { Meta, StoryObj } from '@storybook/react';

import TextField from '../TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const ErrorMessageStory: Story = {
  name: 'Default',
  args: {
    text: 'Text field',
  },
};
