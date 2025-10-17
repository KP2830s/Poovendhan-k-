import React from 'react'
import './contactus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form,Button,Col, Container,Row } from 'react-bootstrap'
import { faShop, faToolbox, faTruck } from '@fortawesome/free-solid-svg-icons';

const Contactus = () => {
  return (
    <>
        <div className='bg-img-01'>
            <div className='CU-img-01'>
                <h1>CONTACT US</h1>
            </div>
        </div>
        <Container className='CU-alin-00'>
          <Row>
            <Col>
            <FontAwesomeIcon icon={faTruck} className='CU-CL-00' size='2x'/>
            <h2>1 800 755 60 21</h2>
            <p>Sales Related Enquiries</p>
            </Col>
            <Col>
            <FontAwesomeIcon icon={faToolbox} className='CU-CL-00' size='2x'/>
            <h2>1 800 755 60 22</h2>
            <p>Service Related Enquiries</p>
            </Col>
            <Col>
            <FontAwesomeIcon icon={faShop} className='CU-CL-00' size='2x'/>
            <h2>1 800 755 60 23</h2>
            <p>Dealership Related Enquiries</p>
            </Col>
          </Row>
        </Container>
          <Container className="py-5">
            <Row className="align-items-start g-4">
                {/* Contact Form */}
              <Col md={6} className="CU-FM-00">
                <h2 className="mb-4">LET'S GET IN TOUCH</h2>
                <Form>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control style={{margin:"0px"}} type="text" placeholder="First name" name="fn" />
                    </Col>
                    <Col>
                      <Form.Control style={{margin:"0px"}} type="text" placeholder="Last name" name="ln" />
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Control style={{margin:"0px"}} type="email" placeholder="Enter email address" name="email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={4} placeholder="Enter your message" name="message" />
                  </Form.Group>
                  <Button variant="danger" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>

                {/* Contact Details */}
              <Col md={6} className="CU-FM-01">
                <h2 className="mb-4">CONTACT DETAILS</h2>

                <div className="mb-4">
                  <h5>📍 Our Location</h5>
                  <p>123 Main Street, Chennai, India</p>
                </div>

                <div className="mb-4">
                  <h5>📞 Phone</h5>
                  <p>+91 9876543210</p>
                </div>

                <div className="mb-4">
                  <h5>🕐 Our Hours</h5>
                  <p>10:00 AM – 10:00 PM (Mon – Fri)</p>
                </div>
              </Col>
          </Row>
        </Container>
    </>
  )
}

export default Contactus