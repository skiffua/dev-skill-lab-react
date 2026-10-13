import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContentSection } from '@/components/ui/ContentSection';

export default function DataVisualizationPage() {
  return (
    <Container>
      <SectionHeader
        title="Data Visualization"
        subtitle="Charts, graphs, and visual data representation"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        <ContentSection
          title="SVG Charts"
          description="Build custom charts with SVG elements"
        />
        <ContentSection
          title="Canvas Graphics"
          description="High-performance graphics with HTML5 Canvas"
        />
        <ContentSection
          title="Chart Libraries"
          description="D3.js, Chart.js, Recharts integration"
        />
      </div>
    </Container>
  );
}
