import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button, { IButtonProps } from '.';

const defaultProps: IButtonProps = {
  onClick: jest.fn(),
  type: 'button',
};

const setup = (props: Partial<IButtonProps> = {}) =>
  render(
    <Button {...defaultProps} {...props}>
      Test Button
    </Button>
  );

describe('Button', () => {
  it('should render without error', () => {
    setup();

    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('should call `onClick` when clicked', () => {
    setup();

    const button = screen.getByText('Test Button');
    userEvent.click(button);

    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('should render the correct type', () => {
    setup();

    const button = screen.getByText('Test Button') as HTMLButtonElement;

    expect(button.type).toEqual('button');
  });
});
