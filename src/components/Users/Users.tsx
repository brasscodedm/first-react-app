import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteUser,
	getUserDetails,
	getUsers,
	postUser,
	resetUsers,
} from '../../store/users/actions';
import { NewUser } from '../../interfaces/User';
import {
	selectIsLoadingUsers,
	selectIsRejectedUsers,
	selectUsers,
} from '../../store/users/selectors';

import styles from './Users.module.scss';

const Users: FunctionComponent = () => {
	const users = useSelector(selectUsers);
	const isLoading = useSelector(selectIsLoadingUsers);
	const isRejectedUsers = useSelector(selectIsRejectedUsers);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	if (isLoading) {
		return <div className={styles.center}>IS LOADING...</div>;
	}

	if (isRejectedUsers) {
		return <div className={styles.center}>IS REJECTED...</div>;
	}

	const onResetUsers = () => {
		dispatch(resetUsers());
	};

	const onGetUserDetails = (id: string) => {
		dispatch(getUserDetails(id));
	};

	const onDeleteUser = (id: string) => {
		dispatch(deleteUser(id));
	};

	const onAddUser = () => {
		const newUser: NewUser = {
			name: 'Dominik',
			email: 'asadasda3@asz.com',
			gender: 'male',
			status: 'active',
		};

		dispatch(postUser(newUser));
	};

	return (
		<>
			<div className={styles.listHeader}>
				<div>LP.</div>
				<div>NAME</div>
				<div>GENDER</div>
				<div>STATUS</div>
				<div>ACTION</div>
			</div>

			<div className={styles.listContent}>
				{users.map((user, key) => (
					<div key={key} className={styles.listElement}>
						<div>{key + 1}.</div>
						<div onClick={() => onGetUserDetails(user.id)}>{user.name}</div>
						<div>{user.gender.toUpperCase()}</div>
						<div>{user.status.toUpperCase()}</div>
						<div className={styles.removeUser} onClick={() => onDeleteUser(user.id)}>
							REMOVE
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Users;
