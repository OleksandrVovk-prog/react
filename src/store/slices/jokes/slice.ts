import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import Statuses from '../../../constants/Statuses';
import IJokes from './interfaces/IJokes';
import IJokeResponse from './interfaces/IJokeResponse';

const initialState: IJokes = {
  value: 0,
  status: Statuses.idle,
  joke: undefined,
};

export const fetchJoke = createAsyncThunk(
  'jokes/fetchJoke',
  async (): Promise<IJokes['joke']> => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data: IJokeResponse = await response.json();
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
        state.status = Statuses.loading;
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.status = Statuses.idle;
        state.joke = action.payload;
      })
      .addCase(fetchJoke.rejected, (state) => {
        state.status = Statuses.failed;
      });
  },
});

export const { increment, decrement, incrementByAmount } = jokesSlice.actions;

export default jokesSlice.reducer;
