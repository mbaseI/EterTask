import React, { useEffect, useState } from 'react';
import FilterBox from '../FilterBox';
import { List } from 'react-bootstrap-icons';
import { onlyUnique } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.scss';
import {
  setBrandsFilter,
  setModelsFilter,
  setSortFilter,
} from '../../Pages/Home/actions';
import { Button, Offcanvas } from 'react-bootstrap';

export default function FilterBoxList({ data }) {
  const dispatch = useDispatch();

  const [newData, setNewData] = useState({});
  const [show, setShow] = useState(false);

  const sortData = [
    'Old to new',
    'New to old',
    'Price hight to low',
    'Price low to high',
  ];

  const generateData = (data) => {
    let generatedData = {};
    data.forEach((item) => {
      if (
        // eslint-disable-next-line no-prototype-builtins
        generatedData.hasOwnProperty(item.brand) &&
        Array.isArray(generatedData[item.brand])
      ) {
        generatedData[item.brand].push(item.model);
        return;
      }
      generatedData[item.brand] = [item.model];
    });
    return generatedData;
  };

  const renderBrands = (data) => {
    const brands = Object.keys(data);
    return (
      <FilterBox
        onSelect={(item) => dispatch(setBrandsFilter(item))}
        title={'Brands'}
        data={brands}
      />
    );
  };

  const renderModels = (data, test) => {
    const models = Object.entries(data)
      .map((item) => {
        return item[1];
      })
      .flat()
      .filter(onlyUnique);

    return (
      <FilterBox
        onSelect={(item) => dispatch(setModelsFilter(item))}
        title={'Models'}
        data={models}
      />
    );
  };

  const renderSortBy = (data) => {
    return (
      <FilterBox
        title={'Sort by'}
        isSearchable={false}
        data={data}
        type={'radio'}
        onSelect={(item) => dispatch(setSortFilter(item))}
      />
    );
  };

  console.log(data);
  useEffect(() => {
    setNewData(generateData(data));
  }, [data]);

  return (
    <div>
      <div className={styles.canvasButton}>
        <Button
          variant="primary"
          className="d-md-none"
          onClick={() => setShow(true)}
        >
          <List /> Filter
        </Button>
      </div>
      <Offcanvas responsive="md" show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ flexDirection: 'column' }}>
          {renderSortBy(sortData)}
          {renderBrands(newData)}
          {renderModels(newData)}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
