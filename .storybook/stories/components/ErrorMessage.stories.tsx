import type { Meta, StoryObj } from '@storybook/react';

import ErrorMessage from '../../../src/components/ErrorMessage/ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const ErrorMessageStory: Story = {
  name: 'Default',
  args: {
    message: 'Error message',
  },
};
