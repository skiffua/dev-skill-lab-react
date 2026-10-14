// Data types for API responses and canvas visualization

export interface ChartData {
  labels: string[];
  values: number[];
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  conditions: string;
}

export interface StatsData {
  users: number;
  revenue: number;
  growth: number;
}

export interface CanvasPoint {
  x: number;
  y: number;
}

export interface DrawOptions {
  lineColor?: string;
  lineWidth?: number;
  fillColor?: string;
  fontSize?: number;
  fontFamily?: string;
}
