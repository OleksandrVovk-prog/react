import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import styles from './sass/Lazy.module.scss';

const Film = lazy(() => import('../../components/Film/Film'));

export default function LazyView({
  information, getFilm, title, buttonTitle, loading, search, handleSearch
}) {
  return (
    <div>
      <p className={styles.appIntro}>{title}</p>
      <Suspense fallback={<p>Loading component...</p>}>
        {
          loading
            ? <p>Loading...</p>
            : information.Title && <Film film={information} />
        }
      </Suspense>
      <input type="text" value={search} onChange={handleSearch} data-testid="input-search" />
      <Button
        title={buttonTitle}
        buttonClass={styles.updateFilm}
        handleClick={getFilm}
        id="update-film-button"
      />
    </div>
  );
}

LazyView.propTypes = {
  information: PropTypes.shape({
    Title: PropTypes.string
  }),
  getFilm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

LazyView.defaultProps = {
  information: {}
};
