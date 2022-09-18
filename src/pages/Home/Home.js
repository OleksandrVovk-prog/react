import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HomeView from './HomeView';

function Home() {
  const { t } = useTranslation();
  const [rndJoke, setRndJoke] = useState('');

  const getJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random').then((res) => {
      if (res.ok) {
        res.json().then((joke) => {
          setRndJoke(joke.value);
        });
      }
    }).catch(() => {});
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <HomeView
      information={rndJoke}
      getJoke={getJoke}
      title={t('homePage')}
      buttonTitle={t('newJoke')}
    />
  );
}

export default Home;
