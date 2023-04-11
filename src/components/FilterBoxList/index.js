import React, { useState } from 'react';
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
import { makeSelectHome } from '../../Pages/Home/selector';
import { makeSelectMaster } from '../../Pages/Master/selector';

export default function FilterBoxList() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const homeData = useSelector(makeSelectHome());
  const masterData = useSelector(makeSelectMaster());

  const products = homeData?.searchedProducts;

  const selectedBrands = homeData.selectedBrands;
  const selectedModels = homeData.selectedModels;
  const selectedSort = homeData.selectedSort;

  const searchText = masterData.searchText;

  const sortData = [
    'Old to new',
    'New to old',
    'Price high to low',
    'Price low to high',
  ];

  const getBrands = () => {
    return products
      .filter((item) =>
        item?.name.toLowerCase().includes(searchText?.toLowerCase()),
      )
      .map((x) => x.brand)
      .filter(onlyUnique)
      .sort();
  };

  const getModels = () => {
    return products
      .filter((item) =>
        item?.name.toLowerCase().includes(searchText?.toLowerCase()),
      )
      .filter((ns) => {
        if (selectedBrands.length === 0) return true;
        return selectedBrands?.includes(ns.brand);
      })
      .map((x) => x.model)
      .filter(onlyUnique)
      .sort();
  };

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
          <FilterBox
            title={'Sort by'}
            isSearchable={false}
            data={sortData}
            selected={selectedSort}
            type={'radio'}
            onSelect={(item) => dispatch(setSortFilter(item))}
          />
          <FilterBox
            onSelect={(item) => dispatch(setBrandsFilter(item))}
            selected={selectedBrands}
            title={'Brands'}
            data={getBrands()}
          />
          <FilterBox
            onSelect={(item) => dispatch(setModelsFilter(item))}
            selected={selectedModels}
            title={'Models'}
            data={getModels()}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
