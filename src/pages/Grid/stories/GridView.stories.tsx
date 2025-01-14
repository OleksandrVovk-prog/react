import GridView from '../GridView';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GridView> = {
  title: 'Pages/Grid/GridView',
  component: GridView,
  tags: ['autodocs'],
  parameters: {
    squares: [
      {
        x: 0,
        y: 0,
        color: '#000',
        id: 1,
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof GridView>;

export const GridViewStory: Story = {
  name: 'Grid View',
};
