# Live Coding Guide

This project includes interactive live coding playgrounds powered by **react-live** for learning and demonstrating algorithms and design patterns.

## Features

✅ **Live Code Editing** - Edit JavaScript/React code in real-time  
✅ **Instant Preview** - See results immediately  
✅ **Syntax Highlighting** - Code highlighting with Prism  
✅ **Error Display** - Clear error messages  
✅ **Theme Integration** - Adapts to app themes  

## Available Playgrounds

### 📊 Algorithms (`/algorithms`)

**Sorting Algorithms:**
- **Bubble Sort** - O(n²) time complexity
- **Quick Sort** - O(n log n) average time

**Search Algorithms:**
- **Binary Search** - O(log n) on sorted arrays

**Dynamic Programming:**
- **Fibonacci with Memoization** - O(n) optimized

### 🎨 Design Patterns (`/patterns`)

**Creational:**
- **Singleton** - One instance pattern
- **Factory** - Object creation pattern

**Behavioral:**
- **Observer** - Event subscription pattern

**Structural:**
- **Decorator** - Enhance functionality
- **Module** - Private state encapsulation

## Using CodePlayground Component

### Basic Usage

```tsx
import { CodePlayground } from '@/components/ui/CodePlayground';

export default function MyPage() {
  const code = `
    function greet(name) {
      return \`Hello, \${name}!\`;
    }

    render(<div>{greet('World')}</div>);
  `;

  return (
    <CodePlayground
      title="Greeting Function"
      description="A simple greeting example"
      code={code}
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | required | Initial code to display |
| `title` | `string` | - | Playground title |
| `description` | `string` | - | Description text |
| `className` | `string` | - | Additional CSS classes |
| `scope` | `object` | `{}` | Additional variables/functions |
| `noInline` | `boolean` | `false` | Require manual `render()` call |
| `showPreview` | `boolean` | `true` | Show preview panel |

### Advanced Example with Custom Scope

```tsx
import { CodePlayground } from '@/components/ui/CodePlayground';
import { useState } from 'react';

const customScope = {
  useState,
  customUtility: (x) => x * 2,
};

const code = `
  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <p>Doubled: {customUtility(count)}</p>
      </div>
    );
  }

  render(<Counter />);
`;

export default function MyPage() {
  return (
    <CodePlayground
      code={code}
      scope={customScope}
      title="Counter with Custom Utility"
    />
  );
}
```

## Creating New Examples

### 1. Create Example File

Add to `lib/examples/algorithms.ts` or `lib/examples/patterns.ts`:

```typescript
export const myAlgorithmExample = `
function myAlgorithm(input) {
  // Your algorithm here
  return result;
}

// Test
const input = [1, 2, 3];
const result = myAlgorithm(input);

render(
  <div>
    <p><strong>Input:</strong> {JSON.stringify(input)}</p>
    <p className="text-primary">
      <strong>Result:</strong> {JSON.stringify(result)}
    </p>
  </div>
);
`;
```

### 2. Add to Page

```tsx
import { myAlgorithmExample } from '@/lib/examples/algorithms';

<CodePlayground
  title="My Algorithm"
  description="Description here"
  code={myAlgorithmExample}
/>
```

## Code Format Rules

### Must use `render()` function

All code must call `render()` to display output:

```javascript
// ✅ Correct
render(<div>Hello</div>);

// ❌ Wrong - won't display
<div>Hello</div>
```

### JSX syntax supported

```javascript
render(
  <div className="text-primary">
    <h1>Title</h1>
    <p>Content</p>
  </div>
);
```

### Use Tailwind classes

```javascript
render(
  <div className="p-4 bg-card-bg rounded-lg border border-border">
    <p className="text-foreground font-semibold">Styled content</p>
    <p className="text-secondary text-sm">Secondary text</p>
  </div>
);
```

### Available Tailwind Colors

These colors adapt to the active theme:

- `text-foreground` - Main text
- `text-secondary` - Secondary text
- `text-primary` - Accent/primary color
- `bg-background` - Background
- `bg-card-bg` - Card background
- `border-border` - Borders
- `text-success` - Success green
- `text-error` - Error red
- `text-warning` - Warning yellow

## Styling the Editor

The editor uses CSS custom properties from `globals.css`:

```css
.prism-code .token.keyword {
  color: var(--primary);
  font-weight: 600;
}

.prism-code .token.string {
  color: var(--accent);
}
```

Colors automatically adapt to Light/Dark/Ocean themes.

## Best Practices

### 1. Keep Examples Focused

Each playground should demonstrate **one concept**:

✅ Good - focused example:
```javascript
function bubbleSort(arr) {
  // Implementation
}
```

❌ Bad - too many concepts:
```javascript
function bubbleSort() { ... }
function quickSort() { ... }
function mergeSort() { ... }
```

### 2. Add Comments

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  // Loop until boundaries meet
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found!
    }

    // Continue searching
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}
```

### 3. Show Complexity

Include time/space complexity:

```javascript
render(
  <div>
    <p>Result: {sorted.join(', ')}</p>
    <p className="text-sm text-secondary mt-2">
      Time: O(n log n) | Space: O(n)
    </p>
  </div>
);
```

### 4. Format Output Nicely

Use components for better presentation:

```javascript
render(
  <div className="space-y-3">
    <div>
      <strong className="text-foreground">Input:</strong>
      <code className="ml-2 text-primary">[{input.join(', ')}]</code>
    </div>
    <div>
      <strong className="text-foreground">Output:</strong>
      <code className="ml-2 text-success">[{output.join(', ')}]</code>
    </div>
  </div>
);
```

## Error Handling

Errors are displayed automatically below the editor:

```javascript
// This will show error
function broken() {
  throw new Error("Something went wrong!");
}

render(<div>{broken()}</div>);
```

The error message appears in a red box with details.

## Performance Tips

### 1. Avoid Infinite Loops

```javascript
// ❌ Infinite loop - will freeze
while (true) {
  console.log('forever');
}

// ✅ Safe loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### 2. Limit Array Sizes

```javascript
// ✅ Good for demo
const arr = Array.from({ length: 10 }, (_, i) => i);

// ❌ Too large for playground
const arr = Array.from({ length: 100000 }, (_, i) => i);
```

### 3. Use Memoization

```javascript
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n]; // ✅ Cache results

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
```

## Troubleshooting

### Code doesn't display

✅ Make sure you're calling `render()`:
```javascript
render(<div>Content</div>);
```

### Styles not applied

✅ Use Tailwind classes, not CSS-in-JS:
```javascript
// ✅ Correct
<div className="text-primary font-bold">Text</div>

// ❌ Wrong
<div style={{ color: 'blue', fontWeight: 'bold' }}>Text</div>
```

### Can't use external libraries

✅ Pass them in `scope` prop:
```tsx
import lodash from 'lodash';

<CodePlayground
  scope={{ lodash }}
  code={`render(<div>{lodash.reverse([1,2,3])}</div>)`}
/>
```

## Resources

- [react-live Documentation](https://github.com/FormidableLabs/react-live)
- [Prism Themes](https://github.com/PrismJS/prism-themes)
- [Tailwind CSS](https://tailwindcss.com/)

## Adding More Examples

Want to add your own? Follow this structure:

1. Create example in `lib/examples/[category].ts`
2. Import in respective page
3. Add `<CodePlayground>` component
4. Test in browser
5. Adjust styling if needed

Happy coding! 🚀
