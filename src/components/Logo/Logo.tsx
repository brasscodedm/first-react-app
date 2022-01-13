import React from 'react';
import logo from 'assets/brass-transparent.png';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

export const Logo = () => {
	return (
		<Link to={'/'}>
			<div className={styles.logo}>
				<img src={logo} alt={'Brasscode'} />
			</div>
		</Link>
	);
};
