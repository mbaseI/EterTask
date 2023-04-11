import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ECard from '../../components/ECard';
import Layout from '../../components/Layout';
import { getProducts } from './actions';
import { makeSelectHome } from './selector';
import { Col, Row } from 'react-bootstrap';
import styles from './style.module.scss';
import Pagination from '../../components/Pagination';
import PBox from '../../components/PBox';
import FilterBoxList from '../../components/FilterBoxList';
import { makeSelectMaster } from '../Master/selector';
import CountBox from '../../components/CountBox';
import { toTimestamp } from '../../utils/utils';

function Home() {
  const dispatch = useDispatch();

  const homeData = useSelector(makeSelectHome());
  const masterData = useSelector(makeSelectMaster());

  const renderData = (data) => {
    let results = data?.filter((x) =>
      x.name
        .toLocaleLowerCase()
        .includes(masterData?.searchText.toLocaleLowerCase()),
    );
    results = results.filter(
      (item) =>
        homeData?.selectedBrands.some((x) => x === item.brand) ||
        homeData.selectedBrands.length === 0,
    );
    results = results.filter(
      (item) =>
        homeData?.selectedModels.some((x) => x === item.model) ||
        homeData.selectedModels.length === 0,
    );

    switch (homeData?.selectedSort) {
      case 'Old to new':
        return results.sort(
          (a, b) => toTimestamp(a.createdAt) - toTimestamp(b.createdAt),
        );
      case 'New to old':
        return results.sort(
          (a, b) => toTimestamp(b.createdAt) - toTimestamp(a.createdAt),
        );
      case 'Price hight to low':
        return results.sort((a, b) => a.price - b.price);
      case 'Price low to high':
        return results.sort((a, b) => b.price - a.price);
      default:
        return results;
    }
  };

  const searchedProducts = renderData(homeData?.searchedProducts);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  let pageSize = 12;
  let pageLimit = parseInt(searchedProducts.length / pageSize);
  if (searchedProducts % pageSize !== 0) {
    pageLimit++;
  }
  const renderPagination = (data) => {
    let skip = (currentPage - 1) * pageSize;
    return data?.slice(skip, skip + 12);
  };

  const previous = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const next = () => {
    if (currentPage < pageLimit) {
      setCurrentPage(currentPage + 1);
    }
  };
  // Pagination

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Row>
          <Col xxl={2} xl={2} md={3}>
            <FilterBoxList data={homeData?.searchedProducts} />
          </Col>
          <Col xxl={8} xl={8} md={6}>
            <Row>
              {renderPagination(searchedProducts).map((item) => {
                return (
                  <Col key={item.id} xxl={3} xl={4} md={12}>
                    <ECard {...item} />
                  </Col>
                );
              })}
              {searchedProducts?.length !== 0 ? (
                <div className={styles.paginationWrapper}>
                  {currentPage !== 1 && (
                    <button className={styles.previous} onClick={previous}>
                      &#171;
                    </button>
                  )}
                  {Array(pageLimit)
                    .fill()
                    .map((item, index) => (
                      <Pagination
                        key={index}
                        onClick={(x) => {
                          setCurrentPage(x);
                        }}
                        index={index + 1}
                        currentPage={currentPage}
                      />
                    ))}
                  {pageLimit !== currentPage && (
                    <button className={styles.next} onClick={next}>
                      &#187;
                    </button>
                  )}
                </div>
              ) : (
                <div>Aradığınız ürün bulunamadı</div>
              )}
            </Row>
          </Col>
          <Col xxl={2} xl={2} md={3}>
            <PBox />
            <CountBox />
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Home;
