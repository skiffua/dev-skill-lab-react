export const permutationExample = `const elements = [3,4,1,2]
elements.sort((a, b) => a - b);
const k = elements.length
const perms = [];
perms.push([...elements]);

const findPair = (el, j) => {
  let pair = null;
  let n = k - 1
  while (n >= j && elements[n] <= el) {
    n--;    
  }
  return {
    pair: elements[n],
    index: n,    
    }
}

const switchElements = (el, elIndex, pair, pairIndex) => {
  let c = el;
  elements[elIndex] = pair;
  elements[pairIndex] = el;
}
// Switch elements with destruction
// [elements[m - 1], elements[n]] = [elements[n], elements[m - 1]];

const alignmentElements = (index) => {
  const count = Math.trunc((k - index) / 2);
  for (let i = 0; i < count; i ++) {
    let c = elements[index + i];
    elements[index + i] = elements[k - 1 - i]
    elements[k - 1 - i] = c
  }
}
// Another approach with tail
// const reverseTail = (startIdx) => {
//   let l = startIdx;
//   let r = k - 1;
//   while (l < r) {
//     [elements[l], elements[r]] = [elements[r], elements[l]];
//     l++;
//     r--;
//   }
// };

let m = k
while (m > 0) {
  if (elements[m-1] < elements[m]) {
    const { pair, index }  = findPair(elements[m-1], m);
    switchElements(elements[m-1], m-1, pair, index);
    alignmentElements(m)
    perms.push([...elements]);
    m = k;
  }
  m--;
}

render(
    <div className='mb-2'>
        <p className='mb-2'>
            <strong>Input: [ {elements.join(', ')} ]</strong>
        </p>
        <p className='text-primary font-semibold'>
            <ul>
                {perms.map((el, ind) => 
                    <li><strong>Варіант {ind + 1} перестановки: {el.join(', ')}</strong></li>
                )}
            </ul>
        </p>
        <p className='mt-3 text-sm text-secondary'>
            Time: O(n!) | Space: O(n)
        </p>
    </div>
);`;

export const permutationHeapExample = `const elements = [3, 4, 1, 2];
let k = elements.length;
const perms = [];

const genPerm = (n) => {
  if (n === 1) {
    perms.push([...elements]);
    return; 
  }

  for (let i = 0; i < n; i++) {
    genPerm(n - 1);

    if (n % 2 === 0) {
      [elements[i], elements[n - 1]] = [elements[n - 1], elements[i]];
    } else {
      [elements[0], elements[n - 1]] = [elements[n - 1], elements[0]];
    }
  } 
}

 // genPerm(n - 1);

  // if (n % 2 === 0) {
  //   [elements[0], elements[n - 1]] = [elements[n - 1], elements[0]];
  // } else {
  //   [elements[0], elements[n]] = [elements[n], elements[0]];
  // }   

genPerm(k);

render(
    <div className='mb-2'>
        <p className='mb-2'>
            <strong>Input: [ {elements.join(', ')} ]</strong>
        </p>
        <p className='text-primary font-semibold'>
            <ul>
                {perms.map((el, ind) => 
                    <li><strong>Варіант {ind + 1} перестановки: {el.join(', ')}</strong></li>
                )}
            </ul>
        </p>
        <p className='mt-3 text-sm text-secondary'>
            Time: O(n!) | Space: O(n)
        </p>
    </div>
);`;

export const kCombinationExample = `const a = [3, 2, 1, 4, 5];
const m = 3;
const k = a.length;
const bitMirror = [];
for (let i = 0; i < k; i++) {
  if (i > k - 1 - m) {
    bitMirror.push(1);
  } else {
    bitMirror.push(0);
  }
}
// const bitMirror = Array.from({ length: k }, (_, i) => (i >= k - m ? 1 : 0));

const generateCombination = () => {
  const comb = a.reduce((acc, _, ind) => {
    if (bitMirror[ind] === 1) {
      acc.push(a[ind]);
    }
    return acc;
  }, []);
  return comb;
}
// const generateCombination = () => a.filter((_, ind) => bitMirror[ind] === 1);

const comb = [];
comb.push([...generateCombination()]);


let i = k - 1

const findPair = (ind, el) => {
  let j = k - 1;
  let searchedElInd = null
  while (j > ind && searchedElInd === null) {    
    if (bitMirror[j] > el) {
      searchedElInd = j
    }
    j--;
  }
  return searchedElInd;
}

const switchElemenst = (ind1, ind2) => {
  [bitMirror[ind1], bitMirror[ind2]] = [bitMirror[ind2], bitMirror[ind1]];
}

const sortInAsc = (ind) => {
  const elToSort = Math.floor((k - ind) / 2);
  for (let i = 0; i < elToSort; i++) {
    [bitMirror[ind +i], bitMirror[k - 1 -i]] = [bitMirror[k - 1 - i], bitMirror[ind + i]];
  }
}

while (i > 0) {
  if (bitMirror[i - 1] < bitMirror[i]) {
    const ind = findPair(i - 1, bitMirror[i - 1]);
    switchElemenst(i - 1, ind);
    sortInAsc(i);
    i = k - 1;
    comb.push([...generateCombination()]);
  } else {
    i--;
  }  
} 

render(
    <div className='mb-2'>
        <p className='mb-2'>
            <strong>Input: [ {a.join(', ')} ]</strong>
        </p>
        <div className='text-primary font-semibold'>
            <ul>
                {comb.map((el, ind) => (
                    <li key={ind}>
                        <strong>Варіант {ind + 1} сполучення: {el.join(', ')}</strong>
                    </li>
                ))}
            </ul>
        </div>
        <p className='mt-3 text-sm text-secondary'>
            Time: O(n!) | Space: O(n)
        </p>
    </div>
);`;

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
