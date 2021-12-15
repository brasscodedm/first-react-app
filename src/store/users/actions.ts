import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteUserRequest,
  getUserDetailsRequest,
  getUsersRequest,
  postUserRequest,
} from '../../api/users';
import { NewUser } from '../../interfaces/User';

export const getUsers = createAsyncThunk('users/getUsers', () => getUsersRequest());

export const postUser = createAsyncThunk('users/postUser', (newUser: NewUser) =>
  postUserRequest(newUser)
);

export const getUserDetails = createAsyncThunk('users/getUserDetails', (id: string) =>
  getUserDetailsRequest(id)
);

export const deleteUser = createAsyncThunk('users/getUserDetails', (id: string) =>
  deleteUserRequest(id)
);

export const resetUsers = createAction('starWars/resetUsers');
