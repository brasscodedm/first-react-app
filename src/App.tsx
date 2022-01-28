import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { Topbar } from 'components/Topbar/Topbar';
import { Outlet, useLocation } from 'react-router-dom';

const App = () => {
	const location = useLocation();

	useEffect(() => {
		console.log(location);
	}, [location]);

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
