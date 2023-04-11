import React from 'react';
import WBox from '../WBox';
import styles from './style.module.scss';
import EButton from '../EButton';
import { useSelector } from 'react-redux';
import { makeSelectMaster } from '../../Pages/Master/selector';
export default function PBox() {
  const masterData = useSelector(makeSelectMaster());

  return (
    <WBox headText={'Checkout'}>
      <div className={styles.priceBox}>
        <div className={styles.flex}>
          <span>
            Total Price:
            <span
              className={styles.price}
            >{`${masterData?.basketPrice}₺`}</span>
          </span>
        </div>
        <EButton text={'Checkout'} />
      </div>
    </WBox>
  );
}
