import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './style.module.scss';
import { Person, Briefcase } from 'react-bootstrap-icons';
import { setSearchText } from '../../Pages/Master/actions';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectBasketPrice } from '../../Pages/Master/selector';
import { resetFilters } from '../../Pages/Home/actions';

export default function Header() {
  const dispatch = useDispatch();

  const basketPrice = useSelector(makeSelectBasketPrice);
  return (
    <div className={styles.header}>
      <Container>
        <Row>
          <Col md={2}>
            <div className={styles.brand}>
              <a href="/home">Eteration</a>
            </div>
          </Col>
          <Col md={8}>
            <div className={styles.searchBar}>
              <input
                placeholder="Search"
                onChange={(e) => {
                  dispatch(setSearchText(e.target.value));
                  dispatch(resetFilters());
                }}
              />
            </div>
          </Col>
          <Col md={2}>
            <div className={styles.userInformation}>
              <div className={styles.basket}>
                <Briefcase size={20} fill="white" /> <span>{basketPrice}₺</span>
              </div>
              <div className={styles.user}>
                <Person size={20} fill="white" /> <span>Mustafa Basel</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
