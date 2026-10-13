import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContentSection } from '@/components/ui/ContentSection';

export default function ComponentsDemoPage() {
  return (
    <Container>
      <SectionHeader
        title="Component Patterns"
        subtitle="Reusable React component architectures"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        <ContentSection
          title="Compound Components"
          description="Flexible, composable component APIs"
        />
        <ContentSection
          title="Render Props"
          description="Share code using render prop pattern"
        />
        <ContentSection
          title="Custom Hooks"
          description="Extract and reuse stateful logic"
        />
      </div>
    </Container>
  );
}
