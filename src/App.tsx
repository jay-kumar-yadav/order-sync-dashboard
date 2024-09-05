import React from 'react';
import Header from './components/Header';
import DashboardMetrics from './components/DashboardMetrics';
import PerformanceMetrics from './components/PerformanceMetrics';
import FunctionalitySection from './components/FunctionalitySection';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <DashboardMetrics />
      <PerformanceMetrics />
      <FunctionalitySection />
    </div>
  );
};

export default App;
