import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContentSection } from '@/components/ui/ContentSection';

import { CodePlayground } from '@/components/ui/CodePlayground';

import { debounceExample } from '@/lib/examples/components';

export default function ComponentsDemoPage() {
  return (
    <Container>
      <SectionHeader
        title="Component Patterns"
        subtitle="Reusable React component architectures"
      />
      <div className="grid gap-6 grid-cols-2 animate-fade-in">
          <ContentSection
              title="Using debounce"
              description="The debounce pattern ensures that a function is only executed after a specified period of inactivity has elapsed since the last time it was invoked."
          >
              <CodePlayground
                  title="Simple debounce pattern test"
                  description="Testing debounce pattern"
                  code={debounceExample}
                  noInline={true}
              />
          </ContentSection>
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
