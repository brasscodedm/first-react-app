import React from 'react';
import styles from './AddNewUser.module.scss';
import { useNavigate } from 'react-router-dom';

export const AddNewUser = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className={styles.bgMark} onClick={() => navigate('/users')} />
			<div className={styles.wrapper}>Add new user form!</div>
		</>
	);
};
