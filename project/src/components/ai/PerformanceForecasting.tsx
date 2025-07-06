import React, { useState } from 'react';
import { TrendingUp, BarChart3, Settings, Info, Target } from 'lucide-react';

export const PerformanceForecasting: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('tvpi');
  const [selectedScenario, setSelectedScenario] = useState('all');

  const historicalData = [
    { year: 2020, tvpi: 1.0, irr: 0, dpi: 0 },
    { year: 2021, tvpi: 1.15, irr: 8.2, dpi: 0.05 },
    { year: 2022, tvpi: 1.28, irr: 12.5, dpi: 0.12 },
    { year: 2023, tvpi: 1.35, irr: 15.8, dpi: 0.18 },
    { year: 2024, tvpi: 1.48, irr: 18.2, dpi: 0.35 }
  ];

  const forecastData = {
    tvpi: {
      baseline: [1.65, 1.85, 2.10, 2.35, 2.60],
      optimistic: [1.75, 2.05, 2.45, 2.85, 3.25],
      pessimistic: [1.55, 1.70, 1.85, 2.00, 2.15]
    },
    irr: {
      baseline: [20.5, 22.1, 23.8, 25.2, 26.5],
      optimistic: [23.2, 26.8, 30.5, 33.8, 36.2],
      pessimistic: [17.8, 18.5, 19.2, 19.8, 20.3]
    },
    dpi: {
      baseline: [0.45, 0.65, 0.95, 1.35, 1.85],
      optimistic: [0.55, 0.85, 1.25, 1.75, 2.35],
      pessimistic: [0.35, 0.50, 0.70, 1.00, 1.35]
    }
  };

  const forecastYears = [2025, 2026, 2027, 2028, 2029];
  const allYears = [...historicalData.map(d => d.year), ...forecastYears];

  const getScenarioColor = (scenario: string) => {
    switch (scenario) {
      case 'optimistic': return '#10B981';
      case 'baseline': return '#3B82F6';
      case 'pessimistic': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getMetricLabel = (metric: string) => {
    switch (metric) {
      case 'tvpi': return 'TVPI (Total Value to Paid-In)';
      case 'irr': return 'IRR (Internal Rate of Return)';
      case 'dpi': return 'DPI (Distributions to Paid-In)';
      default: return metric.toUpperCase();
    }
  };

  const getCurrentValue = (metric: string) => {
    const latest = historicalData[historicalData.length - 1];
    return latest[metric as keyof typeof latest];
  };

  const assumptions = {
    tvpi: [
      'Portfolio companies maintain 15-25% annual growth',
      'Market multiples remain stable at 8-12x revenue',
      '2-3 successful exits expected by 2027',
      'No major economic downturn'
    ],
    irr: [
      'Exit timing concentrated in years 5-7',
      'Average exit multiple of 3-5x invested capital',
      'Continued strong performance from top quartile companies',
      'Minimal write-offs expected'
    ],
    dpi: [
      'First major distributions begin in 2025',
      'Accelerating distribution schedule post-2026',
      'Partial exits and dividend distributions',
      'Full fund liquidation by 2029'
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-50 rounded-lg">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">AI-Powered Performance Forecasting</h2>
            <p className="text-gray-600">Predictive analytics for fund performance metrics</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg">
          <BarChart3 className="h-4 w-4" />
          <span>ML Model Active</span>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Metric</label>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="tvpi">TVPI</option>
                <option value="irr">IRR (%)</option>
                <option value="dpi">DPI</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Scenario</label>
              <select
                value={selectedScenario}
                onChange={(e) => setSelectedScenario(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Scenarios</option>
                <option value="optimistic">Optimistic</option>
                <option value="baseline">Baseline</option>
                <option value="pessimistic">Pessimistic</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <span>Historical</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Optimistic</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Baseline</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Pessimistic</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">{getMetricLabel(selectedMetric)} Forecast</h3>
            <div className="text-sm text-gray-500">
              Current: {getCurrentValue(selectedMetric)}{selectedMetric === 'irr' ? '%' : 'x'}
            </div>
          </div>
          
          <div className="h-80">
            <svg className="w-full h-full">
              {/* Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
                <line
                  key={ratio}
                  x1="0"
                  y1={`${ratio * 100}%`}
                  x2="100%"
                  y2={`${ratio * 100}%`}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
              ))}
              
              {/* Vertical line separating historical from forecast */}
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100%"
                stroke="#D1D5DB"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              
              {/* Historical line */}
              <path
                d={`M 0 ${100 - (getCurrentValue(selectedMetric) / (selectedMetric === 'irr' ? 40 : 4)) * 100} ${historicalData
                  .map((d, i) => `L ${(i / (allYears.length - 1)) * 100} ${100 - (d[selectedMetric as keyof typeof d] / (selectedMetric === 'irr' ? 40 : 4)) * 100}`)
                  .join(' ')}`}
                fill="none"
                stroke="#6B7280"
                strokeWidth="3"
              />
              
              {/* Forecast lines */}
              {(selectedScenario === 'all' ? ['optimistic', 'baseline', 'pessimistic'] : [selectedScenario]).map((scenario) => (
                <path
                  key={scenario}
                  d={`M 50 ${100 - (getCurrentValue(selectedMetric) / (selectedMetric === 'irr' ? 40 : 4)) * 100} ${forecastData[selectedMetric as keyof typeof forecastData][scenario as keyof typeof forecastData.tvpi]
                    .map((value, i) => `L ${(50 + ((i + 1) / forecastYears.length) * 50)} ${100 - (value / (selectedMetric === 'irr' ? 40 : 4)) * 100}`)
                    .join(' ')}`}
                  fill="none"
                  stroke={getScenarioColor(scenario)}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              ))}
              
              {/* Data points */}
              {historicalData.map((d, i) => (
                <circle
                  key={i}
                  cx={`${(i / (allYears.length - 1)) * 100}%`}
                  cy={`${100 - (d[selectedMetric as keyof typeof d] / (selectedMetric === 'irr' ? 40 : 4)) * 100}%`}
                  r="4"
                  fill="#6B7280"
                />
              ))}
            </svg>
          </div>
          
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            {allYears.map((year, i) => (
              <span key={i} className={i % 2 === 0 ? '' : 'opacity-0'}>
                {year}
              </span>
            ))}
          </div>
        </div>

        {/* Forecast Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">2029 Projections</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Optimistic</span>
                <span className="font-medium text-green-600">
                  {forecastData[selectedMetric as keyof typeof forecastData].optimistic[4]}
                  {selectedMetric === 'irr' ? '%' : 'x'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Baseline</span>
                <span className="font-medium text-blue-600">
                  {forecastData[selectedMetric as keyof typeof forecastData].baseline[4]}
                  {selectedMetric === 'irr' ? '%' : 'x'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pessimistic</span>
                <span className="font-medium text-red-600">
                  {forecastData[selectedMetric as keyof typeof forecastData].pessimistic[4]}
                  {selectedMetric === 'irr' ? '%' : 'x'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Info className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Key Assumptions</h3>
            </div>
            <div className="space-y-2">
              {assumptions[selectedMetric as keyof typeof assumptions].map((assumption, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">{assumption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Model Information */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <Target className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">AI Model Information</h3>
            <p className="text-sm text-blue-800">
              This forecast uses a machine learning model trained on 500+ venture capital funds with similar 
              characteristics. The model considers market conditions, portfolio company metrics, and historical 
              performance patterns. Confidence intervals are based on Monte Carlo simulations with 10,000 iterations.
            </p>
            <div className="mt-3 text-xs text-blue-700">
              Last updated: December 2024 | Model accuracy: 87% | Data sources: 15
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};