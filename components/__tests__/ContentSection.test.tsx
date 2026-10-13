import { render, screen } from '@testing-library/react';
import { ContentSection } from '../ui/ContentSection';

describe('ContentSection', () => {
  it('should render title', () => {
    render(<ContentSection title="Section Title" />);
    expect(screen.getByText('Section Title')).toBeInTheDocument();
  });

  it('should render description when provided', () => {
    render(
      <ContentSection
        title="Title"
        description="This is a description"
      />
    );
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('should render children when provided', () => {
    render(
      <ContentSection title="Title">
        <p>Custom content</p>
      </ContentSection>
    );
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });

  it('should show placeholder text when no children provided', () => {
    render(<ContentSection title="Title" />);
    expect(screen.getByText('Content coming soon...')).toBeInTheDocument();
  });

  it('should not show placeholder when children are provided', () => {
    render(
      <ContentSection title="Title">
        <div>Content</div>
      </ContentSection>
    );
    expect(screen.queryByText('Content coming soon...')).not.toBeInTheDocument();
  });

  it('should accept custom className', () => {
    render(
      <ContentSection
        title="Title"
        className="custom-section"
        data-testid="section"
      />
    );
    const section = screen.getByTestId('section');
    expect(section).toHaveClass('custom-section');
  });

  it('should render with hover effect', () => {
    render(<ContentSection title="Title" data-testid="section" />);
    const section = screen.getByTestId('section');

    expect(section).toHaveClass('hover:shadow-md');
  });

  it('should have minimum height', () => {
    render(<ContentSection title="Title" data-testid="section" />);
    const section = screen.getByTestId('section');

    expect(section).toHaveClass('min-h-[200px]');
  });
});
