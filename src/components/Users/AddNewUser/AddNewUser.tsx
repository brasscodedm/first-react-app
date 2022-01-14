import React from 'react';
import styles from './AddNewUser.module.scss';
import { useNavigate } from 'react-router-dom';

export const AddNewUser = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.bgMark} onClick={() => navigate('/users')} />

      <div className={styles.wrapper}>
        <div className={styles.closeBtn} onClick={() => navigate(-1)}>
          BACK TO PREV ROUTE
        </div>
        <h2>Add new user form:</h2>
      </div>
    </>
  );
};
