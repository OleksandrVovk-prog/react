import { createSelector } from '@reduxjs/toolkit';

import IJoke from './interfaces/IJokes';
import type { RootState } from '../../types/TStore';

const selectJokes = (state: RootState): IJoke => state.jokes;
export const selectStatus = createSelector(selectJokes, (jokes) => jokes.status);

export const selectJoke = createSelector(selectJokes, (jokes) => jokes.joke);
