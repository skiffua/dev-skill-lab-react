# Testing Live Coding

## Виправлення JSX помилок

Якщо бачите помилку `SyntaxError: Unexpected token, expected ","` - це означає що JSX не компілюється правильно.

### Виправлено:

1. **Додано React в scope** - `CodePlayground.tsx` тепер включає React в scope
2. **Додано JSX pragma** - всі приклади мають `/** @jsx React.createElement */`

### Як тестувати:

```bash
# 1. Запустіть dev сервер
npm run dev

# 2. Відкрийте в браузері:
# http://localhost:3000/login
# Username: demo
# Password: demo123

# 3. Перейдіть на:
# /algorithms - тестуйте алгоритми
# /patterns - тестуйте паттерни

# 4. Спробуйте редагувати код в editor
# Результат має оновлюватися одразу
```

### Приклад що має працювати:

```javascript
/** @jsx React.createElement */

function example() {
  const data = [5, 2, 8, 1, 9];
  const sorted = data.sort((a, b) => a - b);
  
  return (
    <div className="p-4">
      <p>Original: {data.join(', ')}</p>
      <p className="text-primary">
        Sorted: {sorted.join(', ')}
      </p>
    </div>
  );
}

render(<example />);
```

### Якщо проблеми залишилися:

1. **Перезапустіть dev server**: `npm run dev`
2. **Очистіть cache**: `rm -rf .next`
3. **Перевірте console в браузері** на помилки
4. **Переконайтеся що React в scope** - має бути автоматично

### Відомі обмеження:

- JSX працює тільки з pragma `/** @jsx React.createElement */`
- Код виконується в ізольованому scope
- Немає доступу до зовнішніх змінних (якщо не передані в scope prop)
- Кожен приклад незалежний

### Структура прикладу:

```javascript
/** @jsx React.createElement */  // ← ОБОВ'ЯЗКОВО!

// Ваш код тут
function myFunction() {
  // логіка
}

// Результат
render(
  <div>
    {/* JSX тут */}
  </div>
);
```
