import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import TextInput from './components/TextInput';

import ILoginForm from './interfaces/ILoginForm';

import styles from './sass/LoginView.module.scss';

function LoginView(): JSX.Element {
  const {
    register, handleSubmit,
  } = useForm<ILoginForm>();
  const onSubmit = handleSubmit(() => {});
  const { t } = useTranslation();
  return (
    <div className={styles.loginForm}>
      <a href={`${process.env.REACT_APP_API}/users`} target="_blank" rel="noreferrer">
        { t('login.useLoginAndPasswordFromThisJson') }
      </a>
      <form onSubmit={onSubmit}>
        <TextInput name="username" label={t('login.userName')} register={register} />
        <TextInput name="password" label={t('login.password')} register={register} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginView;
