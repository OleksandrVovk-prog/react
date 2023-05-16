import type { Meta, StoryObj } from '@storybook/react';

import LinkButton from '../../../src/components/LinkButton/LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const LinkButtonStory: Story = {
  name: 'Default',
  args: {
    to: '#',
    title: 'Link button',
    onClick: () => {},
  },
};
