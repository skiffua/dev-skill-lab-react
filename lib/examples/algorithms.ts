export const bubbleSortExample = `function bubbleSort(arr) {
  const sorted = [...arr];
  const n = sorted.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        // Swap elements
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }

  return sorted;
}

// Test the algorithm
const unsorted = [64, 34, 25, 12, 22, 11, 90];
const sorted = bubbleSort(unsorted);

const { createElement: h } = React;

render(
  h('div', null,
    h('p', { className: 'mb-2' },
      h('strong', null, 'Input: '),
      '[' + unsorted.join(', ') + ']'
    ),
    h('p', { className: 'text-primary font-semibold' },
      h('strong', null, 'Sorted: '),
      '[' + sorted.join(', ') + ']'
    ),
    h('p', { className: 'mt-3 text-sm text-secondary' },
      'Time: O(n²) | Space: O(1)'
    )
  )
);`;

export const binarySearchExample = `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let steps = [];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    steps.push({ left, mid, right, value: arr[mid] });

    if (arr[mid] === target) {
      return { found: true, index: mid, steps };
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return { found: false, index: -1, steps };
}

// Test the algorithm
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;
const result = binarySearch(sortedArray, target);

const { createElement: h } = React;

render(
  h('div', null,
    h('p', { className: 'mb-2' },
      h('strong', null, 'Array: '),
      '[' + sortedArray.join(', ') + ']'
    ),
    h('p', { className: 'mb-2' },
      h('strong', null, 'Target: '),
      target
    ),
    h('p', { className: 'text-primary font-semibold mb-3' },
      result.found ? 'Found at index ' + result.index : 'Not found'
    ),
    h('div', { className: 'text-sm' },
      h('strong', null, 'Steps: '),
      result.steps.length,
      h('div', { className: 'mt-2 space-y-1' },
        ...result.steps.map((step, i) =>
          h('div', { key: i, className: 'text-secondary' },
            'Step ' + (i + 1) + ': mid=' + step.mid + ', value=' + step.value
          )
        )
      )
    ),
    h('p', { className: 'mt-3 text-sm text-secondary' },
      'Time: O(log n) | Space: O(1)'
    )
  )
);`;

export const quickSortExample = `function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Test the algorithm
const unsorted = [3, 7, 8, 5, 2, 1, 9, 5, 4];
const sorted = quickSort(unsorted);

const { createElement: h } = React;

render(
  h('div', null,
    h('p', { className: 'mb-2' },
      h('strong', null, 'Input: '),
      '[' + unsorted.join(', ') + ']'
    ),
    h('p', { className: 'text-primary font-semibold' },
      h('strong', null, 'Sorted: '),
      '[' + sorted.join(', ') + ']'
    ),
    h('p', { className: 'mt-3 text-sm text-secondary' },
      'Time: O(n log n) avg | Space: O(log n)'
    )
  )
);`;

export const fibonacciExample = `function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Generate Fibonacci sequence
const n = 10;
const sequence = Array.from({ length: n }, (_, i) => fibonacci(i));

const { createElement: h } = React;

render(
  h('div', null,
    h('p', { className: 'mb-2' },
      h('strong', null, 'First ' + n + ' Fibonacci numbers:')
    ),
    h('div', { className: 'flex gap-2 flex-wrap mb-3' },
      ...sequence.map((num, i) =>
        h('span', {
          key: i,
          className: 'px-3 py-1 bg-primary/10 text-primary rounded-lg font-mono'
        }, num)
      )
    ),
    h('p', { className: 'text-sm text-secondary' },
      'Using memoization for O(n) time complexity'
    )
  )
);`;
