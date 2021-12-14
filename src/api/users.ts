import Axios from '../utils/axios'
import {ListResponse} from "../interfaces/ListResponse";
import {NewUser, User} from "../interfaces/User";
import {SingleResponse} from "../interfaces/SingleResponse";

export const getUsersRequest = (): Promise<ListResponse<User>> =>
	Axios.get(`users`)

export const postUserRequest = (newUser: NewUser) =>
	Axios.post(`users`, newUser )

export const getUserDetailsRequest = (id: string): Promise<SingleResponse<User>> =>
	Axios.get(`users/${id}`)

export const deleteUserRequest = (id: string): Promise<unknown> =>
	Axios.delete(`users/${id}`)
