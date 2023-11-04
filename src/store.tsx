import { configureStore } from '@reduxjs/toolkit';
import authSlice from './services/redux/authSlice';

import { usersApi } from './services/redux/api';

const loadInitialStateFromLocalStorage = () => {
  try {
    const serializedState = window.localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const preloadedState = loadInitialStateFromLocalStorage();

const store = configureStore({
  reducer: {
    user: authSlice,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('state', serializedState);
  } catch (err) {}
});

export default store;
