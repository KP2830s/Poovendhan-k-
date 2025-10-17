import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Mock data for dashboard stats
  const stats = [
    { id: 1, title: 'Total Sales', value: '$24,580', change: '+12.5%', icon: '💰' },
    { id: 2, title: 'New Users', value: '1,248', change: '+8.3%', icon: '👥' },
    { id: 3, title: 'Orders', value: '542', change: '+4.2%', icon: '📦' },
    { id: 4, title: 'Conversion Rate', value: '24.8%', change: '+2.1%', icon: '📈' }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening today.</p>
      </div>

      <div className="row">
        {stats.map((stat) => (
          <div className="col-md-6 col-lg-3" key={stat.id}>
            <div className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3>{stat.value}</h3>
                <p>{stat.title}</p>
                <span className="stat-change positive">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <div className="chart-container">
            <h3>Sales Overview</h3>
            <div className="chart-placeholder">
              <div className="chart-grid">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="chart-bar" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="top-products">
            <h3>Top Products</h3>
            <div className="product-list">
              {[
                { name: 'Wireless Headphones', sales: 124 },
                { name: 'Smart Watch', sales: 98 },
                { name: 'Bluetooth Speaker', sales: 87 },
                { name: 'Gaming Mouse', sales: 65 }
              ].map((product, index) => (
                <div className="product-item" key={index}>
                  <span className="product-name">{product.name}</span>
                  <span className="product-sales">{product.sales} sold</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;