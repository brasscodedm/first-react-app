import React from 'react';
import styles from './Navigation.module.scss';

export const Navigation = () => {
	return (
		<nav>
			<a className={styles.link} href="/html/">
				Users List
			</a>
			<a className={styles.link} href="/css/">
				Add user
			</a>
			<a className={styles.link} href="/js/">
				Contact
			</a>
		</nav>
	);
};
