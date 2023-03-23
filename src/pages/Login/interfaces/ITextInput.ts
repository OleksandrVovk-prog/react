import { UseFormRegister } from 'react-hook-form';
import ILoginForm from './ILoginForm';

interface ITextInput {
  name: keyof ILoginForm;
  label: string;
  register: UseFormRegister<ILoginForm>;
}

export default ITextInput;
