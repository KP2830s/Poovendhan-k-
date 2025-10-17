import React, { useState } from 'react';
import './Customers.css';

const Customers = () => {
  const [customers] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '(555) 123-4567',
      address: '123 Main St, New York, NY 10001',
      totalOrders: 5,
      totalSpent: 3450.50,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '(555) 987-6543',
      address: '456 Oak Ave, Los Angeles, CA 90210',
      totalOrders: 3,
      totalSpent: 1249.97,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Mike Davis',
      email: 'mike.davis@email.com',
      phone: '(555) 456-7890',
      address: '789 Pine St, Chicago, IL 60601',
      totalOrders: 7,
      totalSpent: 5680.25,
      status: 'Active'
    },
    {
      id: 4,
      name: 'Emily Wilson',
      email: 'emily.wilson@email.com',
      phone: '(555) 234-5678',
      address: '321 Elm St, Houston, TX 77001',
      totalOrders: 2,
      totalSpent: 899.98,
      status: 'Inactive'
    },
    {
      id: 5,
      name: 'Robert Brown',
      email: 'robert.brown@email.com',
      phone: '(555) 876-5432',
      address: '654 Maple Ave, Phoenix, AZ 85001',
      totalOrders: 4,
      totalSpent: 2150.75,
      status: 'Active'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusClass = (status) => {
    return status === 'Active' ? 'status-active' : 'status-inactive';
  };

  return (
    <div className="customers-container">
      <div className="customers-header">
        <h1>Customer List</h1>
        <p>View and manage all customers</p>
      </div>

      <div className="customers-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="status-filter">
          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Orders</th>
              <th>Total Spent</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => (
              <tr key={customer.id}>
                <td>
                  <div className="customer-info">
                    <div className="customer-avatar">
                      {customer.name.charAt(0)}
                    </div>
                    <div>
                      <div className="customer-name">{customer.name}</div>
                      <div className="customer-id">ID: {customer.id}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contact-info">
                    <div className="customer-email">{customer.email}</div>
                    <div className="customer-phone">{customer.phone}</div>
                  </div>
                </td>
                <td>
                  <div className="customer-address">{customer.address}</div>
                </td>
                <td>
                  <div className="order-count">{customer.totalOrders} orders</div>
                </td>
                <td>
                  <div className="total-spent">${customer.totalSpent.toFixed(2)}</div>
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(customer.status)}`}>
                    {customer.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-view">View</button>
                    <button className="btn-edit">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredCustomers.length === 0 && (
        <div className="no-customers">
          <div className="no-customers-icon">👥</div>
          <h3>No customers found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Customers;