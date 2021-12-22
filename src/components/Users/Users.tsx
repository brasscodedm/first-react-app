import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, getUsers } from '../../store/users/actions';
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
		return <div>IS LOADING...</div>;
	}

	if (isRejectedUsers) {
		return <div>IS REJECTED...</div>;
	}

	const onGetUserDetails = (id: string) => {
		dispatch(getUserDetails(id));
	};

	const onDeleteUser = (id: string) => {
		dispatch(id);
	};

	return (
		<>
			<div className={styles.listHeader}>
				<div>LP.</div>
				<div>Name</div>
				<div>Gender</div>
				<div>Status</div>
				<div>Action</div>
			</div>
			<div className={styles.listContent}>
				{users.map((user, key) => (
					<div key={key} className={styles.listElement}>
						<div>{key + 1}</div>
						<div onClick={() => onGetUserDetails(user.id)}>Name: {user.name}</div>
						<div>{user.gender}</div>
						<div>{user.status}</div>
						<div>
							<div className={styles.removeUser} onClick={() => onDeleteUser(user.id)}>
								Remove
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Users;
