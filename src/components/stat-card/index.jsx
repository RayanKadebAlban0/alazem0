import React from 'react';
import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";
import './styles.js';
import { Styles } from './styles.js';


// 1. المكون الأب
const StatCard = ({ children }) => (
  <div className="stat-card">{children}</div>
);

// 2. العنوان
const CardTitle = ({ children }) => (
  <h3 className="card-title">{children}</h3>
);

// 3. القيمة
const CardValue = ({ value, unit, className = "" }) => (
  <div className={`card-value-container ${className}`}>
    <span className="card-value">{value}</span>
    {unit && <span className="card-unit">{unit}</span>}
  </div>
);

// 4. التوجه
const CardTrend = ({ value, type }) => {
  const isIncrease = type === 'increase';
  const statusClass = isIncrease ? 'trend-increase' : 'trend-decrease';
  const Icon = isIncrease ? HiArrowTrendingUp : HiArrowTrendingDown;

    return (
        <Styles>
            <div>
    <div className={`card-trend ${statusClass}`}>
      <span>{value}</span>
      <Icon size={16} />
                </div>
                </div>
            </Styles>
  );
};

// ربط المكونات الفرعية بالأب
StatCard.Title = CardTitle;
StatCard.Value = CardValue;
StatCard.Trend = CardTrend;

export default StatCard;