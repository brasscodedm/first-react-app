import {RootState} from "../reducers";

export const selectUsers = (state: RootState) => state.users.users

export const selectIsLoadingUsers = (state: RootState) => state.users.status === 'PENDING'

export const selectIsRejectedUsers = (state: RootState) => state.users.status === 'REJECTED'
