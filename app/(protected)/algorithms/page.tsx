import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContentSection } from '@/components/ui/ContentSection';

export default function AlgorithmsPage() {
  return (
    <Container>
      <SectionHeader
        title="Алгоритми"
        subtitle="Explore sorting, searching, and graph algorithms"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        <ContentSection
          title="Sorting Algorithms"
          description="Bubble Sort, Quick Sort, Merge Sort"
        />
        <ContentSection
          title="Search Algorithms"
          description="Binary Search, Linear Search, DFS, BFS"
        />
        <ContentSection
          title="Graph Algorithms"
          description="Dijkstra, A*, Bellman-Ford"
        />
      </div>
    </Container>
  );
}
