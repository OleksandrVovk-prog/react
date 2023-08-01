import PageProtected from '../PageProtected';
import IPageProtected from '../interfaces/IPageProtected';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageProtected> = {
  title: 'Layout/PageProtected',
  component: PageProtected,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PageProtected>;

function PageProtectedComponent({ redirectUri }: IPageProtected) {
  return <PageProtected redirectUri={redirectUri} />;
}

export const PageProtectedStory: Story = {
  name: 'Default',
  render: (args) => <PageProtectedComponent {...args} />,
  args: {
    redirectUri: '/login',
  },
};
