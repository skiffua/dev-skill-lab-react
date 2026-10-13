import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../ui/Button';

describe('Button', () => {
  it('should render with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should handle click events', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply primary variant styles by default', () => {
    render(<Button>Primary</Button>);
    const button = screen.getByText('Primary');

    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('text-white');
  });

  it('should apply secondary variant styles', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText('Secondary');

    expect(button).toHaveClass('bg-secondary');
  });

  it('should apply outline variant styles', () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByText('Outline');

    expect(button).toHaveClass('border-2');
    expect(button).toHaveClass('bg-transparent');
  });

  it('should apply ghost variant styles', () => {
    render(<Button variant="ghost">Ghost</Button>);
    const button = screen.getByText('Ghost');

    expect(button).toHaveClass('bg-transparent');
  });

  it('should apply small size styles', () => {
    render(<Button size="sm">Small</Button>);
    const button = screen.getByText('Small');

    expect(button).toHaveClass('px-3');
    expect(button).toHaveClass('text-sm');
  });

  it('should apply medium size styles by default', () => {
    render(<Button>Medium</Button>);
    const button = screen.getByText('Medium');

    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('text-base');
  });

  it('should apply large size styles', () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByText('Large');

    expect(button).toHaveClass('px-6');
    expect(button).toHaveClass('text-lg');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');

    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });

  it('should not call onClick when disabled', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );

    await user.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should accept custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByText('Custom');

    expect(button).toHaveClass('custom-class');
  });

  it('should render as button type by default', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toHaveAttribute('type', 'button');
  });

  it('should accept type attribute', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByText('Submit')).toHaveAttribute('type', 'submit');
  });
});
