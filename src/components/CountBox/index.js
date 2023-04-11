import React from 'react';
import WBox from '../WBox';
import styles from './style.module.scss';
import { makeSelectMaster } from '../../Pages/Master/selector';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItem, increaseItem } from '../../Pages/Master/actions';

export default function CountBox() {
  const masterData = useSelector(makeSelectMaster());
  const dispatch = useDispatch();

  return (
    <WBox headText={'Cart'}>
      {masterData.basket?.length > 0 ? (
        masterData.basket?.map((item) => {
          return (
            <div key={item.name} className={styles.item}>
              <div className={styles.information}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.price}>{item.price * item.count}₺</div>
              </div>
              <div className={styles.counter}>
                <div
                  onClick={() => dispatch(decreaseItem(item.id))}
                  className={styles.decrease}
                >
                  -
                </div>
                <div className={styles.count}>{item.count}</div>
                <div
                  onClick={() => dispatch(increaseItem(item.id))}
                  className={styles.increase}
                >
                  +
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>Sepetinizde ürün bulunmuyor </div>
      )}
    </WBox>
  );
}
