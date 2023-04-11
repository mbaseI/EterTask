import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import styles from './style.module.scss';
import EButton from '.';

test('renders with correct props and calls onClick function', () => {
  const onClickMock = jest.fn();
  const buttonText = 'Test Button Text';

  render(<EButton text={buttonText} onClick={onClickMock} />);

  const button = screen.getByText(buttonText);

  expect(button).toBeInTheDocument();
  expect(button).toHaveClass(styles.button);

  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});
