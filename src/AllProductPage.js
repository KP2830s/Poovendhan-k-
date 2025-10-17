import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Button,Card,CardBody } from 'react-bootstrap'
// import { useCart } from './CartContext'
import { Link,  } from 'react-router-dom'
// import { BicycleData, Accessories } from './Data';
import { useCart } from './CartContext';


const AllProductPage = () => {

  const {addToCart} = useCart();

  const [allprodcut, setAllprocuct] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/product`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setAllprocuct(data)
        // const bicycleProducts = data.filter(p => p.category === 'Bicycles');
        // const Accessories = data.filter(p => p.category === 'Accessories')
        // setBicycles(bicycleProducts);
        // setAccessories(Accessories)

        // setBicycles(data); // Assume API returns array of products
      } catch (error) {
        console.error("Fetch failed:", error);
        // Optional: keep mock data as fallback
        // setBicycles(BicycleData);
      }
    };

    
    fetchProducts();
  }, []);


  return (
    <>
     <Container>
        <h1 className='CD-G1-0'>
        NEW ARRIVALS
        </h1>
        <Row>
        <Col>
        <Row>
            <h1>BICYCLES</h1>
        
            {  allprodcut.map(product => (
                <Col key={product.id} sm={6} md={4} lg={3}   className='mb-4' >
                  <Card className="h-100 shadow-sm">
                  <div  className='image-container'>
                  <Card.Img variant="top" src={product.image}  className='hover-icon-00' style={{ height: '250px', objectFit: 'cover' }} />
                  {/* <span 
                      onClick={() => addToCart(Bicycle)}  className='overlay-icon'>
                      <FontAwesomeIcon icon={faShoppingCart} /> 
                  </span> */}
                  </div>
                  
                  <CardBody className="text-center">
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text className="fw-bold text-success">{product.price}</Card.Text>
                      <Link to={`/allprodcut/${product.id}`} >
                        <Button variant="danger" onClick={() => addToCart(product)}>Buy</Button>
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
    </>
  )
}

export default AllProductPage