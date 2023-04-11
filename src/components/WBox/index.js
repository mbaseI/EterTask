import React from 'react';
import styles from './style.module.scss';

// eslint-disable-next-line react/prop-types
export default function WBox({ children, headText }) {
  return (
    <>
      <div className={styles.headText}>{headText}</div>
      <div className={styles.wBox}>{children}</div>
    </>
  );
}
