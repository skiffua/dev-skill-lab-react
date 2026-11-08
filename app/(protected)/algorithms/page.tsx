'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CodePlayground } from '@/components/ui/CodePlayground';
import {
  permutationExample,
  permutationHeapExample,
  kCombinationExample,
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
            noInline={true}
          />
        </section>

        {/* Permutation */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Комбінаторика
          </h2>
          <div className="space-y-6">
            <CodePlayground
                title="Перестановки (Permutation). Лексикографічний алгоритм"
                description="Перестановки. Алгоритм перебору усіх варіантів."
                code={permutationExample}
                noInline={true}
            />
            <CodePlayground
                title="Перестановки (Permutation). Алгоритм Хіпа"
                description="Перестановки. Алгоритм перебору усіх варіантів."
                code={permutationHeapExample}
                noInline={true}
            />
            <h3 className="text-sm font-bold text-secondary mb-4">
              Повний список основних алгоритмів для генерації перестановок:
            </h3>
              <ul className="list-disc text-accent pl-4">
                <li>
                  Алгоритм Джонсона-Троттера (Steinhaus–Johnson–Trotter): Генерує всі перестановки за допомогою обміну лише сусідніх елементів (мінімальні зміни на кожному кроці).
                </li>
                <li>
                  Лексикографічний алгоритм: Вибудовує перестановки у строгому порядку зростання (від найменшої до найбільшої, наче слова в словнику).
                </li>
                <li>
                  Алгоритм Хіпа (Heap's Algorithm): Один із найефективніших алгоритмів; для отримання наступної перестановки виконує лише один обмін (swap) елементів.
                </li>
                <li>
                  Безоциклічні алгоритми (Loopless Algorithms, напр., алгоритм Ерліха): Високопродуктивні алгоритми, які генерують кожну наступну перестановку за константний час $O(1)$ без циклів пошуку.
                </li>
                <li>
                  Рекурсивний бектрекінг (Backtracking): Найпростіший для реалізації метод перебору з поверненням (має хаотичний порядок і робить несусідні обміни).
                </li>
                <li>
                  Код Грея для перестановок (Permutation Gray Code): Рекурсивний підхід, який мінімізує кількість транспозицій між сусідніми елементами.
                </li>
                <li>
                  Алгоритм Фішера — Єйтса (Fisher–Yates shuffle): Використовується не для перебору всіх комбінацій, а для швидкого отримання випадкової (рандомної) перестановки за лінійний час.
                </li>
              </ul>

            <CodePlayground
                title="Сполучення (k-combination). Лексикографічний алгоритм"
                description="Сполучення. Алгоритм визначення комбінацій M із Т різних елементів."
                code={kCombinationExample}
                noInline={true}
            />
          </div>
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
