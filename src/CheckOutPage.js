import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useCart } from './CartContext'
import './CheckOutPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
// import { data } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaypal } from '@fortawesome/free-brands-svg-icons'
// import { Prev } from 'react-bootstrap/esm/PageItem'


const CheckOutPage = () => {
  const { cartItems, getTotalPrice } = useCart();
  const [, setProducts] = useState([]);

  useEffect(() => {

    fetch(`${process.env.REACT_APP_API_URL}/orders`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Fetch failed:", error));
    console.log("API URL:", process.env.REACT_APP_API_URL);

  }, [])



  const [dataFrom, setdataFrom] = useState({
    email: "",
    fname: "",
    lname: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    message: "",
  });

  const [Error, setError] = useState({});

  const changehandling = (e) => {
    const { name, value } = e.target;

    setdataFrom((prev) => ({
      ...prev, [name]: value
    }));

    setError((Errorprev) => ({
      ...Errorprev, [name]: ''
    }));


  }

  const submithanding = async (e) => {


    e.preventDefault();
    const newErrors = {};

    if ((dataFrom.email.trim() === '')) newErrors.email = 'Enter the email';
    if ((dataFrom.fname.trim() === '')) newErrors.fname = 'Enter the First name';
    if ((dataFrom.lname.trim() === '')) newErrors.lname = 'Enter the Last name';
    if ((dataFrom.country === '')) newErrors.country = 'Selcter the Conutry';
    if ((dataFrom.address.trim() === '')) newErrors.address = 'Enter the Address';
    if ((dataFrom.apartment.trim() === '')) newErrors.apartment = 'Enter the Apartment';
    if ((dataFrom.pincode.trim() === '')) newErrors.pincode = 'Enter the Pincode';
    if ((dataFrom.city.trim() === '')) newErrors.city = 'Enter the City';
    if ((dataFrom.state.trim() === '')) newErrors.state = 'Enter the State';
    if ((dataFrom.phone.trim() === '')) newErrors.phone = 'Enter the Phone';
    // if((dataFrom.message.trim() === '')) newErrors.message ='Enter the M' ;
    // && (dataFrom.pincode.trim().length === 6 )

    if ((Object.keys(newErrors).length > 0)) {
      setError(newErrors);
    } else {
      alert('successfully submited!..')
    }

    // Fix cartItems to ensure each has an `id`
   /*  const cartItemsWithId = cartItems.map(item => ({
      ...item,
      id: item.id || item._id || item.productId || "unknown" // fallback if needed
    })); */

    const orderDate = {
      userData: {
        ...dataFrom,
        pincode: parseInt(dataFrom.pincode),
        phone: parseInt(dataFrom.phone)
      },
      cartItems: cartItems.map(item => ({
        ...item,
        id: item.id || item._id
      })),
      totalPrice: getTotalPrice(),
      discountApplied: discont === "Pv03" ? 50 : 0,
      finalPrice: finalPrice !== null ? parseFloat(finalPrice) : getTotalPrice()
    };
    
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderDate)
      });
    
      const result = await res.json();
    
      if (res.ok) {
        alert('Order placed!');
        console.log('Success:', result);
      } else {
        console.error('Error:', result);
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error');
    }
  };
  /*  const addToCart = (product) => {
     setCartItems(prev => [...prev, {
       id: product.id,       // ← must exist
       name: product.name,
       price: product.price,
       quantity: 1,
       image: product.image
     }]);
   };
  */
  const [discont, setDiscont] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);
  const totalPrice = getTotalPrice();

  const cupan = (e) => {

    e.preventDefault();

    if (discont === "Pv03") {
      setFinalPrice((totalPrice / 2).toFixed(2)); // Apply discount on number, then format
    } else {
      setFinalPrice(totalPrice.toFixed(2));
    }

  }


  return (
    <>
      <Container fluid>
        <Row className='text-center'>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>) : (
            <>
              <Col className='COF-00'>
                <form onSubmit={submithanding}>
                  <h3 className='CO-T-00' >Contact</h3>
                  <input type='email' placeholder='Email Adderss'
                    name='email' onChange={changehandling} value={dataFrom.email} />
                  <p className='EEL-00' style={{ color: 'red' }}>{Error.email}</p><br />
                  <h4 className='CO-T-01' >Billing Details</h4>
                  <input type='text' placeholder='Frits name'
                    name='fname' onChange={changehandling} value={dataFrom.fname} />
                  <p className='EEL-00' style={{ color: 'red' }}>{Error.fname}</p>
                  <input type='text' placeholder='Last name'
                    name='lname' onChange={changehandling} value={dataFrom.lname} />
                  <p className='EEL-00' style={{ color: 'red' }}>{Error.lname}</p>
                  <select name='country' onChange={changehandling} value={dataFrom.country} >
                    <option style={{ textAlign: 'center' }}>------conutry-------</option>
                    <option>USE</option>
                    <option>UK</option>
                    <option>INDIA</option>
                    <option>JAPAN</option>
                    <option>UAE</option>
                  </select>
                  <p className='EEL-00' style={{ color: 'red' }}>{Error.country}</p>
                  <input type='text' placeholder='Address'
                    name='address' onChange={changehandling} value={dataFrom.address} />
                  <p className='EEL-00' style={{ color: 'red' }}>{Error.address}</p>
                  <input type='text' placeholder='Apartment'
                    name='apartment' onChange={changehandling} value={dataFrom.apartment} />
                  <p className='EEL-00' style={{ color: 'red' }}>{Error.apartment}</p>
                  <input type='text' placeholder='City'
                    name='city' onChange={changehandling} value={dataFrom.city} />
                  <p className='EEL-00' style={{ color: 'red' }}>{Error.city}</p>
                  <input type='text' placeholder='State'
                    name='state' onChange={changehandling} value={dataFrom.state} />
                  <p className='EEL-00' style={{ color: 'red' }}>{Error.state}</p>
                  <input type='text' placeholder='Pincode'
                    name='pincode' pattern='[0-9]{6}' onChange={changehandling} value={dataFrom.pincode} />
                  <p className='EEL-00' style={{ color: 'red' }}>{Error.pincode}</p>
                  <input type='tel' placeholder='Phone no'
                    name='phone' pattern='[0-9]{10}' onChange={changehandling} value={dataFrom.phone} />
                  <p className='EEL-00' style={{ color: 'red' }}>{Error.phone}</p><br />
                  <h5 className='CO-T-03' >Additional Information</h5>
                  <textarea name="message" placeholder='Give the Additional Informtion'
                    rows="3" cols="65" onChange={changehandling} value={dataFrom.message} />
                  {/* <p style={{color:'red'}}>{Error.email}</p> */}
                  {/* <Button variant='danger' className='PP-al-00' onClick={submithanding} ><FontAwesomeIcon icon={faPaypal} />Proceed to PayPal</Button> */}
                  <button type='submit' className='btn btn-danger '><FontAwesomeIcon className='ICON-000' icon={faPaypal} />Proceed to PayPal</button>
                </form>

              </Col>
              <Col className='PT-00'>


                <>
                  <ul>
                    {cartItems.map((item, idx) => (
                      <li key={idx}>
                        <Row >
                          <Col className='COP-L-00'><img src={item.image} alt={item.name} height={60} width={60} />
                            <span className='COP-IC-00'>{item.quantity}</span></Col>
                          <Col className='COP-L-00'>{item.name}</Col>
                          {/* <Col></Col> */}
                          <Col className='COP-L-00'>{item.price}</Col>
                        </Row>
                      </li>
                    ))}
                  </ul>
                  <form onSubmit={cupan} style={{ display: "flex" }}>
                    <input className='OC-000' value={discont} onChange={(e) => setDiscont(e.target.value)} />
                    {/* <h4>Total: ${getTotalPrice().toFixed(2)}</h4> */}

                    <input type='submit' className='OCS-000' value="Apply Coupon" />
                  </form>
                  <Row style={{ marginTop: '27px', paddingRight: '40px' }}>
                    <Col>
                      <p className='TotalTAG-00'>Total</p>
                    </Col>
                    <Col>
                      <h4 className='FP-000'>
                        ${finalPrice !== null ? finalPrice : getTotalPrice().toFixed(2)}
                      </h4>
                      {/* 
                      <h4 className='FP-000'>
                        ${finalPrice}
                      </h4> */}
                    </Col>
                  </Row>
                </>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  )
}
// 
export default CheckOutPage