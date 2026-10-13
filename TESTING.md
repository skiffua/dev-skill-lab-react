# Testing Guide

This project uses **Jest** and **React Testing Library** for comprehensive unit testing.

## Test Statistics

- **Total Tests**: 66
- **Test Suites**: 8
- **All tests passing** ✅

## Test Coverage

### 🧩 UI Components (`components/__tests__/`)

**Button.test.tsx** (11 tests)
- Rendering and children
- Click event handling
- Variant styles (primary, secondary, outline, ghost)
- Size variations (sm, md, lg)
- Disabled state behavior
- Custom className support
- Type attribute handling

**Input.test.tsx** (11 tests)
- Basic input rendering
- Label association
- User input handling
- onChange callbacks
- Error message display
- Error styling
- Different input types
- Disabled state
- Custom id support

**Card.test.tsx** (7 tests)
- Children rendering
- Base styling application
- Hover effects
- Custom className
- Custom attributes
- Complex children support

**ContentSection.test.tsx** (7 tests)
- Title rendering
- Description display
- Custom children
- Placeholder text
- Custom className
- Hover effects
- Minimum height

### 🔗 Custom Hooks (`lib/hooks/__tests__/`)

**useLocalStorage.test.tsx** (6 tests)
- Initial value when localStorage is empty
- Stored value retrieval
- Value updates
- Function updates
- Complex object handling
- JSON parse error handling

### 🌐 Context Providers (`lib/contexts/__tests__/`)

**ThemeContext.test.tsx** (7 tests)
- Default theme provision
- Theme loading from localStorage
- Theme updates and persistence
- data-theme attribute management
- Context error handling
- Invalid theme handling

**AuthContext.test.tsx** (7 tests)
- Unauthenticated state initialization
- User loading from localStorage
- Successful login flow
- Failed login with wrong credentials
- Logout functionality
- Corrupted data handling
- Context error handling

### 🛠️ Utilities (`lib/__tests__/`)

**cn.test.ts** (5 tests)
- Class name merging
- Conditional classes
- Tailwind class conflicts
- Undefined/null handling
- Empty input handling

## Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (auto-rerun on changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Configuration

### jest.config.js
- Uses `next/jest` for Next.js integration
- jsdom environment for React component testing
- Path aliases (@/*) configured
- Coverage collection from components/, lib/, and app/

### jest.setup.js
- Imports @testing-library/jest-dom for custom matchers
- Configures localStorage mock
- Automatic mock cleanup before each test

## Writing New Tests

### Component Test Template

```typescript
import { render, screen } from '@testing-library/react';
import { YourComponent } from '../YourComponent';

describe('YourComponent', () => {
  it('should render correctly', () => {
    render(<YourComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('should handle user interaction', async () => {
    const user = userEvent.setup();
    render(<YourComponent />);
    
    await user.click(screen.getByRole('button'));
    expect(/* your assertion */);
  });
});
```

### Hook Test Template

```typescript
import { renderHook, act } from '@testing-library/react';
import { useYourHook } from '../useYourHook';

describe('useYourHook', () => {
  it('should return expected value', () => {
    const { result } = renderHook(() => useYourHook());
    expect(result.current.value).toBe(expectedValue);
  });

  it('should update on action', () => {
    const { result } = renderHook(() => useYourHook());
    
    act(() => {
      result.current.action();
    });
    
    expect(result.current.value).toBe(newValue);
  });
});
```

## Best Practices

1. **Test Behavior, Not Implementation**
   - Focus on what the user sees and does
   - Avoid testing internal state directly

2. **Use Proper Queries**
   - Prefer `getByRole` for accessibility
   - Use `getByText` for user-visible text
   - Use `getByTestId` as last resort

3. **Mock External Dependencies**
   - Mock localStorage with spies
   - Mock API calls
   - Mock timers when needed

4. **Clean Up After Tests**
   - Use `beforeEach` and `afterEach`
   - Restore mocks and spies
   - Clear state between tests

5. **Write Descriptive Test Names**
   - Use "should" statements
   - Describe the expected behavior
   - Make failures easy to understand

## Common Testing Patterns

### Testing localStorage
```typescript
let getItemSpy: jest.SpyInstance;

beforeEach(() => {
  getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
});

afterEach(() => {
  getItemSpy.mockRestore();
});

it('should read from localStorage', () => {
  getItemSpy.mockReturnValue('stored-value');
  // test code
});
```

### Testing Async Operations
```typescript
it('should handle async operation', async () => {
  render(<Component />);
  
  await waitFor(() => {
    expect(screen.getByText('Loaded')).toBeInTheDocument();
  });
});
```

### Testing User Events
```typescript
it('should handle click', async () => {
  const user = userEvent.setup();
  render(<Component />);
  
  await user.click(screen.getByRole('button'));
  expect(/* assertion */);
});
```

## CI/CD Integration

Tests should be run as part of your CI/CD pipeline:

```yaml
# Example GitHub Actions workflow
- name: Run tests
  run: npm test
  
- name: Generate coverage
  run: npm run test:coverage
```

## Troubleshooting

### Tests Failing Locally
1. Clear Jest cache: `npx jest --clearCache`
2. Delete node_modules and reinstall
3. Check for conflicting global packages

### localStorage Errors
- Ensure jest.setup.js is loaded
- Use Storage.prototype spies, not direct mocks
- Clear mocks in afterEach

### Async Test Timeouts
- Increase timeout: `jest.setTimeout(10000)`
- Use `waitFor` for async operations
- Check for unresolved promises

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Common Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
