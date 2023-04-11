import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './style.module.scss';
export default function EButton({ text, onClick }) {
  return (
    <Button onClick={onClick} className={styles.button} variant="primary">
      {text}
    </Button>
  );
}
