import React from 'react';
import { render } from '@testing-library/react';
import WBox from './index';

describe('WBox', () => {
  it('renders with headText and children', () => {
    const headText = 'Test Headline';
    const children = <div>Test Children</div>;
    const { getByText } = render(<WBox headText={headText}>{children}</WBox>);
    expect(getByText(headText)).toBeInTheDocument();
    expect(getByText('Test Children')).toBeInTheDocument();
  });
});
