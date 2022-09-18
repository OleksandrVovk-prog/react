import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Title from '../../components/Title/Title';
import { Context as PageContext } from '../../context/layout/Page';
import styles from './sass/Header.module.scss';

export default function Header() {
  const { i18n, t } = useTranslation();

  return (
    <PageContext.Consumer>
      {(config) => (
        <header className={styles.appHeader}>
          <Title text={t('welcome')} />
          <Link to="/" className={styles.headerLink}>
            {t('home')}
          </Link>
          <Link to="/about" className={styles.headerLink}>
            {t('about')}
          </Link>
          <Link to="/lazy" className={styles.headerLink}>
            {t('lazy')}
          </Link>
          <Link to="/memo" className={styles.headerLink}>
            {t('memo')}
          </Link>
          <Link to="/context" className={styles.headerLink}>
            {t('context')}
          </Link>
          <button
            className={styles.toggleLanguage}
            type="button"
            onClick={config.changeLanguage}
            data-testid="toggle-language-button"
          >
            {i18n.language}
          </button>
        </header>
      )}
    </PageContext.Consumer>
  );
}
