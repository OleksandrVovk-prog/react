import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import useErrorMessage from '../../hooks/useErrorMessage';
import InputTypes from '../../constants/InputTypes';
import TextInput from './components/TextInput';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import styles from './sass/LoginView.module.scss';
import ILoginView from './interfaces/ILoginView';

/**
 * Login page view
 */
function LoginView({
  onLoginSubmit,
  errors,
  register,
  isLoading,
  isError,
  error,
}: ILoginView): ReactElement {
  const { t } = useTranslation();
  const errorMessage = useErrorMessage(error);
  return (
    <div className={styles.loginForm}>
      <a href={`${process.env.REACT_APP_API}/users`} target="_blank" rel="noreferrer">
        { t('login.useLoginAndPasswordFromThisJson') }
      </a>
      <form onSubmit={onLoginSubmit}>
        <TextInput
          name="username"
          label={t('login.userName')}
          register={register}
          errors={errors.username}
        />
        <TextInput
          name="password"
          label={t('login.password')}
          register={register}
          errors={errors.password}
          type={InputTypes.Password}
        />
        <input type="submit" disabled={isLoading || Object.keys(errors).length > 0} />
      </form>
      {isError ? <ErrorMessage message={errorMessage} /> : null}
    </div>
  );
}

export default LoginView;
