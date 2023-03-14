import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks/useApp';
import { selectJoke, selectStatus } from '../../store/slices/jokes/selectors';
import { fetchJoke } from '../../store/slices/jokes/slice';
import Loader from '../../components/Loader/Loader';
import Statuses from '../../constants/Statuses';

import titleStyles from '../../styles/title.module.scss';
import styles from './sass/HomeView.module.scss';

function HomeView(): JSX.Element {
  const status = useAppSelector(selectStatus);
  const joke = useAppSelector(selectJoke);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1 className={titleStyles.pageTitle}>{ t('home.pageTitle') }</h1>
      <div className={styles.content}>
        {status === Statuses.loading ? (
          <Loader />
        ) : (
          <button type="button" onClick={() => dispatch(fetchJoke())}>{ t('home.getJoke') }</button>
        )}
        {joke && <p>{ joke }</p>}
      </div>
    </div>
  );
}

export default HomeView;
