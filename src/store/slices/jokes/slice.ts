import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import IJokes, { JokeStatuses } from './interfaces/IJokes';

const initialState: IJokes = {
  value: 0,
  status: JokeStatuses.idle,
  joke: undefined,
};

export const fetchJoke = createAsyncThunk(
  'jokes/fetchJoke',
  async (): Promise<IJokes['joke']> => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    return data.value;
  },
);

export const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<IJokes['value']>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.status = JokeStatuses.loading;
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.status = JokeStatuses.idle;
        state.joke = action.payload;
      })
      .addCase(fetchJoke.rejected, (state) => {
        state.status = JokeStatuses.failed;
      });
  },
});

export const { increment, decrement, incrementByAmount } = jokesSlice.actions;

export default jokesSlice.reducer;
