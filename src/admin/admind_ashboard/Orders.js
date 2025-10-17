import React, { useEffect, useState } from 'react';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    fetch(`${process.env.REACT_APP_API_URL}/orders`)
      .then(res => res.json())
      // .then(data => res.json(data))
      .then(data => { setOrders(data) })
      .catch(error => console.error('Fetch Error:', error))
    console.log("API URL:", process.env.REACT_APP_API_URL);

  }, [])


  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState('');


  const handleStatusChange = async (orderId, status) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || 'Failed to update order');
      }

      const result = await res.json(); // { status: "Shipped" }

      // ✅ Update both state and selectedOrder
      setOrders(prev => prev.map(order =>
        order.id === orderId ? { ...order, status: result.status } : order
      ));

      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder(prev => ({ ...prev, status: result.status }));
      }

    } catch (error) {
      console.error('Network error:', error);
      alert('Failed to update status: ' + error.message);
    }
  };

  const [loading, setLoading] = useState(false);

  const updateOrderStatus = async () => {
    if (selectedOrder && !loading) {
      setLoading(true);
      await handleStatusChange(selectedOrder.id, newStatus);
      setLoading(false);
    }
  };

  const openOrderDetails = (order) => {
    setSelectedOrder(order);
    setNewStatus(order.status);
  };

  const closeOrderDetails = () => {
    setSelectedOrder(null);
  };

  /*   const updateOrderStatus = () => {
      if (selectedOrder) {
        handleStatusChange(selectedOrder.id, newStatus);
        setSelectedOrder({ ...selectedOrder, status: newStatus });
      }
    }; */

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'Processing': return 'status-processing';
      case 'Shipped': return 'status-shipped';
      case 'Delivered': return 'status-delivered';
      default: return '';
    }
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1>Customer Orders</h1>
        <p>Manage and track all customer orders</p>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td><strong>{order.id}</strong></td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-view"
                    onClick={() => openOrderDetails(order)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="modal-overlay">
          <div className="order-modal">
            <div className="modal-header">
              <h2>Order Details - {selectedOrder.id}</h2>
              <button className="close-btn" onClick={closeOrderDetails}>×</button>
            </div>

            <div className="modal-body">
              <div className="order-info">
                <div className="info-row">
                  <span className="label">Customer:</span>
                  <span className="value">{selectedOrder.customer}</span>
                </div>
                <div className="info-row">
                  <span className="label">Date:</span>
                  <span className="value">{selectedOrder.date}</span>
                </div>
                <div className="info-row">
                  <span className="label">Total:</span>
                  <span className="value">${selectedOrder.total.toFixed(2)}</span>
                </div>
                <div className="info-row">
                  <span className="label">Status:</span>
                  <span className="value">
                    <span className={`status-badge ${getStatusClass(selectedOrder.status)}`}>
                      {selectedOrder.status}
                    </span>
                  </span>
                </div>
              </div>

              <div className="order-items">
                <h3>Order Items</h3>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${(item.quantity * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="status-update">
                <h3>Update Status</h3>
                <div className="status-controls">
                  <select
                    className="status-select"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                  <button
                    className="btn-update"
                    onClick={updateOrderStatus}
                    disabled={loading}
                  >
                    {loading ? 'Updating...' : 'Update Status'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;