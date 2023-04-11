import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { Col, Image, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from './actions';
import { useParams } from 'react-router-dom';
import { makeSelectDetail } from './selector';
import EButton from '../../components/EButton';
import PBox from '../../components/PBox';
import CountBox from '../../components/CountBox';
import { setBasket } from '../Master/actions';
import { makeSelectMaster } from '../Master/selector';

export default function Detail() {
  const dispatch = useDispatch();

  const detailData = useSelector(makeSelectDetail());
  const masterData = useSelector(makeSelectMaster());
  const productDetail = detailData?.productDetail;

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Row>
        <Col xxl={10} md={9}>
          <div className={styles.detail}>
            <Row>
              <Col md={7}>
                <Image className={styles.image} src={productDetail?.image} />
              </Col>
              <Col md={5}>
                <div>
                  <div className={styles.brand}>{productDetail?.name}</div>
                  <div className={styles.price}>{productDetail?.price}₺</div>
                  <EButton
                    onClick={() => dispatch(setBasket(productDetail))}
                    text={'Add to Cart'}
                  />
                  <div className={styles.description}>
                    {productDetail?.description?.slice(0, 495)}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xxl={2} md={3}>
          <PBox />
          <CountBox data={masterData?.basket} />
        </Col>
      </Row>
    </Layout>
  );
}
