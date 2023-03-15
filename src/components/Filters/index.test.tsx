import { screen, render, fireEvent } from '@testing-library/react';
import Filters, { IFiltersProps } from '.';
import { categoryData } from '../../data/category';
import { createFiltersList } from '../../utils/filters';

const defaultProps: IFiltersProps = {
  handleChange: jest.fn(),
  options: createFiltersList(categoryData, 'Any'),
  title: 'Test Title',
};

const setup = (props: Partial<IFiltersProps> = {}) =>
  render(<Filters {...defaultProps} {...props} />);

describe('Filters', () => {
  it('should render without error', () => {
    setup();

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should render an input for each item', () => {
    setup();

    expect(screen.getAllByRole('checkbox')).toHaveLength(
      defaultProps.options.length
    );
  });

  it('should call handleChange', () => {
    setup();

    const input = screen.getAllByRole('checkbox')[0];
    fireEvent.click(input);

    expect(defaultProps.handleChange).toHaveBeenCalled();
  });

  it('should render the `checked` attribute', () => {
    setup({ filterType: 'radio', selectedValue: 'Any' });

    const input = screen.getByRole('radio', { name: 'Any' });

    expect(input.getAttribute('checked')).toBe('');
  });
});
