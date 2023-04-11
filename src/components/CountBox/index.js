import React from 'react';
import WBox from '../WBox';
import styles from './style.module.scss';

export default function CountBox({ data }) {
  function calculate() {
    const nameCounts = new Map();
    const totalPrices = new Map();

    data.forEach((item) => {
      const name = item.name;
      const price = parseFloat(item.price);

      nameCounts.set(name, (nameCounts.get(name) || 0) + 1);

      if (!totalPrices.has(name)) {
        totalPrices.set(name, price);
      } else {
        totalPrices.set(name, totalPrices.get(name) + price);
      }
    });

    const result = [];
    nameCounts.forEach((count, name) => {
      const price = totalPrices.get(name);
      result.push({ name, count, price });
    });

    return result;
  }

  const usableData = calculate();

  return (
    <WBox headText={'Cart'}>
      {usableData.length > 0 ? (
        usableData.map((item) => {
          return (
            <div key={item.name} className={styles.item}>
              <div className={styles.information}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.price}>{item.price}₺</div>
              </div>
              <div className={styles.counter}>
                <div className={styles.decrease}>-</div>
                <div className={styles.count}>{item.count}</div>
                <div className={styles.increase}>+</div>
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
