import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import TextInput from './components/TextInput';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useLoginMutation } from '../../store/slices/auth/apis/dummyAuth';
import useErrorMessage from '../../hooks/useErrorMessage';
import { loginSchema } from '../../utils/validators';
import InputTypes from '../../constants/InputTypes';

import ILoginForm from './interfaces/ILoginForm';

import styles from './sass/LoginView.module.scss';

function LoginView(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const errorMessage = useErrorMessage(error);
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = handleSubmit((credentials): void => {
    login(credentials);
    reset();
    navigate('/');
  });
  return (
    <div className={styles.loginForm}>
      <a href={`${process.env.REACT_APP_API}/users`} target="_blank" rel="noreferrer">
        { t('login.useLoginAndPasswordFromThisJson') }
      </a>
      <form onSubmit={onSubmit}>
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
      {isError && <ErrorMessage message={errorMessage} />}
    </div>
  );
}

export default LoginView;
