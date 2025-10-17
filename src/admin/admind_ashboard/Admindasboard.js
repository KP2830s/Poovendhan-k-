import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Dashboard from './Dashboard';
import ManageProducts from './ManageProducts';
import Orders from './Orders';
import Customers from './Customers';


function Admindasboard() {
  return (
    <>

    <div style={{ display: 'flex', height: '100vh' }}>
      <AdminNavbar />
      
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manageproducts" element={<ManageProducts />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default Admindasboard;