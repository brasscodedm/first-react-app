import React from 'react';
import styles from './Topbar.module.scss';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';

export const Topbar = () => {
	return (
		<div className={styles.root}>
			<Logo />
			<Navigation />
		</div>
	);
};
