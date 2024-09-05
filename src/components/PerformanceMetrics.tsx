import React from 'react';
import ShipmentUpdates from './ShipmentUpdates';

const PerformanceMetrics: React.FC = () => {
  return (
    <section className="performance-metrics">
      <div className="metrics-header">
        <button>Lifetime</button>
        <button>Last Week</button>
        <button>Last Month</button>
        <button>Last Year</button>
        <button>Customize Timeline</button>
      </div>
      <ShipmentUpdates />
      <div className="tracking-views">
        <p>Orders: 80</p>
        <p>Tracking Page Views: 44</p>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
