import React from 'react';
import styles from './App.module.scss';
import Users from './components/Users/Users';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>My first React/Redux App</h1>
        <Users />
      </header>
    </div>
  );
}

export default App;
