export enum JokeStatuses {
  idle = 'idle',
  loading = 'loading',
  failed = 'failed',
}

export default interface JokesState {
  value: number;
  status: JokeStatuses;
  joke: string | undefined
}
