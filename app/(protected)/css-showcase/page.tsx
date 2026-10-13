import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContentSection } from '@/components/ui/ContentSection';

export default function CSSShowcasePage() {
  return (
    <Container>
      <SectionHeader
        title="CSS Features"
        subtitle="Modern CSS techniques and layouts"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        <ContentSection
          title="Grid Layouts"
          description="CSS Grid, auto-fit, minmax, areas"
        />
        <ContentSection
          title="Flexbox Patterns"
          description="Flex containers, alignment, responsive layouts"
        />
        <ContentSection
          title="Custom Properties"
          description="CSS variables, theming, dynamic styles"
        />
      </div>
    </Container>
  );
}
