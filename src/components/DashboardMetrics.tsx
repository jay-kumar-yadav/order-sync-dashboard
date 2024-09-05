import React from 'react';

const DashboardMetrics: React.FC = () => {
  return (
    <section className="dashboard-metrics">
      <div className="metrics-box">
        <h2>Order Sync Successful</h2>
        <p>Your order details from the last 30 days have been successfully synced.</p>
      </div>
      <div className="metrics-box">
        <h2>Customize Customer Notification</h2>
        <p>Take Your Email Experience Next Level</p>
      </div>
      <div className="metrics-box">
        <h2>Your Tracking Link has been generated</h2>
        <button>Copy Link</button>
      </div>
    </section>
  );
};

export default DashboardMetrics;
