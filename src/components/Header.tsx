import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Welcome, John Mathew!!</h1>
        <div className="header-actions">
          <button>Explore Your Orders</button>
          <button>Configure Notifications</button>
          <button>Copy Link</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
