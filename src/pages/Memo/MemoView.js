import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import MemoComponent from './components/MemoComponent';
import Button from '../../components/Button/Button';
import styles from './sass/Memo.module.scss';

export default function MemoView({
  title, production, poster, handleClick, clickCounter, changeTitle
}) {
  const { t } = useTranslation();
  return (
    <div className={styles.memo}>
      <MemoComponent
        title={title}
        production={production}
        poster={poster}
      />
      <div className={styles.events}>
        <p className={styles.update}>
          {t('likes')}
          &nbsp;
          {clickCounter}
        </p>
        <Button
          title={t('like')}
          buttonClass={`${styles.update} ${styles.updateBtn}`}
          handleClick={handleClick}
          id="click-handler-button"
        />
        <input
          type="text"
          className={styles.update}
          value={title}
          onChange={changeTitle}
          data-testid="change-title-input"
        />
      </div>
    </div>
  );
}

MemoView.propTypes = {
  title: PropTypes.string.isRequired,
  production: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  clickCounter: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
};
