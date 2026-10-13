import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContentSection } from '@/components/ui/ContentSection';

export default function AnimationsPage() {
  return (
    <Container>
      <SectionHeader
        title="Animations"
        subtitle="CSS and JavaScript animation techniques"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        <ContentSection
          title="CSS Transitions"
          description="Smooth property changes, timing functions"
        />
        <ContentSection
          title="Keyframe Animations"
          description="Complex animation sequences with @keyframes"
        />
        <ContentSection
          title="Performance"
          description="GPU acceleration, will-change, transform tips"
        />
      </div>
    </Container>
  );
}
