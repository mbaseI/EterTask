import React from 'react';
import WBox from '../WBox';
import styles from './style.module.scss';
import EButton from '../EButton';
import { useSelector } from 'react-redux';
import { makeSelectBasketPrice } from '../../Pages/Master/selector';
export default function PBox() {
  const basketPrice = useSelector(makeSelectBasketPrice);
  return (
    <WBox headText={'Checkout'}>
      <div className={styles.priceBox}>
        <div className={styles.flex}>
          <span>
            Total Price:
            <span className={styles.price}>{`${basketPrice}₺`}</span>
          </span>
        </div>
        <EButton text={'Checkout'} />
      </div>
    </WBox>
  );
}
