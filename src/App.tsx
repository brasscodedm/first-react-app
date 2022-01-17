import React from 'react';
import styles from './App.module.scss';
import { Topbar } from 'components/Topbar/Topbar';
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<Topbar />
				<Outlet />
			</div>
		</div>
	);
};

export default App;
