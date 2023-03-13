import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks/useApp';
import { selectJoke, selectStatus, selectValue } from '../../store/slices/jokes/selectors';
import { increment, fetchJoke, incrementByAmount } from '../../store/slices/jokes/slice';
import { toggleLocale } from '../../store/slices/translates/slice';
import { selectLocale } from '../../store/slices/translates/selectors';

function HomeView(): JSX.Element {
  const value = useAppSelector(selectValue);
  const status = useAppSelector(selectStatus);
  const joke = useAppSelector(selectJoke);
  const locale = useAppSelector(selectLocale);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>asd</p>
      <h1>{ t('home.pageTitle') }</h1>
      <button type="button" onClick={() => dispatch(increment())}>Increment</button>
      <button type="button" onClick={() => dispatch(incrementByAmount(10))}>Increment 10</button>
      <button type="button" onClick={() => dispatch(fetchJoke())}>getJoke</button>
      <button type="button" onClick={() => dispatch(toggleLocale())}>{ locale.toUpperCase() }</button>
      <p>{ value }</p>
      <p>{ status }</p>
      <p>{ joke }</p>
    </div>
  );
}

export default HomeView;
