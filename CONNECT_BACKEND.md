# 🔌 Підключення до Backend API

## Backend вже запущено!

Backend API працює на **http://localhost:4000**

---

## Як підключити frontend до реального API

### 1. Вимкніть mock adapter

Відкрийте файл [lib/api/endpoints.ts](lib/api/endpoints.ts) і закоментуйте рядки:

```typescript
// ЗАКОМЕНТУЙТЕ ЦІ РЯДКИ:
// if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
//   setupMockAdapter(apiClient);
// }
```

### 2. Перезапустіть frontend сервер

```bash
# Ctrl+C щоб зупинити поточний dev server
# Потім:
npm run dev
```

### 3. Перевірте підключення

1. Відкрийте http://localhost:3000
2. Login: `demo` / `demo123`
3. Перейдіть на `/data-visualization`
4. Натисніть "Fetch Data" на API Data Chart
5. Натисніть "Load Dashboard" на Weather Dashboard

**Перевірте DevTools Network tab** - запити повинні йти на `http://localhost:4000/api/*`

---

## Доступні API endpoints

### Chart Data
- `GET /api/chart-data` - 6 місяців
- `GET /api/monthly-data` - 12 місяців
- `GET /api/quarterly-data` - Квартали
- `GET /api/random-data?points=10` - Випадкові дані

### Weather
- `GET /api/weather` - Поточна погода
- `GET /api/weather/random` - Випадкова погода
- `GET /api/weather/forecast` - Прогноз на 5 днів

### Statistics
- `GET /api/stats` - Загальна статистика
- `GET /api/stats/dashboard` - Dashboard метрики
- `GET /api/stats/performance` - Performance метрики
- `GET /api/stats/realtime` - Real-time статистика

### Users (CRUD)
- `GET /api/users` - Список користувачів
- `GET /api/users/:id` - Користувач за ID
- `POST /api/users` - Створити користувача
- `PUT /api/users/:id` - Оновити користувача
- `DELETE /api/users/:id` - Видалити користувача

---

## Структура відповідей

Backend повертає:
```json
{
  "success": true,
  "data": { ... },
  "timestamp": "2024-10-14T14:30:00.000Z"
}
```

Якщо потрібно, оновіть код для обробки цієї структури:

```typescript
// Було:
const data = await response.data;

// Стало:
const response = await apiClient.get('/api/chart-data');
const data = response.data.data; // response.data.data
```

---

## Troubleshooting

### CORS Error
Якщо бачите CORS помилку - перевірте, що backend запущено на порту 4000.

### Connection Refused
Якщо `ECONNREFUSED` - backend не запущено. Запустіть:
```bash
cd /home/oleh/web/Sites/dev-skill-lab-react-be
npm run dev
```

### 404 Not Found
Перевірте URL endpoint. Backend prefix: `/api/`

---

## Де знаходиться backend?

```
Шлях: /home/oleh/web/Sites/dev-skill-lab-react-be

Документація:
- README.md - Загальна інформація
- INTEGRATION.md - Детальна інструкція інтеграції
- BACKEND_COMPLETE.md - Що було створено
```

---

**Готово! Тепер ви маєте fullstack додаток.** 🚀
