import type { Meta, StoryObj } from '@storybook/react';

import Page from '../Page';

const meta: Meta<typeof Page> = {
  title: 'Layout/Page',
  component: Page,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Page>;

export const PageStory: Story = {
  name: 'Default',
};