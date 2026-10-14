// Canvas visualization examples using React.createElement
// Following the same pattern as algorithms.ts and patterns.ts

export const lineChartExample = `// Line Chart - Simple trend visualization
function drawLineChart() {
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 300;
  canvas.style.border = '1px solid var(--border)';
  canvas.style.borderRadius = '8px';

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const data = [65, 59, 80, 81, 56, 72, 90];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const padding = 40;
  const width = canvas.width;
  const height = canvas.height;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const maxValue = Math.max(...data);
  const scale = chartHeight / maxValue;
  const stepX = chartWidth / (data.length - 1);

  // Draw axes
  ctx.strokeStyle = getComputedStyle(document.documentElement)
    .getPropertyValue('--foreground');
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();

  // Draw line
  ctx.strokeStyle = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary');
  ctx.lineWidth = 2;
  ctx.beginPath();

  data.forEach((value, i) => {
    const x = padding + i * stepX;
    const y = height - padding - value * scale;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.stroke();

  // Draw points
  ctx.fillStyle = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary');
  data.forEach((value, i) => {
    const x = padding + i * stepX;
    const y = height - padding - value * scale;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  // Draw labels
  ctx.fillStyle = getComputedStyle(document.documentElement)
    .getPropertyValue('--foreground');
  ctx.font = '12px monospace';
  ctx.textAlign = 'center';
  labels.forEach((label, i) => {
    const x = padding + i * stepX;
    ctx.fillText(label, x, height - padding + 20);
  });

  return canvas;
}

const { createElement: h } = React;
render(
  h('div', { className: 'space-y-3' },
    h('p', { className: 'text-sm text-secondary mb-2' },
      'Weekly trend visualization'
    ),
    drawLineChart(),
    h('p', { className: 'text-xs text-secondary mt-2' },
      'Values: [65, 59, 80, 81, 56, 72, 90]'
    )
  )
);`;

export const barChartExample = `// Bar Chart - Categorical data comparison
function drawBarChart() {
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 300;
  canvas.style.border = '1px solid var(--border)';
  canvas.style.borderRadius = '8px';

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const data = [45, 67, 89, 54, 78, 92];
  const labels = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];

  const padding = 40;
  const width = canvas.width;
  const height = canvas.height;
  const chartHeight = height - padding * 2;

  const maxValue = Math.max(...data);
  const scale = chartHeight / maxValue;
  const barWidth = (width - padding * 2) / data.length - 15;

  // Draw bars
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary');

  data.forEach((value, i) => {
    const x = padding + i * (barWidth + 15);
    const barHeight = value * scale;
    const y = height - padding - barHeight;

    // Bar with gradient effect
    const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
    gradient.addColorStop(0, primaryColor);
    gradient.addColorStop(1, primaryColor + '80');

    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, barWidth, barHeight);

    // Value on top
    ctx.fillStyle = getComputedStyle(document.documentElement)
      .getPropertyValue('--foreground');
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(value.toString(), x + barWidth / 2, y - 5);

    // Label
    ctx.fillText(labels[i], x + barWidth / 2, height - padding + 20);
  });

  return canvas;
}

const { createElement: h } = React;
render(
  h('div', { className: 'space-y-3' },
    h('p', { className: 'text-sm text-secondary mb-2' },
      'Quarterly performance comparison'
    ),
    drawBarChart(),
    h('p', { className: 'text-xs text-secondary mt-2' },
      'Gradient bars with data labels'
    )
  )
);`;

export const pieChartExample = `// Pie Chart - Percentage breakdown
function drawPieChart() {
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 300;
  canvas.style.border = '1px solid var(--border)';
  canvas.style.borderRadius = '8px';

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const data = [35, 25, 20, 15, 5];
  const labels = ['React', 'Vue', 'Angular', 'Svelte', 'Other'];
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 80;

  const total = data.reduce((sum, val) => sum + val, 0);
  let currentAngle = -Math.PI / 2;

  data.forEach((value, i) => {
    const sliceAngle = (value / total) * Math.PI * 2;

    // Draw slice
    ctx.fillStyle = colors[i];
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.closePath();
    ctx.fill();

    // Draw border
    ctx.strokeStyle = getComputedStyle(document.documentElement)
      .getPropertyValue('--background');
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw label
    const labelAngle = currentAngle + sliceAngle / 2;
    const labelX = centerX + Math.cos(labelAngle) * (radius + 40);
    const labelY = centerY + Math.sin(labelAngle) * (radius + 40);

    ctx.fillStyle = getComputedStyle(document.documentElement)
      .getPropertyValue('--foreground');
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(labels[i], labelX, labelY);

    const percentage = ((value / total) * 100).toFixed(1);
    ctx.fillText(percentage + '%', labelX, labelY + 15);

    currentAngle += sliceAngle;
  });

  return canvas;
}

const { createElement: h } = React;
render(
  h('div', { className: 'space-y-3' },
    h('p', { className: 'text-sm text-secondary mb-2' },
      'Framework popularity distribution'
    ),
    drawPieChart(),
    h('p', { className: 'text-xs text-secondary mt-2' },
      'Data: React 35%, Vue 25%, Angular 20%, Svelte 15%, Other 5%'
    )
  )
);`;

export const animationExample = `// Animated Canvas - Bouncing Ball
function BouncingBall() {
  const [isRunning, setIsRunning] = React.useState(false);
  const canvasRef = React.useRef(null);
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    if (!isRunning || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let x = 50;
    let y = 50;
    let dx = 3;
    let dy = 2;
    const radius = 15;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ball
      const gradient = ctx.createRadialGradient(x - 5, y - 5, 0, x, y, radius);
      gradient.addColorStop(0, getComputedStyle(document.documentElement)
        .getPropertyValue('--primary'));
      gradient.addColorStop(1, getComputedStyle(document.documentElement)
        .getPropertyValue('--primary') + '60');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Bounce off walls
      if (x + radius > canvas.width || x - radius < 0) dx = -dx;
      if (y + radius > canvas.height || y - radius < 0) dy = -dy;

      x += dx;
      y += dy;

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning]);

  const { createElement: h } = React;

  return h('div', { className: 'space-y-3' },
    h('canvas', {
      ref: canvasRef,
      width: 500,
      height: 300,
      style: {
        border: '1px solid var(--border)',
        borderRadius: '8px',
        display: 'block'
      }
    }),
    h('button', {
      onClick: () => setIsRunning(!isRunning),
      className: 'px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors',
      style: { marginTop: '10px' }
    }, isRunning ? 'Stop' : 'Start')
  );
}

const { createElement: h } = React;
render(h(BouncingBall));`;

export const apiChartExample = `// API Integration - Fetch and visualize data
function ApiChart() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const canvasRef = React.useRef(null);

  const fetchData = () => {
    setLoading(true);
    fetch('/api/chart-data')
      .then(res => res.json())
      .then(chartData => {
        setData(chartData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    if (!data || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const padding = 40;
    const width = canvas.width;
    const height = canvas.height;
    const chartHeight = height - padding * 2;

    const maxValue = Math.max(...data.values);
    const scale = chartHeight / maxValue;
    const barWidth = (width - padding * 2) / data.values.length - 10;

    // Draw bars
    data.values.forEach((value, i) => {
      const x = padding + i * (barWidth + 10);
      const barHeight = value * scale;
      const y = height - padding - barHeight;

      const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
      const primary = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary');
      gradient.addColorStop(0, primary);
      gradient.addColorStop(1, primary + '60');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, barHeight);

      // Labels
      ctx.fillStyle = getComputedStyle(document.documentElement)
        .getPropertyValue('--foreground');
      ctx.font = '11px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(value.toString(), x + barWidth / 2, y - 5);
      ctx.fillText(data.labels[i], x + barWidth / 2, height - padding + 20);
    });
  }, [data]);

  const { createElement: h } = React;

  return h('div', { className: 'space-y-3' },
    h('canvas', {
      ref: canvasRef,
      width: 500,
      height: 300,
      style: {
        border: '1px solid var(--border)',
        borderRadius: '8px',
        display: 'block'
      }
    }),
    h('button', {
      onClick: fetchData,
      disabled: loading,
      className: 'px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50',
      style: { marginTop: '10px' }
    }, loading ? 'Loading...' : 'Fetch Data'),
    data && h('p', { className: 'text-xs text-success' },
      'Data loaded: ' + data.values.length + ' points'
    )
  );
}

const { createElement: h } = React;
render(h(ApiChart));`;

export const weatherDashboardExample = `// Weather Dashboard - Multiple API calls
function WeatherDashboard() {
  const [weather, setWeather] = React.useState(null);
  const [stats, setStats] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [weatherRes, statsRes] = await Promise.all([
        fetch('/api/weather'),
        fetch('/api/stats')
      ]);

      const weatherData = await weatherRes.json();
      const statsData = await statsRes.json();

      setWeather(weatherData);
      setStats(statsData);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const { createElement: h } = React;

  return h('div', { className: 'space-y-4' },
    h('button', {
      onClick: fetchAll,
      disabled: loading,
      className: 'px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50'
    }, loading ? 'Loading...' : 'Load Dashboard'),

    weather && h('div', { className: 'p-4 bg-card-bg rounded-lg border border-border' },
      h('h3', { className: 'font-bold text-lg mb-2' }, 'Weather'),
      h('div', { className: 'grid grid-cols-3 gap-3 text-sm' },
        h('div', null,
          h('p', { className: 'text-secondary' }, 'Temperature'),
          h('p', { className: 'text-xl font-bold text-primary' }, weather.temperature + '°C')
        ),
        h('div', null,
          h('p', { className: 'text-secondary' }, 'Humidity'),
          h('p', { className: 'text-xl font-bold text-primary' }, weather.humidity + '%')
        ),
        h('div', null,
          h('p', { className: 'text-secondary' }, 'Conditions'),
          h('p', { className: 'text-xl font-bold text-primary' }, weather.conditions)
        )
      )
    ),

    stats && h('div', { className: 'p-4 bg-card-bg rounded-lg border border-border' },
      h('h3', { className: 'font-bold text-lg mb-2' }, 'Statistics'),
      h('div', { className: 'grid grid-cols-3 gap-3 text-sm' },
        h('div', null,
          h('p', { className: 'text-secondary' }, 'Users'),
          h('p', { className: 'text-xl font-bold text-success' }, stats.users.toLocaleString())
        ),
        h('div', null,
          h('p', { className: 'text-secondary' }, 'Revenue'),
          h('p', { className: 'text-xl font-bold text-success' }, '$' + stats.revenue.toLocaleString())
        ),
        h('div', null,
          h('p', { className: 'text-secondary' }, 'Growth'),
          h('p', { className: 'text-xl font-bold text-success' }, '+' + stats.growth + '%')
        )
      )
    )
  );
}

const { createElement: h } = React;
render(h(WeatherDashboard));`;
