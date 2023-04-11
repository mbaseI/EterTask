import React, { useState } from 'react';
import WBox from '../WBox';
import styles from './style.module.scss';
import { Form } from 'react-bootstrap';

export default function FilterBox({
  data,
  test,
  title,
  isSearchable = true,
  type = 'checkbox',
  onSelect,
  selected,
}) {
  const [searchText, setSearchText] = useState('');

  const searchedData = () => {
    return data?.filter((item) =>
      item?.toLowerCase().includes(searchText?.toLowerCase()),
    );
  };

  return (
    <WBox headText={title}>
      <div className={styles.filterBox}>
        <Form>
          <div className={styles.flex}>
            {isSearchable && (
              <input
                onChange={(e) => setSearchText(e.target.value)}
                className={styles.searchInput}
                placeholder="Search"
              />
            )}
          </div>
          <div className={styles.itemWrapper}>
            {searchedData()?.map((item) => {
              return (
                <div className={styles.item} key={item}>
                  <input
                    defaultChecked={selected?.includes(item)}
                    defaultValue={selected?.includes(item)}
                    name={type === 'radio' ? 'select' : item}
                    onClick={() => onSelect(item)}
                    type={type}
                    className={`form-check-input ${styles.selectInput}`}
                    id={item}
                  />
                  <label htmlFor={item} className={styles.label} id={item}>
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        </Form>
      </div>
    </WBox>
  );
}
