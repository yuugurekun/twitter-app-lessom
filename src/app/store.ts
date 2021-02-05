import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import uerReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: uerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
