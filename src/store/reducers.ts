import { combineReducers } from 'redux';
import { users } from './users/reducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  users,
});

const initStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

const store = initStore();

export default store;

export type RootState = ReturnType<typeof store.getState>;
