import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import PBox from '.';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('PBox', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

  it('renders the total basket price', () => {
    const mockBasketPrice = 50;
    useSelector.mockReturnValue(mockBasketPrice);

    render(<PBox />);
    expect(screen.getByText(/Total Price:/i)).toBeInTheDocument();
    expect(screen.getByText(`${mockBasketPrice}₺`)).toBeInTheDocument();
  });

  it('renders a checkout button', () => {
    render(<PBox />);
  });
});
