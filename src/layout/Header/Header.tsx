import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks/useApp';
import { toggleLocale } from '../../store/slices/translates/slice';
import { selectLocale } from '../../store/slices/translates/selectors';
import { selectUserId, selectCurrentUser } from '../../store/slices/auth/selectors';
import { logout } from '../../store/slices/auth/slice';
import Title from '../../components/Title/Title';
import { useFetchUserQuery } from '../../store/slices/auth/apis/dummyAuth';
import dummyAuth from '../../store/apis/dummy';

import styles from './sass/Header.module.scss';
import LinkButton from '../../components/LinkButton/LinkButton';
import Loader from '../../components/Loader/Loader';

function Header(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const id = useAppSelector(selectUserId);
  const locale = useAppSelector(selectLocale);
  const { data, isFetching } = useFetchUserQuery(id, {
    skip: !id,
    selectFromResult: (result) => ({ ...result, data: selectCurrentUser(result.data, id) }),
  });
  const onLogout = () => {
    dispatch(dummyAuth.util.resetApiState());
    dispatch(logout());
  };
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
        {isFetching ? (
          <Loader />
        ) : (
          <span>
            {data?.id ? (
              <LinkButton to="/login" onClick={onLogout} title={`${t('login.logout')}(${data.firstName})`} />
            ) : (
              <LinkButton to="/login" title={t('login.pageTitle')} />
            )}
          </span>
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
