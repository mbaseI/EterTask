import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '.';

describe('Pagination component', () => {
  const onClickMock = jest.fn();

  it('renders the correct index', () => {
    const index = 1;
    const currentPage = 2;
    render(
      <Pagination
        onClick={onClickMock}
        index={index}
        currentPage={currentPage}
      />,
    );

    expect(screen.getByText(index)).toBeInTheDocument();
  });

  it('renders active class when the current page is equal to the index', () => {
    const index = 2;
    const currentPage = 2;
    render(
      <Pagination
        onClick={onClickMock}
        index={index}
        currentPage={currentPage}
      />,
    );

    expect(screen.getByText(index)).toHaveClass('isActive');
  });

  it('calls the onClick function when button is clicked', () => {
    const index = 3;
    const currentPage = 2;
    render(
      <Pagination
        onClick={onClickMock}
        index={index}
        currentPage={currentPage}
      />,
    );

    const button = screen.getByText(index);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith(index);
  });
});
