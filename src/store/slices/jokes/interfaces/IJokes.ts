import Statuses from '../../../../constants/Statuses';

export default interface JokesState {
  value: number;
  status: Statuses;
  joke: string | undefined
}
