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
}) {
  const [searchText, setSearchText] = useState('');

  console.log(data);

  const searchedData = () => {
    return data.filter((item) =>
      item.toLowerCase().includes(searchText?.toLowerCase()),
    );
  };

  return (
    <WBox headText={title}>
      <div className={styles.filterBox}>
        <Form>
          {isSearchable && (
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className={styles.searchInput}
              placeholder="Search"
            />
          )}

          {searchedData()?.map((item) => {
            return (
              <div className={styles.item} key={item}>
                <input
                  value={item}
                  name={type === 'radio' ? 'select' : item}
                  onClick={() => onSelect(item)}
                  type={type}
                  className="form-check-input"
                  id={item}
                />
                <label className={styles.label} id={item}>
                  {item}
                </label>
              </div>
            );
          })}
        </Form>
      </div>
    </WBox>
  );
}
