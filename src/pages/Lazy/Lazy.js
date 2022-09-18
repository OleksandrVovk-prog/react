import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LazyView from './LazyView';

function Lazy() {
  const { t } = useTranslation();
  const [information, setInformation] = useState({});
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const getFilm = () => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=3db238d1&t=${search}`).then((res) => {
      if (res.ok) {
        res.json().then((film) => {
          setInformation(film);
          setLoading(false);
        });
      }
    }).catch(() => setLoading(false));
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <LazyView
      information={information}
      getFilm={getFilm}
      title={t('lazyPage')}
      buttonTitle={t('search')}
      loading={loading}
      search={search}
      handleSearch={handleSearch}
    />
  );
}

export default Lazy;
