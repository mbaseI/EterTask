import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ECard from '.';
import { setBasket } from '../../Pages/Master/actions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

test('renders with correct props and calls dispatch function', () => {
  const dispatchMock = jest.fn(); // jest.fn() ile bir mock function oluşturuyoruz
  useDispatch.mockReturnValue(dispatchMock); // useDispatch hook'unun mock değerini tanımlıyoruz

  const product = {
    price: 100,
    model: 'Test Model',
    brand: 'Test Brand',
    name: 'Test Name',
    id: 1,
  };

  render(
    <MemoryRouter>
      <ECard {...product} image="test.png" />
    </MemoryRouter>,
  );

  const image = screen.getByAltText(product.name);
  expect(image).toBeInTheDocument();

  fireEvent.click(image);

  const addButton = screen.getByText('Add to Cart');
  expect(addButton).toBeInTheDocument();

  fireEvent.click(addButton);
  expect(dispatchMock).toHaveBeenCalledTimes(1);
  expect(dispatchMock).toHaveBeenCalledWith(setBasket(product));
});
