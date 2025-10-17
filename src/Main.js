// import React, { useState } from 'react';
import './main.css'
import { Container, CardBody, Card, Col, Row, Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
import { BicycleData, Accessories } from './Data';
// import { useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Main = () => {

  const { addToCart } = useCart(); // use the shared function

  return (
    <>

      <section>

        <div className='FM-1'>
          <h2 className='SC-tl'>Sports Cycles</h2>
          <h1 className='SC-tl-1'>KRYO X26 MTB</h1>
          <h5 className='SC-tl-2'>SPECIFICATIONS:</h5>
          <ul className='SC-li'>
            <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Lightweight 18" Frame</li>
            <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Steel Suspension Fork</li>
            <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Steel Hardtail Frame</li>
          </ul>
          <Button className='btn btn-danger c1'>Buy Now</Button>
        </div>
        <div className='CD-G1-00'>
          <Container>
            <h1 className='CD-G1-0'>
              NEW ARRIVALS
            </h1>
            <Row>
              <Col>
                <Row>
                  <h1>BICYCLES</h1>

                  {BicycleData.map(Bicycle => (
                    <Col key={Bicycle.id} className='mb-4' >
                      <Card className="h-100 shadow-sm">
                        <div className='image-container'>
                          <Card.Img variant="top" src={Bicycle.image} className='hover-icon-00' style={{ height: '250px', objectFit: 'cover' }} />
                          <span
                            onClick={() => addToCart(Bicycle)} className='overlay-icon'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                          </span>
                        </div>

                        <CardBody className="text-center">
                          <Card.Title>{Bicycle.name}</Card.Title>
                          <Card.Text className="fw-bold text-success">{Bicycle.price}</Card.Text>
                          <Link to={`/allprodcut/${Bicycle.id}`} >
                            <Button variant="danger" >Buy</Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  ))
                  }
                </Row>
              </Col>
            </Row>
          </Container>
          {/* Slider */}
        </div>
      </section>
      <main>
        <section>
          <div className='bg-img-01'>
            <div className='bg-img-1'>
              <h3>DISCOVER THE COLLECTION</h3>
              <h4>MOUNTAIN BIKES</h4>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus.
              </p>
              <div className='SL-li'>
                <ul>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Sunt in culpa qui</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Officia deserunt mollit</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} />Excepteur sint occaecat</li>
                </ul>
                <ul>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Sunt in culpa qui</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Officia deserunt mollit</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} />Excepteur sint occaecat</li>
                </ul>
              </div>
              <Button className='btn btn-danger'>Buy Now</Button>
            </div>
          </div>
          <div className='bg-img-01'>
            <div className='bg-img-2'>
              <h3>DISCOVER THE COLLECTION</h3>
              <h4>MOUNTAIN BIKES</h4>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus.
              </p>
              <div className='SL-li'>
                <ul>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Sunt in culpa qui</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Officia deserunt mollit</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} />Excepteur sint occaecat</li>
                </ul>
                <ul>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Sunt in culpa qui</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Officia deserunt mollit</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} />Excepteur sint occaecat</li>
                </ul>
              </div>
              <Button className='btn btn-danger'>Buy Now</Button>
            </div>
          </div>
          <div className='bg-img-01'>
            <div className='bg-img-3'>
              <h3>DISCOVER THE COLLECTION</h3>
              <h4>MOUNTAIN BIKES</h4>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus.
              </p>
              <div className='SL-li'>
                <ul>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Sunt in culpa qui</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Officia deserunt mollit</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} />Excepteur sint occaecat</li>
                </ul>
                <ul>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Sunt in culpa qui</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} /> Officia deserunt mollit</li>
                  <li><FontAwesomeIcon className='MN-icon-00' icon={faBullseye} />Excepteur sint occaecat</li>
                </ul>
              </div>
              <Button className='btn btn-danger'>Buy Now</Button>
            </div>
          </div>
          <div>
            <Container className='bg-img-02'>
              <h1>WHY CHOOSE KRYO?</h1>
              <Row>
                <Col className='bg-img-21'>
                  <h2>LIGHT WEIGHT</h2>
                  <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus,
                    luctus nec ullamcorper mattis, pulvinar.
                  </p>
                </Col>
                <Col className='bg-img-22'>
                  <h2>LIFETIME WARRENTY</h2>
                  <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus,
                    luctus nec ullamcorper mattis, pulvinar.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className='bg-img-23'>
                  <h2>BIGGEST SERVICE NETWORK</h2>

                </Col>
                <Col className='bg-img-24'>
                  <h2>99% ASSEMBLED DELIVERY</h2>

                </Col>
                <Col className='bg-img-25'>
                  <h2>FREE FIRST BIKE SERVICE</h2>

                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Container className='CD-img-02'>
              <h1>
                EXPLORE ACCESSORIES
              </h1>
              <Row>

                {Accessories.map(Accessories => (
                  <Col key={Accessories.id} className='mb-4' >
                    <Card className="h-100 shadow-sm">
                      <div className='image-container'>
                        <Card.Img variant="top" src={Accessories.image} className='hover-icon-00' style={{ height: '250px', objectFit: 'cover' }} />
                        <span onClick={() => addToCart(Accessories)} className='overlay-icon'>
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                      </div>

                      <CardBody className="text-center">
                        <Card.Title>{Accessories.name}</Card.Title>
                        <Card.Text className="fw-bold text-success">{Accessories.price}</Card.Text>
                        <Link to={`/allprodcut/${Accessories.id}`} >
                          <Button variant="danger"  >Buy</Button>
                        </Link>
                      </CardBody>
                    </Card>
                  </Col>
                ))
                }
              </Row>
            </Container>
          </div>
          <div className='LM-part'>
            <h1>JOIN #GOECOBIKING PROGRAMME</h1>
            <div className='LM-part01'>
              <h2>WATCH FULL VIDEO</h2>
            </div>
            <Row className='LM-alin'>
              <Col>
                <h3>DUIS AUTE IRURE DOLOR IN REPREHENDERIT VELIT.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus, luctus nec ullamcorper mattis.</p></Col>
              <Col>
                <Button className='btn btn-danger'>JOIN THE PROGRAMME</Button>
              </Col>
            </Row>

          </div>
          <div className='bg-img-01'>
            <div className='bg-img-3 bg-center-00'>
              <h3>THE ALL NEW</h3>
              <h4>KRYO X26 MTB IS HERE</h4>
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio.
                Sed non mauris vitae erat consequat auctor eu in elit.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Mauris in erat justo.
              </p>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default Main