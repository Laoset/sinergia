import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from '../ui/formInput.ui';

describe('InputField UI Component', () => {
  it('should render the InputField component correctly', () => {
    render(
      <InputField
        id='test-input'
        name='test'
        label='Test Label'
        value=''
        onChange={() => {}}
        placeholder='Enter text'
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  it('should update the value when user types in the input field', () => {
    const mockOnChange = jest.fn();
    render(
      <InputField
        id='test-input'
        name='test'
        label='Test Label'
        value=''
        onChange={mockOnChange}
        placeholder='Enter text'
      />
    );

    const inputElement = screen.getByPlaceholderText('Enter text');

    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should display error message when error prop is passed', () => {
    render(
      <InputField
        id='test-input'
        name='test'
        label='Test Label'
        value=''
        onChange={() => {}}
        placeholder='Enter text'
        error='This field is required'
      />
    );

    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.getByText('This field is required')).toHaveClass(
      'text-sm text-red-500 mt-1'
    );
  });

  it('should not display error message when error prop is not passed', () => {
    render(
      <InputField
        id='test-input'
        name='test'
        label='Test Label'
        value=''
        onChange={() => {}}
        placeholder='Enter text'
      />
    );

    expect(screen.queryByText('This field is required')).toBeNull();
  });

  it('should properly set the value prop', () => {
    render(
      <InputField
        id='test-input'
        name='test'
        label='Test Label'
        value='Test Value'
        onChange={() => {}}
        placeholder='Enter text'
      />
    );

    const inputElement = screen.getByDisplayValue('Test Value');
    expect(inputElement).toBeInTheDocument();
  });
});
