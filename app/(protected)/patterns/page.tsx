'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CodePlayground } from '@/components/ui/CodePlayground';
import {
  singletonPattern,
  observerPattern,
  factoryPattern,
  decoratorPattern,
  modulePattern,
} from '@/lib/examples/patterns-no-jsx';

export default function PatternsPage() {
  return (
    <Container>
      <SectionHeader
        title="Design Patterns"
        subtitle="Класичні паттерни проектування з live прикладами"
      />

      <div className="space-y-8 animate-fade-in">
        {/* Creational Patterns */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Creational Patterns
          </h2>
          <div className="space-y-6">
            <CodePlayground
              title="Singleton"
              description="Гарантує існування лише одного екземпляру класу."
              code={singletonPattern}
            />

            <CodePlayground
              title="Factory"
              description="Створює об'єкти без явного вказування класу."
              code={factoryPattern}
            />
          </div>
        </section>

        {/* Behavioral Patterns */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Behavioral Patterns
          </h2>
          <div className="space-y-6">
            <CodePlayground
              title="Observer"
              description="Підписка на події - один об'єкт сповіщає інші про зміни."
              code={observerPattern}
            />
          </div>
        </section>

        {/* Structural Patterns */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Structural Patterns
          </h2>
          <div className="space-y-6">
            <CodePlayground
              title="Decorator"
              description="Додає нову функціональність до існуючих об'єктів."
              code={decoratorPattern}
            />

            <CodePlayground
              title="Module"
              description="Інкапсуляція приватного стану та методів."
              code={modulePattern}
            />
          </div>
        </section>
      </div>
    </Container>
  );
}
