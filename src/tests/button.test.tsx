import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../ui/button.ui';

describe('Button Component', () => {
  it('Should render the button with the correct text', () => {
    render(
      <Button type='button' callback={() => {}}>
        Click me
      </Button>
    );

    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument();
  });

  it('Run the callback when the button is clicked', () => {
    const mockCallback = jest.fn();

    render(
      <Button type='button' callback={mockCallback}>
        Click me
      </Button>
    );

    const button = screen.getByRole('button', { name: /click me/i });

    fireEvent.click(button);

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('has the correct type', () => {
    render(
      <Button type='submit' callback={() => {}}>
        Submit
      </Button>
    );

    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toHaveAttribute('type', 'submit');
  });
});
