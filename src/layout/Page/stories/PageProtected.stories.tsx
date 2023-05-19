import type { Meta, StoryObj } from '@storybook/react';

import PageProtected from '../PageProtected';

const meta: Meta<typeof PageProtected> = {
  title: 'Layout/PageProtected',
  component: PageProtected,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PageProtected>;

export const PageProtectedStory: Story = {
  name: 'Default',
};
