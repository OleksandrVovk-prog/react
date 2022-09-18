import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from '../sass/MemoComponent.module.scss';

function MemoComponent({
  title, production, poster
}) {
  const { t } = useTranslation();
  return (
    <div className={styles.info}>
      <p className={styles.appIntro}>
        {t('title')}
        &nbsp;
        {title}
      </p>
      <p className={styles.appIntro}>
        {t('production')}
        &nbsp;
        {production}
      </p>
      <img
        className={styles.appBanner}
        src={poster}
        alt={title}
      />
    </div>
  );
}

export default React.memo(
  MemoComponent
);

MemoComponent.propTypes = {
  title: PropTypes.string.isRequired,
  production: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
