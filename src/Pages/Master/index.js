import React from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.scss';
import { makeSelectMaster } from './selector';
import { ReactComponent as Logo } from '../../assets/elogo.svg';

export default function Master({ children }) {
  const masterData = useSelector(makeSelectMaster());

  return (
    <div style={{ position: 'relative' }}>
      <div>{children}</div>
      {masterData.loaderStatus && (
        <div className={styles.loader}>
          <div className={styles.loaderContent}>
            <div>
              <Logo />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
