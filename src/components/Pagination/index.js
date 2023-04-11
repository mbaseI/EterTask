import React from 'react';
import styles from './style.module.scss';

export default function Pagination({ onClick, index, currentPage }) {
  return (
    <div className={styles.Pagination}>
      <button
        className={index === currentPage ? styles.isActive : styles.a}
        onClick={() => {
          onClick(index);
        }}
      >
        {index}
      </button>
    </div>
  );
}
