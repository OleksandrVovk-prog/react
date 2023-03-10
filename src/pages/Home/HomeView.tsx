import { useAppSelector, useAppDispatch } from '../../store/hooks/useApp';
import { selectJoke, selectStatus, selectValue } from '../../store/slices/jokes/selectors';
import { increment, fetchJoke, incrementByAmount } from '../../store/slices/jokes/slice';

function HomeView(): JSX.Element {
  const value = useAppSelector(selectValue);
  const status = useAppSelector(selectStatus);
  const joke = useAppSelector(selectJoke);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={() => dispatch(increment())}>Increment</button>
      <button type="button" onClick={() => dispatch(incrementByAmount(10))}>Increment 10</button>
      <button type="button" onClick={() => dispatch(fetchJoke())}>getJoke</button>
      { value }
      { status }
      { joke }
    </div>
  );
}

export default HomeView;
