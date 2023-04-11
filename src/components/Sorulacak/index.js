import React from 'react';
import WBox from '../WBox';
import { Form, Field, Formik } from 'formik';
import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { setSortByStatus } from '../../Pages/Home/actions';

export default function Sorulacak() {
  const dispatch = useDispatch();

  return (
    <WBox headText={'Sort By'}>
      <Formik
        initialValues={{
          picked: '',
        }}
        onSubmit={(values) => {
          dispatch(setSortByStatus(values));
        }}
      >
        {({ values, handleSubmit }) => (
          <Form onChange={handleSubmit}>
            <div
              className={styles.group}
              role="group"
              aria-labelledby="radio-group"
            >
              <label>
                <Field type="radio" name="picked" value="otn" />
                <span>Old to new</span>
              </label>
              <label>
                <Field type="radio" name="picked" value="nto" />
                <span> New to old</span>
              </label>
              <label>
                <Field type="radio" name="picked" value="htl" />
                <span>Price hight to low</span>
              </label>
              <label>
                <Field type="radio" name="picked" value="lth" />
                <span>Price low to hight</span>
              </label>
            </div>
          </Form>
        )}
      </Formik>
    </WBox>
  );
}
