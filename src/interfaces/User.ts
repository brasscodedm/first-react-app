type Gender = 'male' | 'female'

export interface User {
	id: string,
	name: string,
	email: string,
	gender: Gender,
	status: string
}

export interface NewUser {
	name: string,
	email: string,
	gender: Gender,
	status: string
}
