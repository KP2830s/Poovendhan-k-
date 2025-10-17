import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; // Custom style (optional)
// import { Link } from 'react-router-dom';
// import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faShoppingCart, faSignOutAlt, faTachometerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faDashboard } from '@fortawesome/free-solid-svg-icons';
// import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
function AdminNavbar() {
  return (

    <>
     <div className="d-flex flex-column bg-light sidebar p-3" style={{ height: '100vh', width: '220px' }}>
      <h4 className='AN-00'>Admin Panel</h4>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="/admindasboard/dashboard" activeclassname="active">
          <FontAwesomeIcon icon={faTachometerAlt} size='md' className='AN-icon'/>
          Dashboard
        </Nav.Link>
        <Nav.Link as={NavLink} to="/admindasboard/manageproducts" >
        <FontAwesomeIcon icon={faBox} size='md' className='AN-icon'/>
          Products
        </Nav.Link>
        <Nav.Link as={NavLink} to="/admindasboard/orders" >
        <FontAwesomeIcon icon={faShoppingCart} size='md' className='AN-icon'/>
          Orders
        </Nav.Link>
        <Nav.Link as={NavLink} to="/admindasboard/customers">
        <FontAwesomeIcon icon={faUsers} size='md' className='AN-icon'/>
          Customers
        </Nav.Link>
        <Nav.Link as={NavLink} to="/" >
        <FontAwesomeIcon icon={faSignOutAlt} size='md' className='AN-icon'/>
          Logout
        </Nav.Link>
      </Nav>
    </div>
    </>
  );
  
}

export default AdminNavbar;

 /*  <div className="d-fle>x flex-column bg-light sidebar p-3" style={{ height: '100vh', width: '220px' }}>
      <h4>Admin Panel</h4>
      <Nav className="flex-column">
        {/* <Nav.Link  as={Link} to="/dashboard">Dashboard</Nav.Link> */
        /* <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> */
        /* <Nav.Link as={Link} to="/admindasboard/dashboard">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/admindasboard/manageproducts">Products</Nav.Link>
        <Nav.Link as={Link} to="/admindasboard/orders">Orders</Nav.Link>
        <Nav.Link as={Link} to="/admindasboard/customers">Customers</Nav.Link> */
        /* <Nav.Link href="/dashboard">Dashboard</Nav.Link> */
        /* <Nav.Link href="/products">Products</Nav.Link> */
        /* <Nav.Link href="/orders">Orders</Nav.Link> */
        /* <Nav.Link href="/users">customers</Nav.Link> */
        /* <Nav.Link href="/">Logout</Nav.Link>
      </Nav>
    </div>  */
