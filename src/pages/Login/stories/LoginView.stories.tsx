import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import type { Meta, StoryObj } from '@storybook/react';
import { loginSchema } from '../../../utils/validators';
import LoginView from '../LoginView';
import ILoginView from '../interfaces/ILoginView';
import ILoginForm from '../interfaces/ILoginForm';

const meta: Meta<typeof LoginView> = {
  title: 'Pages/Login/LoginView',
  component: LoginView,
  tags: ['autodocs'],
  argTypes: {
    register: ({
      table: {
        disable: true,
      },
    }),
  },
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

function LoginViewComponent({
  onLoginSubmit,
  errors,
  isLoading,
  isError,
  error,
}: ILoginView): ReactElement {
  const { register } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });
  return (
    <LoginView
      onLoginSubmit={onLoginSubmit}
      register={register}
      errors={errors}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
}

export const LoginViewStory: Story = {
  name: 'Default',
  render: (args) => <LoginViewComponent {...args} />,
  args: {
    onLoginSubmit: () => {},
    errors: {},
    isLoading: false,
    isError: false,
    error: {},
  },
};
