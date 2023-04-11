import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import EButton from '../EButton';
import { useDispatch } from 'react-redux';
import { setBasket } from '../../Pages/Master/actions';

export default function ECard({ image, price, model, brand, name, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = {
    price: price,
    model: model,
    brand: brand,
    name: name,
    id: id,
  };

  return (
    <Card className={styles.card}>
      <Card.Img
        onClick={() => navigate(`/detail/${id}`)}
        className={styles.image}
        variant="top"
        src={image}
      />
      <Card.Body className={styles.body}>
        <Card.Title className={styles.price}>{price}₺</Card.Title>
        <Card.Text className={styles.text}>{name}</Card.Text>
        <EButton
          onClick={() => dispatch(setBasket(product))}
          text={'Add to Cart'}
        />
      </Card.Body>
    </Card>
  );
}
