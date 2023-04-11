import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '.';
import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Header Component', () => {
  it('should call setSearchText and resetFilters on search bar input change', () => {
    const mockBasketPrice = '50';

    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValueOnce(mockBasketPrice);

    const { getByPlaceholderText } = render(<Header />);

    fireEvent.change(getByPlaceholderText('Search'), {
      target: { value: 'test search text' },
    });
  });
});
