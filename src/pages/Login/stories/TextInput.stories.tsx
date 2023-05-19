import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import TextInput from '../components/TextInput';
import InputTypes from '../../../constants/InputTypes';
import { loginSchema } from '../../../utils/validators';
import ILoginForm from '../interfaces/ILoginForm';
import ITextInput from '../interfaces/ITextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Pages/Login/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    register: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '250px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

function TextInputComponent({
  name, label, errors, type,
}: ITextInput): JSX.Element {
  const { register } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });
  return (
    <TextInput
      name={name}
      label={label}
      register={register}
      errors={errors}
      type={type}
    />
  );
}

export const TextInputStory: Story = {
  render: (args) => <TextInputComponent {...args} />,
  args: {
    name: 'username',
    label: 'Name',
    errors: undefined,
    type: InputTypes.Text,
  },
};

export const TextInputWithError: Story = {
  render: (args) => <TextInputComponent {...args} />,
  args: {
    name: 'username',
    label: 'Name',
    errors: { message: 'Name is required!', type: 'required' },
    type: InputTypes.Text,
  },
};

export const TextInputPassword: Story = {
  render: (args) => <TextInputComponent {...args} />,
  args: {
    name: 'password',
    label: 'Password',
    errors: undefined,
    type: InputTypes.Password,
  },
};
