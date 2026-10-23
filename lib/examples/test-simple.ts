export const simpleTest = `function Hello() {
  return React.createElement('div', { className: 'p-4 text-primary' }, 'Hello World!');
}

render(React.createElement(Hello));`;

export const simpleJSXTest = `const message = "Hello from React!";
function App() {
  return (<div>{message}</div>);
}

render(App);`;
