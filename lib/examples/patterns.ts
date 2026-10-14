export const singletonPattern = `// Singleton Pattern
class Database {
  static instance = null;

  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    this.data = [];
    Database.instance = this;
  }

  addItem(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

// Test
const db1 = new Database();
db1.addItem('First');

const db2 = new Database();
db2.addItem('Second');

render(
  <div>
    <p className="mb-2 text-sm text-secondary">
      Creating two instances...
    </p>
    <p className="font-semibold text-primary mb-2">
      Same instance: {db1 === db2 ? 'Yes ✓' : 'No ✗'}
    </p>
    <p className="text-sm">
      Data: [{db1.getData().join(', ')}]
    </p>
  </div>
);`;

export const observerPattern = `// Observer Pattern
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(data));
    }
  }
}

// Test
const emitter = new EventEmitter();
const messages = [];

emitter.on('message', (msg) => {
  messages.push(\`Listener 1: \${msg}\`);
});

emitter.on('message', (msg) => {
  messages.push(\`Listener 2: \${msg}\`);
});

emitter.emit('message', 'Hello!');

render(
  <div className="space-y-2">
    <p className="font-semibold text-primary">
      Events fired:
    </p>
    {messages.map((msg, i) => (
      <div key={i} className="text-sm bg-card-bg p-2 rounded">
        {msg}
      </div>
    ))}
  </div>
);`;

export const factoryPattern = `// Factory Pattern
class ButtonFactory {
  static createButton(type) {
    const buttons = {
      primary: {
        style: 'bg-primary text-white',
        label: 'Primary Button'
      },
      secondary: {
        style: 'bg-secondary text-white',
        label: 'Secondary Button'
      },
      outline: {
        style: 'border-2 border-primary text-primary',
        label: 'Outline Button'
      }
    };

    return buttons[type] || buttons.primary;
  }
}

// Test
const types = ['primary', 'secondary', 'outline'];
const buttons = types.map(type => ButtonFactory.createButton(type));

render(
  <div className="space-y-3">
    <p className="font-semibold text-foreground mb-3">
      Factory Pattern - Creating buttons:
    </p>
    {buttons.map((btn, i) => (
      <div
        key={i}
        className={'p-3 rounded-lg ' + btn.style}
      >
        {btn.label}
      </div>
    ))}
  </div>
);`;

export const decoratorPattern = `// Decorator Pattern
function withLogging(fn) {
  return function(...args) {
    console.log(\`Calling \${fn.name} with:\`, args);
    const result = fn(...args);
    console.log(\`Result:\`, result);
    return result;
  };
}

function withTiming(fn) {
  return function(...args) {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    return { result, time: (end - start).toFixed(2) };
  };
}

// Original function
function add(a, b) {
  return a + b;
}

// Decorate
const timedAdd = withTiming(add);
const result = timedAdd(5, 3);

render(
  <div>
    <p className="mb-2 text-sm text-secondary">
      Original function decorated with timing
    </p>
    <p className="font-semibold text-primary">
      Result: {result.result}
    </p>
    <p className="text-sm text-secondary">
      Execution time: {result.time}ms
    </p>
  </div>
);`;

export const modulePattern = `// Module Pattern
const Counter = (() => {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
})();

// Test
const results = [];
results.push(\`Initial: \${Counter.getCount()}\`);
results.push(\`After increment: \${Counter.increment()}\`);
results.push(\`After increment: \${Counter.increment()}\`);
results.push(\`After decrement: \${Counter.decrement()}\`);

render(
  <div className="space-y-2">
    <p className="font-semibold text-primary mb-2">
      Module Pattern - Private state:
    </p>
    {results.map((text, i) => (
      <div key={i} className="text-sm bg-card-bg p-2 rounded">
        {text}
      </div>
    ))}
    <p className="text-sm text-secondary mt-3">
      count variable is private and inaccessible
    </p>
  </div>
);`;
