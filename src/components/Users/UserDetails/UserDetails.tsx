import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { getUserDetails } from 'store/users/actions';
import { useDispatch } from 'react-redux';

export const UserDetails = () => {
	const { userId } = useParams();
	const dispatch = useDispatch();

	const onGetUserDetails = (id: string) => {
		dispatch(getUserDetails(id));
	};

	useEffect(() => {
		userId && onGetUserDetails(userId);
	}, [userId, dispatch]);

	return <div>It is a page for user {userId}</div>;
};
