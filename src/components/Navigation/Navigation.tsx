import React from 'react';
import styles from './Navigation.module.scss';

export const Navigation = () => {
	return (
		<nav>
			<a className={styles.link} href={'/users'}>
				Users list
			</a>
			<a className={styles.link} href={'/new-user'}>
				Add new user
			</a>
			<a className={styles.link} href={'/contact'}>
				Contact
			</a>
		</nav>
	);
};
