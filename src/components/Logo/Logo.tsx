import React from 'react';
import logo from 'assets/brass-transparent.png';
import styles from './Logo.module.scss';

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<img src={logo} alt="logo" />
		</div>
	);
};
