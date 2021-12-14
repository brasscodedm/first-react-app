import React, {FunctionComponent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getUserDetails, getUsers, postUser, resetUsers} from "../../store/users/actions";
import {NewUser} from "../../interfaces/User";
import {selectIsLoadingUsers, selectIsRejectedUsers, selectUsers} from "../../store/users/selectors";

const Users: FunctionComponent = () => {
	const users = useSelector(selectUsers);
	const isLoading = useSelector(selectIsLoadingUsers);
	const isRejectedUsers = useSelector(selectIsRejectedUsers);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch])


	if (isLoading) {
		return <div>IS LOADING...</div>
	}

	if (isRejectedUsers) {
		return <div>IS REJECTED...</div>
	}

	const onResetUsers = () => {
		dispatch(resetUsers());
	}

	const onGetUserDetails = (id: string) =>  {
		dispatch(getUserDetails(id));
	}

	const onDeleteUser = (id: string) => {
		dispatch(deleteUser(id));
	}

	const onAddUser = () => {
		const newUser: NewUser = {
			name: 'Dominik',
			email: 'asadasda3@asz.com',
			gender: 'male',
			status: 'active'
		}

		dispatch(postUser(newUser))
	}

	return (
		<div>
			<button onClick={onResetUsers}>RESET USERS</button>
			<button onClick={onAddUser}>ADD NEW USER</button>

			{users.map((user, key) => (
				<div
					onClick={() => onGetUserDetails(user.id)}
					key={key}
				>
					Id: {user.id}, Name: {user.name}
					<span style={{color: "red", marginLeft: '5px' }} onClick={() => onDeleteUser(user.id)}>
						USUN
					</span>
				</div>
			))}
		</div>
	)
}

export default Users
