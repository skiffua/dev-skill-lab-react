import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContentSection } from '@/components/ui/ContentSection';

export default function JavaScriptPage() {
  return (
    <Container>
      <SectionHeader
        title="JavaScript Features"
        subtitle="Modern JavaScript concepts and patterns"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        <ContentSection
          title="Closures & Scope"
          description="Lexical scope, function closures, IIFE patterns"
        />
        <ContentSection
          title="Promises & Async"
          description="Async/await, Promise patterns, error handling"
        />
        <ContentSection
          title="ES6+ Features"
          description="Destructuring, spread/rest, modules, classes"
        />
      </div>
    </Container>
  );
}
