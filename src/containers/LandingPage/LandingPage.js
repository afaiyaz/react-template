import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.css';

export default () => (
  <>
    <div className={styles.header}>Welcome to React Template</div>
    <Link to="/pageB">PageB</Link>
    <div className={styles.welcome}>
      <img src="/public/welcome.png" alt="welcome" />
    </div>
  </>
);
