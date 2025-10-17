import React from 'react'
import { Card, CardBody, Col,  Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const AccessoriesCard = ({Accessories}) => {
  return (
   
        <Col key={Accessories.id}   className='mb-4' >
          <Card className="h-100 shadow-sm">
            <div  className='image-container'>
            <Card.Img variant="top" src={Accessories.image}  className='hover-icon-00' style={{ height: '250px', objectFit: 'cover' }} />
            <span  className='overlay-icon'>
              <FontAwesomeIcon icon={faShoppingCart} /> 
            </span>
            </div>
            
            <CardBody className="text-center">
              <Card.Title>{Accessories.name}</Card.Title>
              <Card.Text className="fw-bold text-success">{Accessories.price}</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </CardBody>
          </Card>
        </Col>
       
  )
}

export default AccessoriesCard