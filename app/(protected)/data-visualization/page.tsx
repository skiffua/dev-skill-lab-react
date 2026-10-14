'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CodePlayground } from '@/components/ui/CodePlayground';
import {
  lineChartExample,
  barChartExample,
  pieChartExample,
  animationExample,
  apiChartExample,
  weatherDashboardExample,
} from '@/lib/examples/data-visualization';

export default function DataVisualizationPage() {
  return (
    <Container>
      <SectionHeader
        title="Data Visualization"
        subtitle="Canvas graphics, charts, and API integration з live прикладами"
      />

      <div className="space-y-8 animate-fade-in">
        {/* Canvas Charts */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Canvas Charts
          </h2>
          <div className="space-y-6">
            <CodePlayground
              title="Line Chart"
              description="Візуалізація трендів за допомогою лінійного графіка."
              code={lineChartExample}
            />

            <CodePlayground
              title="Bar Chart"
              description="Порівняння категоричних даних за допомогою стовпчикової діаграми."
              code={barChartExample}
            />

            <CodePlayground
              title="Pie Chart"
              description="Показ процентного розподілу даних."
              code={pieChartExample}
            />
          </div>
        </section>

        {/* Canvas Animations */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Canvas Animations
          </h2>
          <div className="space-y-6">
            <CodePlayground
              title="Bouncing Ball"
              description="Анімована графіка на Canvas з requestAnimationFrame."
              code={animationExample}
            />
          </div>
        </section>

        {/* API Integration */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            API Integration
          </h2>
          <div className="space-y-6">
            <CodePlayground
              title="API Data Chart"
              description="Завантаження даних з API та візуалізація на Canvas."
              code={apiChartExample}
            />

            <CodePlayground
              title="Weather Dashboard"
              description="Множинні API запити та відображення даних (axios mock adapter)."
              code={weatherDashboardExample}
            />
          </div>
        </section>
      </div>
    </Container>
  );
}
