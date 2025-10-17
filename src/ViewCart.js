import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './ViewCart.css'
import { useCart } from './CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ViewCart = () => {

    const { cartItems, increaseQty, decreaseQty, removeFromCart, getTotalPrice } = useCart();

    // console.log('skjfasl')
    return (
        <>
            <Container>
                <div className='BG-CL'>
                    <Row className='row-00'>
                        <Col className='col-00'>
                            {cartItems.length === 0 ?
                                (<h1 style={{ textAlign: "center" }}>Your product is empty.</h1>)
                                : (
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Products</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th className='PD-price'>Subtotal</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {cartItems.map((items, index) => {
                                            const price = items.price;
                                            const total = price * items.quantity;

                                            return (
                                                <tbody key={index}>
                                                    <tr> {/* ✅ wrap all <td> inside <tr> */}
                                                        <td>
                                                            <FontAwesomeIcon style={{ cursor: 'pointer' }} className='VC-icon'
                                                                onClick={() => removeFromCart(items.id)} icon={faTimesCircle} />
                                                        </td>
                                                        <td>
                                                            <img src={items.image} alt={items.name}
                                                                width="100"
                                                                height="100"
                                                                style={{ objectFit: 'cover', marginRight: '10px', padding: '10px' }}
                                                            />
                                                        </td>
                                                        <td className='PD-name'>{items.name}</td>
                                                        <td>{items.price}</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <Button variant="secondary" size="sm" onClick={() => decreaseQty(items.id)}>-</Button>
                                                                <span className="mx-2">{items.quantity}</span>
                                                                <Button variant="secondary" size="sm" onClick={() => increaseQty(items.id)}>+</Button>
                                                            </div>
                                                        </td>
                                                        <td className='PD-price'>${total.toFixed(2)}</td>
                                                    </tr>
                                                </tbody>
                                            );
                                        }

                                        )}

                                        <tfoot>
                                            <tr className='pt-4'>
                                                <td colSpan="5" className="text-end TLT-00">Total  : </td>
                                                <td colSpan="6" className="text-end TLP-00">${getTotalPrice().toFixed(2)}</td>

                                            </tr>
                                        </tfoot>


                                    </table>)}
                            <td style={{ display: "contents" }} >
                                <Link to="/checkoutpage">
                                    <Button variant="danger">CHECKOUT PROCEED</Button>
                                </Link>
                            </td>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default ViewCart