import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers, resetUsers } from 'store/users/actions';

import styles from './Users.module.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import {
	selectIsIdleUsers,
	selectIsLoadingUsers,
	selectIsRejectedUsers,
	selectUsers,
} from 'store/users/selectors';

const Users: FunctionComponent = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const users = useSelector(selectUsers);
	const isLoading = useSelector(selectIsLoadingUsers);
	const isRejectedUsers = useSelector(selectIsRejectedUsers);
	const isIdleUsers = useSelector(selectIsIdleUsers);

	useEffect(() => {
		dispatch(getUsers());

		return () => {
			dispatch(resetUsers());
		};
	}, [dispatch]);

	if (isLoading) {
		return (
			<>
				<Outlet />
				<div className={styles.statusInfo}>IS LOADING...</div>
			</>
		);
	}

	if (isRejectedUsers) {
		return <div className={styles.statusInfo}>IS REJECTED...</div>;
	}

	if (isIdleUsers) {
		return <></>;
	}

	const onDeleteUser = (id: string) => {
		dispatch(deleteUser(id));
	};

	return (
		<>
			<Outlet />
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
						<div
							className={styles.userName}
							onClick={() => {
								navigate(`${user.id}`);
							}}
						>
							Name: {user.name}
						</div>
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
