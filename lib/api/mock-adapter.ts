import MockAdapter from 'axios-mock-adapter';
import type { AxiosInstance } from 'axios';
import type { ChartData, WeatherData, StatsData } from '@/lib/types/data';

// Create mock adapter instance
export function setupMockAdapter(axiosInstance: AxiosInstance) {
  const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

  // Mock chart data endpoint
  mock.onGet('/api/chart-data').reply<ChartData>(200, {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [65, 59, 80, 81, 56, 72],
  });

  // Mock weather data endpoint
  mock.onGet('/api/weather').reply<WeatherData>(200, {
    temperature: 22,
    humidity: 60,
    conditions: 'Sunny',
  });

  // Mock statistics endpoint
  mock.onGet('/api/stats').reply<StatsData>(200, {
    users: 1250,
    revenue: 45000,
    growth: 15.3,
  });

  // Mock monthly data endpoint (for more complex charts)
  mock.onGet('/api/monthly-data').reply(200, {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [30, 45, 60, 55, 70, 85, 90, 75, 80, 95, 88, 100],
  });

  console.log('[Mock Adapter] Initialized with test endpoints');

  return mock;
}
