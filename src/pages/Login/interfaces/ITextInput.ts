import { FieldError, UseFormRegister } from 'react-hook-form';
import ILoginForm from './ILoginForm';
import InputTypes from '../../../constants/InputTypes';

interface ITextInput {
  name: keyof ILoginForm;
  label: string;
  register: UseFormRegister<ILoginForm>;
  errors: FieldError | undefined;
  type?: InputTypes;
}

export default ITextInput;
