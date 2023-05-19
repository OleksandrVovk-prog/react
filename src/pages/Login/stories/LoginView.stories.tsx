import type { Meta, StoryObj } from '@storybook/react';

import LoginView from '../LoginView';

const meta: Meta<typeof LoginView> = {
  title: 'Pages/Login/LoginView',
  component: LoginView,
  tags: ['autodocs'],
  parameters: {
    mockData: [
      {
        url: `${process.env.REACT_APP_API}/auth/login`,
        method: 'POST',
        status: 400,
        response: {
          message: 'Storybook-addon-mock error!',
        },
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof LoginView>;

export const LoginViewStory: Story = {
  name: 'Default',
};
