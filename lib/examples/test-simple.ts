export const simpleTest = `function Hello() {
  return React.createElement('div', { className: 'p-4 text-primary' }, 'Hello World!');
}

render(React.createElement(Hello));`;

export const simpleJSXTest = `const { createElement: h } = React;

const message = "Hello from React!";

function App() {
  return h('div', { className: 'p-4 bg-card-bg rounded-lg' },
    h('h1', { className: 'text-xl font-bold text-primary' }, message),
    h('p', { className: 'text-secondary mt-2' }, 'This works without JSX!')
  );
}

render(h(App));`;
