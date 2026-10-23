'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CodePlayground } from '@/components/ui/CodePlayground';
import {
  bubbleSortExample,
  binarySearchExample,
  quickSortExample,
  fibonacciExample,
} from '@/lib/examples/algorithms';
import { simpleJSXTest } from '@/lib/examples/test-simple';

export default function AlgorithmsPage() {
  return (
    <Container>
      <SectionHeader
        title="Алгоритми"
        subtitle="Інтерактивні приклади алгоритмів - редагуй код і дивись результат!"
      />

      <div className="space-y-8 animate-fade-in">
        {/* Test Section */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Test JSX Support
          </h2>
          <CodePlayground
            title="Simple JSX Test"
            description="Testing if JSX works in react-live"
            code={simpleJSXTest}
            noInline={true} // <--- ДОДАНО
          />
        </section>

        {/* Sorting Algorithms */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Сортування
          </h2>
          <div className="space-y-6">
            <CodePlayground
              title="Bubble Sort"
              description="Простий алгоритм сортування. Порівнює сусідні елементи і міняє їх місцями."
              code={bubbleSortExample}
              noInline={true}
            />

            <CodePlayground
              title="Quick Sort"
              description="Ефективний алгоритм сортування методом розділяй і володарюй."
              code={quickSortExample}
              noInline={true}
            />
          </div>
        </section>

        {/* Search Algorithms */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Пошук
          </h2>
          <div className="space-y-6">
            <CodePlayground
              title="Binary Search"
              description="Швидкий пошук в відсортованому масиві. O(log n) складність."
              code={binarySearchExample}
              noInline={true}
            />
          </div>
        </section>

        {/* Dynamic Programming */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Динамічне програмування
          </h2>
          <div className="space-y-6">
            <CodePlayground
              title="Fibonacci (Memoization)"
              description="Числа Фібоначчі з мемоізацією для оптимізації."
              code={fibonacciExample}
              noInline={true}
            />
          </div>
        </section>
      </div>
    </Container>
  );
}
