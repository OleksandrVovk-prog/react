import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

import ILoginForm from './ILoginForm';

interface ILoginView {
  onLoginSubmit: () => void;
  errors: FieldErrors<ILoginForm>;
  register: UseFormRegister<ILoginForm>
  isLoading: boolean;
  isError: boolean;
  error: FetchBaseQueryError | SerializedError | undefined
}

export default ILoginView;
