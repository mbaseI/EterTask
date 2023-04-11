import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FilterBox from '.';

describe('FilterBox', () => {
  const data = ['Option 1', 'Option 2', 'Option 3'];
  const onSelect = jest.fn();

  beforeEach(() => {
    onSelect.mockClear();
  });

  it('renders the title', () => {
    render(<FilterBox title="Test Title" data={data} onSelect={onSelect} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the options', () => {
    render(<FilterBox title="Test Title" data={data} onSelect={onSelect} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('filters options based on search text', () => {
    render(<FilterBox title="Test Title" data={data} onSelect={onSelect} />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: '2' } });
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
  });

  it('does not render search input if isSearchable is false', () => {
    render(
      <FilterBox
        title="Test Title"
        data={data}
        onSelect={onSelect}
        isSearchable={false}
      />,
    );
    expect(screen.queryByPlaceholderText('Search')).not.toBeInTheDocument();
  });
});
