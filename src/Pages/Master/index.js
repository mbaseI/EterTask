import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.scss';
import { makeSelectMaster } from './selector';
import { ReactComponent as Logo } from '../../assets/elogo.svg';
import { setBasketPrice } from './actions';

export default function Master({ children }) {
  const masterData = useSelector(makeSelectMaster());
  const dispatch = useDispatch();

  const basketPrice = masterData.basket.reduce((accumulator, obj) => {
    return accumulator + parseFloat(obj.price);
  }, 0);

  useEffect(() => {
    dispatch(setBasketPrice(basketPrice));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [masterData.basket]);

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
