import React from 'react';
import styles from './Topbar.module.scss';
import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from 'components/Logo/Logo';

export const Topbar = () => {
	return (
		<div className={styles.root}>
			<Logo />
			<Navigation />
		</div>
	);
};
