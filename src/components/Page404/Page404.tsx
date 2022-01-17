import React from 'react';
import styles from './Page404.module.scss';

export const Page404 = () => (
	<div className={styles.wrapper}>
		<div className={styles.bigText}>404</div>
		<div className={styles.smallText}>
			We are sorry but the page your were looking for was not found...
		</div>
	</div>
);
