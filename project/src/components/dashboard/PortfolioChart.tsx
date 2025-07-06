import React from 'react';

export const PortfolioChart: React.FC = () => {
  const data = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 105 },
    { month: 'Mar', value: 110 },
    { month: 'Apr', value: 115 },
    { month: 'May', value: 120 },
    { month: 'Jun', value: 125 },
    { month: 'Jul', value: 130 },
    { month: 'Aug', value: 135 },
    { month: 'Sep', value: 140 },
    { month: 'Oct', value: 145 },
    { month: 'Nov', value: 148 },
    { month: 'Dec', value: 150 }
  ];

  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));

  return (
    <div className="h-64 w-full">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
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
        
        {/* Chart area */}
        <path
          d={`M 0 ${100 - ((data[0].value - minValue) / (maxValue - minValue)) * 100} ${data
            .map((d, i) => `L ${(i / (data.length - 1)) * 100} ${100 - ((d.value - minValue) / (maxValue - minValue)) * 100}`)
            .join(' ')} L 100 100 L 0 100 Z`}
          fill="url(#portfolioGradient)"
        />
        
        {/* Chart line */}
        <path
          d={`M 0 ${100 - ((data[0].value - minValue) / (maxValue - minValue)) * 100} ${data
            .map((d, i) => `L ${(i / (data.length - 1)) * 100} ${100 - ((d.value - minValue) / (maxValue - minValue)) * 100}`)
            .join(' ')}`}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        
        {/* Data points */}
        {data.map((d, i) => (
          <circle
            key={i}
            cx={`${(i / (data.length - 1)) * 100}%`}
            cy={`${100 - ((d.value - minValue) / (maxValue - minValue)) * 100}%`}
            r="3"
            fill="#3B82F6"
            className="hover:r-4 transition-all cursor-pointer"
          />
        ))}
      </svg>
      
      {/* X-axis labels */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        {data.map((d, i) => (
          <span key={i} className={i % 2 === 0 ? '' : 'opacity-0'}>
            {d.month}
          </span>
        ))}
      </div>
    </div>
  );
};