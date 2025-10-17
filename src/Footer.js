import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <>
    <footer className='footer-01'>
          <Container className='footer-container-01'>
            <Row>
              <Col>
              <img src='/cycle/i1.png' alt='Brand-icon' className='footer-icon'/>
              </Col>
              <Col>
                <h2>USEFULL LINKS</h2>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Shop</li>
                  <li>Contact Us</li>
                </ul>
              </Col>
              <Col>
                <h2>OUR COLLECTION</h2>
                <ul>
                  <li>Mountain Bikes</li>
                  <li>City Bikes</li>
                  <li>Speciality Bikes</li>
                  <li>Electric Bikes</li>
                </ul>
              </Col>
              <Col>
                <h2>ACCOUNT</h2>
                <ul>
                  <li>Customer Login</li>
                  <li>Dealer Login</li>
                  <li>Addresses</li>
                  <li>Payment Methods</li>
                </ul>
              </Col>
            </Row>
          </Container>
          <hr/>
          <Container>
            <div className='CR'>
                <p>Copyright © 2025 Cycle Shop</p>
                <div className='CR-icon-01'>
                  <FontAwesomeIcon className='CR-icon-00' icon={faFacebook} size='xl'/>
                  <FontAwesomeIcon className='CR-icon-00' icon={faInstagram} size='xl' />
                  <FontAwesomeIcon className='CR-icon-00' icon={faTwitter} size='xl' />
                  <FontAwesomeIcon className='CR-icon-00' icon={faYoutube} size='xl' />
                </div>
            </div>
          </Container>
        </footer>
    </>
  )
}

export default Footer