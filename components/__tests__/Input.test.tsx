import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../ui/Input';

describe('Input', () => {
  it('should render input field', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('should render label when provided', () => {
    render(<Input label="Username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('should associate label with input', () => {
    render(<Input label="Email" />);
    const label = screen.getByText('Email');
    const input = screen.getByLabelText('Email');

    expect(label).toHaveAttribute('for', 'email');
    expect(input).toHaveAttribute('id', 'email');
  });

  it('should handle user input', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Type here" />);

    const input = screen.getByPlaceholderText('Type here');
    await user.type(input, 'Hello World');

    expect(input).toHaveValue('Hello World');
  });

  it('should call onChange handler', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Input onChange={handleChange} placeholder="Type" />);

    const input = screen.getByPlaceholderText('Type');
    await user.type(input, 'test');

    expect(handleChange).toHaveBeenCalled();
  });

  it('should display error message when provided', () => {
    render(<Input error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('should apply error styles when error is present', () => {
    render(<Input error="Error message" />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('border-error');
  });

  it('should accept custom className', () => {
    render(<Input className="custom-input" />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('custom-input');
  });

  it('should support different input types', () => {
    render(<Input type="password" data-testid="password-input" />);
    const input = screen.getByTestId('password-input');

    expect(input).toHaveAttribute('type', 'password');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();
  });

  it('should accept custom id', () => {
    render(<Input id="custom-id" />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('id', 'custom-id');
  });

  it('should use label-derived id when no custom id provided', () => {
    render(<Input label="Full Name" />);
    const input = screen.getByLabelText('Full Name');

    expect(input).toHaveAttribute('id', 'full-name');
  });
});
