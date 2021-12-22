import { Logo } from '../Logo/Logo';
import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import styles from './Topbar.module.scss';

export const Topbar = () => {
	return (
		<div className={styles.root}>
			<Logo />
			<Navigation />
		</div>
	);
};
