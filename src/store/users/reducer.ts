import { createReducer } from '@reduxjs/toolkit';
import { User } from 'interfaces/User';
import { ActionStatus } from 'interfaces/ActionStatus';
import { getUsers, resetUsers } from 'store/users/actions';

interface InitState {
  users: User[];
  status: ActionStatus;
}

const initState: InitState = {
  users: [],
  status: 'IDLE',
};

export const users = createReducer(initState, builder =>
  builder
    .addCase(getUsers.fulfilled, (state, { payload }) => {
      state.users = payload.data.data;
    })
    .addCase(resetUsers, state => {
      state.users = initState.users;
      state.status = initState.status;
    })
    .addMatcher(
      action => action.type.endsWith('/pending'),
      state => {
        state.status = 'PENDING';
      }
    )
    .addMatcher(
      action => action.type.endsWith('/rejected'),
      state => {
        state.status = 'REJECTED';
      }
    )
    .addMatcher(
      action => action.type.endsWith('/fulfilled'),
      state => {
        state.status = 'FULFILLED';
      }
    )
    .addDefaultCase(state => {
      state.status = 'IDLE';
    })
);
