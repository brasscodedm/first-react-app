import React from 'react';
import styles from './App.module.scss';
import Users from './components/Users/Users';
import { Topbar } from './components/Topbar/Topbar';

const App = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<Topbar />
				<Users />
			</div>
		</div>
	);
};

export default App;
