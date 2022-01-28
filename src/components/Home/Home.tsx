import React from 'react';
import styles from './Home.module.scss';
import logo from 'assets/brass-transparent.png';

export const Home = () => (
	<div className={styles.root}>
		<h1 className={styles.header}>Hello developer!</h1>
		<div className={styles.content}>
			<p>
				Welcome on your <strong>First React App</strong>. Here you can learn the basic principles of
				using React and Redux, as well as some useful tools.
			</p>
			<p>If you need contact with me or get the repository go to the contact page.</p>
			<p>Have fun!</p>

			<img className={styles.logo} src={logo} alt={'Brasscode'} />
		</div>
	</div>
);
