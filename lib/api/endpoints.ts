import { apiClient } from './client';
import { setupMockAdapter } from './mock-adapter';
import type { ChartData, WeatherData, StatsData } from '@/lib/types/data';

// Setup mock adapter in development mode
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  setupMockAdapter(apiClient);
}

// API endpoint functions
export const endpoints = {
  // Get chart data
  getChartData: async (): Promise<ChartData> => {
    const response = await apiClient.get<ChartData>('/api/chart-data');
    return response.data;
  },

  // Get weather data
  getWeather: async (): Promise<WeatherData> => {
    const response = await apiClient.get<WeatherData>('/api/weather');
    return response.data;
  },

  // Get statistics data
  getStats: async (): Promise<StatsData> => {
    const response = await apiClient.get<StatsData>('/api/stats');
    return response.data;
  },

  // Get monthly data
  getMonthlyData: async (): Promise<ChartData> => {
    const response = await apiClient.get<ChartData>('/api/monthly-data');
    return response.data;
  },
};

export default endpoints;
