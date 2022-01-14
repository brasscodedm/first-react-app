import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <Link className={styles.link} to={'/users'}>
        Users list
      </Link>
      <Link className={styles.link} to={'/users/new'}>
        Add new user
      </Link>
      <Link className={styles.link} to={'/contact'}>
        Contact
      </Link>
    </nav>
  );
};
