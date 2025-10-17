import React from 'react';
import { Container, Nav, Navbar, Offcanvas, Button, } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserTie } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css"
// import AdminLoginpage from './admin/AdminLoginpage';

const Bar = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, getTotalPrice } = useCart();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const CardHandling = (e) => {
    navigate('allproductpage')
  }


  return (
    <>
      <Navbar expand="md" className=" sticky-top BG-nav-00" >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src="/cycle/i1.png" alt="Brand" className="icon-aline" style={{ width: '60px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Offcanvas id="offcanvasNavbar-expand-md" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 NAV-fs-00">
                  <Nav.Link className='Nav-01' as={Link} to="/">Home</Nav.Link>
                  <Nav.Link className='Nav-01' as={Link} to="/bicycles">Bicycles</Nav.Link>
                  <Nav.Link className='Nav-01' as={Link} to="/accessories">Accessories</Nav.Link>
                  <Nav.Link className='Nav-01' as={Link} to="/about">About</Nav.Link>
                  <Nav.Link className='Nav-01' as={Link} to="/contactus">Contact</Nav.Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {/* <Button variant="primary" >
              Launch
            </Button> */}
            <Link to={'./adminloginpage'}>
              <Button variant="outline-danger" className='NB-log.in'>
                {/* <FontAwesomeIcon icon={faUserCog} /> */}
                <FontAwesomeIcon icon={faUserTie} style={{ paddingRight: '10px' }} />
                {/* <FontAwesomeIcon icon={faUserShield} /> */}
                Log.in</Button>
            </Link>

            <span style={{ cursor: "pointer" }} onClick={() => setShow(true)}>
              <FontAwesomeIcon icon={faShoppingCart} size='xl' />
              <span className="ms-2 text-danger fw-bold cartcount">{cartItems.length}</span>
            </span>
            <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Your Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {cartItems.length === 0 ? (
                  <p className='fw-boder'>Your cart is empty.</p>
                ) : (
                  cartItems.map((item, index) => {
                    const price = typeof item.price === 'string'
                      ? parseFloat(item.price.replace(/[$,]/g, '').trim())
                      : Number(item.price);
                  
                    const validPrice = isNaN(price) ? 0 : price;
                    const total = validPrice * item.quantity;
                  
                    return (
                      <div key={index} className="cart-item mb-3 d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          width="60"
                          height="60"
                          style={{ objectFit: 'cover', marginRight: '10px' }}
                        />
                        <div style={{ flex: 1 }}>
                          <h6>{item.name}</h6>
                          <p className="mb-1 text-success fw-bold">${validPrice.toFixed(2)}</p>
                          <div className="d-flex align-items-center">
                            <Button variant="secondary" size="sm" onClick={() => decreaseQty(item.id)}>-</Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button variant="secondary" size="sm" onClick={() => increaseQty(item.id)}>+</Button>
                          </div>
                          <p className="text-muted">Total: ${total.toFixed(2)}</p>
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                      </div>
                    );
                  })
                  
                )}

                <hr />
                <p className='px-4 fw-bolder'>Overall product Total:
                  <span className='px-4 fw-bolder'>${getTotalPrice().toFixed(2)}</span></p>
                <hr />
              </Offcanvas.Body>
              {cartItems.length === 0 ? (
                <Button variant="danger" className='m-2 p-2' onClick={CardHandling}>CONTINUE SHOPPING</Button>
              ) : (
                <div style={{ padding: '20px' }}>
                  <Link to={'/viewcart'}>
                    <Button className='PD-Card-btn' style={{ marginLeft: "30px" }} variant='danger'>View Cart</Button>
                  </Link>
                  <Link to={'/checkoutpage'}>
                    <Button variant='danger' style={{ marginLeft: "30px" }} >Check Out</Button>
                  </Link>
                </div>
              )
              }
            </Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Bar;
