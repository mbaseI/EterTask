import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header';
import Master from '../../Pages/Master';

export default function Layout({ children }) {
  return (
    <>
      <Master>
        <div style={{ backgroundColor: '#F9F9F9', minHeight: '100vh' }}>
          <Header />
          <Container>{children}</Container>
        </div>
      </Master>
    </>
  );
}
