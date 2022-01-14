import { RootState } from 'store/reducers';
import { User } from 'interfaces/User';

export const selectUsers = (state: RootState): User[] => state.users.users;

export const selectIsLoadingUsers = (state: RootState): boolean => state.users.status === 'PENDING';

export const selectIsRejectedUsers = (state: RootState): boolean =>
  state.users.status === 'REJECTED';

export const selectIsIdleUsers = (state: RootState): boolean => state.users.status === 'IDLE';
