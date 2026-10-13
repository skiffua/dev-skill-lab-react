import { render, screen } from '@testing-library/react';
import { Card } from '../ui/Card';

describe('Card', () => {
  it('should render children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );

    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('should apply base styles', () => {
    render(<Card data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');

    expect(card).toHaveClass('rounded-xl');
    expect(card).toHaveClass('border');
    expect(card).toHaveClass('border-border');
    expect(card).toHaveClass('bg-card-bg');
    expect(card).toHaveClass('p-6');
  });

  it('should apply hover styles when hover prop is true', () => {
    render(
      <Card hover data-testid="card">
        Content
      </Card>
    );
    const card = screen.getByTestId('card');

    expect(card).toHaveClass('hover:shadow-md');
    expect(card).toHaveClass('hover:border-primary');
    expect(card).toHaveClass('cursor-pointer');
  });

  it('should not apply hover styles by default', () => {
    render(<Card data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');

    expect(card).not.toHaveClass('cursor-pointer');
  });

  it('should accept custom className', () => {
    render(
      <Card className="custom-card" data-testid="card">
        Content
      </Card>
    );
    const card = screen.getByTestId('card');

    expect(card).toHaveClass('custom-card');
  });

  it('should support custom attributes', () => {
    render(
      <Card data-testid="custom-card" aria-label="Info card">
        Content
      </Card>
    );

    const card = screen.getByTestId('custom-card');
    expect(card).toHaveAttribute('aria-label', 'Info card');
  });

  it('should render complex children', () => {
    render(
      <Card>
        <h2>Title</h2>
        <p>Description</p>
        <button>Action</button>
      </Card>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
