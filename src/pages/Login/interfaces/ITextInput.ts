import { FieldError, UseFormRegister } from 'react-hook-form';
import ILoginForm from './ILoginForm';
import InputTypes from '../../../constants/InputTypes';

interface ITextInput {
  /**
   * name of the input
   */
  name: keyof ILoginForm;
  /**
   * label of the input
   */
  label: string;
  /**
   * register function from react-hook-form
   */
  register: UseFormRegister<ILoginForm>;
  /**
   * errors from react-hook-form
   */
  errors: FieldError | undefined;
  /**
   * type of the input
   */
  type?: InputTypes;
}

export default ITextInput;
