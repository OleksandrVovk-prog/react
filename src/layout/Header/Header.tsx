import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks/useApp';
import { toggleLocale } from '../../store/slices/translates/slice';
import { selectLocale } from '../../store/slices/translates/selectors';
import Title from '../../components/Title/Title';
import { selectUserId } from '../../store/slices/auth/selectors';
import authApi, { useFetchUserQuery } from '../../store/slices/auth/apis/auth';

import styles from './sass/Header.module.scss';

function Header(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const id = useAppSelector(selectUserId);
  const locale = useAppSelector(selectLocale);
  const { data } = useFetchUserQuery(id, { skip: !id });
  return (
    <header className={styles.header}>
      <Title text={t('common.welcomeMessage')} />
      <nav className={styles.headerNav}>
        <Link to="/" className={styles.headerNavLink}>
          { t('home.pageTitle') }
        </Link>
        <Link to="/about" className={styles.headerNavLink}>
          { t('about.pageTitle') }
        </Link>
      </nav>
      <div className={styles.toggleLanguage}>
        {data?.id ? (
          <Link
            to="/login"
            onClick={() => {
              dispatch(authApi.util.resetApiState());
            }}
            className={styles.headerNavLink}
          >
            { `${t('login.logout')}(${data.firstName})` }
          </Link>
        ) : (
          <Link
            to="/login"
            className={styles.headerNavLink}
          >
            { t('login.pageTitle') }
          </Link>
        )}
        <button
          data-testid="toggle-language-button"
          type="button"
          onClick={() => dispatch(toggleLocale())}
        >
          {locale.toUpperCase()}
        </button>
      </div>
    </header>
  );
}

export default Header;
