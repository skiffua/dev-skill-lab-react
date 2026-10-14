// Canvas drawing utility functions

/**
 * Get theme color from CSS variables
 */
export function getThemeColor(colorName: string): string {
  if (typeof window === 'undefined') return '#000000';

  const root = document.documentElement;
  const value = getComputedStyle(root).getPropertyValue(`--${colorName}`).trim();
  return value || '#000000';
}

/**
 * Clear canvas
 */
export function clearCanvas(ctx: CanvasRenderingContext2D): void {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

/**
 * Draw line chart
 */
export function drawLineChart(
  ctx: CanvasRenderingContext2D,
  data: number[],
  options: {
    labels?: string[];
    color?: string;
    lineWidth?: number;
    padding?: number;
  } = {}
): void {
  const {
    labels = [],
    color = getThemeColor('primary'),
    lineWidth = 2,
    padding = 50,
  } = options;

  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Find max value for scaling
  const maxValue = Math.max(...data);
  const scale = chartHeight / maxValue;

  // Draw axes
  ctx.strokeStyle = getThemeColor('foreground');
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();

  // Draw data line
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();

  const stepX = chartWidth / (data.length - 1 || 1);

  data.forEach((value, i) => {
    const x = padding + i * stepX;
    const y = height - padding - value * scale;

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });

  ctx.stroke();

  // Draw points
  ctx.fillStyle = color;
  data.forEach((value, i) => {
    const x = padding + i * stepX;
    const y = height - padding - value * scale;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  // Draw labels if provided
  if (labels.length > 0) {
    ctx.fillStyle = getThemeColor('foreground');
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';

    labels.forEach((label, i) => {
      const x = padding + i * stepX;
      ctx.fillText(label, x, height - padding + 20);
    });
  }
}

/**
 * Draw bar chart
 */
export function drawBarChart(
  ctx: CanvasRenderingContext2D,
  data: number[],
  options: {
    labels?: string[];
    colors?: string[];
    padding?: number;
  } = {}
): void {
  const {
    labels = [],
    colors = [getThemeColor('primary')],
    padding = 50,
  } = options;

  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const chartHeight = height - padding * 2;

  const maxValue = Math.max(...data);
  const scale = chartHeight / maxValue;

  const barWidth = (width - padding * 2) / data.length - 10;

  data.forEach((value, i) => {
    const x = padding + i * (barWidth + 10);
    const barHeight = value * scale;
    const y = height - padding - barHeight;

    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(x, y, barWidth, barHeight);

    // Draw value on top
    ctx.fillStyle = getThemeColor('foreground');
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(value.toString(), x + barWidth / 2, y - 5);

    // Draw label
    if (labels[i]) {
      ctx.fillText(labels[i], x + barWidth / 2, height - padding + 20);
    }
  });
}

/**
 * Draw pie chart
 */
export function drawPieChart(
  ctx: CanvasRenderingContext2D,
  data: number[],
  options: {
    labels?: string[];
    colors?: string[];
  } = {}
): void {
  const {
    labels = [],
    colors = [
      getThemeColor('primary'),
      getThemeColor('secondary'),
      getThemeColor('accent'),
      '#10b981',
      '#f59e0b',
      '#ef4444',
    ],
  } = options;

  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 3;

  const total = data.reduce((sum, val) => sum + val, 0);
  let currentAngle = -Math.PI / 2;

  data.forEach((value, i) => {
    const sliceAngle = (value / total) * Math.PI * 2;

    // Draw slice
    ctx.fillStyle = colors[i % colors.length];
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.closePath();
    ctx.fill();

    // Draw label
    if (labels[i]) {
      const labelAngle = currentAngle + sliceAngle / 2;
      const labelX = centerX + Math.cos(labelAngle) * (radius + 30);
      const labelY = centerY + Math.sin(labelAngle) * (radius + 30);

      ctx.fillStyle = getThemeColor('foreground');
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(labels[i], labelX, labelY);

      const percentage = ((value / total) * 100).toFixed(1);
      ctx.fillText(`${percentage}%`, labelX, labelY + 15);
    }

    currentAngle += sliceAngle;
  });
}
