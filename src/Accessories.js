import React, { useEffect, useState } from 'react';
import { Card, CardBody, Button, Col, Container, Row } from 'react-bootstrap';
import './Bicycles.css'
// import { Accessories } from './Data';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Accessoriess = () => {
  const {addToCart} = useCart();

  // const [access, setaccess] = useState('');
  // const [search, setsearch] = useState([]);

  const [bicycles, setBicycles] = useState([]);
  const [Accessories, setAccessories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/product`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const bicycleProducts = data.filter(p => p.category === 'Bicycles');
        const Accessories = data.filter(p => p.category === 'Accessories')
        setBicycles(bicycleProducts);
        setAccessories(Accessories)

        // setBicycles(data); // Assume API returns array of products
      } catch (error) {
        console.error("Fetch failed:", error);
        // Optional: keep mock data as fallback
        // setBicycles(BicycleData);
      }
    };

    fetchProducts();
  }, []);

  const filteredAccessories = Accessories.filter(itme => itme.name.toLowerCase().includes(searchTerm.toLowerCase()))


  /* const Accesshandling = () => { 
    const reslt = Accessories.filter(item => item.name.toLowerCase().includes(access.toLowerCase()))
    setsearch(reslt);
   } */

  return (
    <>
    <Container fluid className='BC-aline-0'>
      <Row>
        <Col className='BC-pd-01'>
          <div className='BC-SH-01'>
            <label>Search</label><br></br>
            <input className='BC-SHB-00'
            type='Search'
            placeholder='Prodact Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // value={cycles}
            // onChange={(e) => setcycles(e.target.value)}
            //searchandling
            />
            <Button onClick={() => {}} className='BC-btn-01'>Search</Button>
          
          </div>
        <div >
          <h6 className='BC-aline-01'>FILTER BY CATEGORIES</h6>
          <p>Accessories({Accessories.length})</p>
          <p>Bicycles({bicycles.length})</p>
        </div>
        <div>
          <h6 className='BC-aline-01'>RECENTLY VIEWED PRODUCTS</h6>
        </div>
        </Col>
        <Col md={8} lg={8}  >
        <Row>
          <h1>BICYCLES</h1>
          {filteredAccessories.length > 0  ? (
            filteredAccessories.map((access) => (
              <Col key={access._id || access.id} sm={6} md={5} lg={5} className='mb-4'>
                
                <Card className="h-100 shadow-md">
                  <Card.Img
                    variant="top"
                    src={access.image}
                    alt={access.name}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  {/* text-center */}
                  <CardBody className=" ">
                    <Card.Title className="fw-bolder access-name">{access.name}</Card.Title>
                    <Card.Title className='access-category'>{access.category}</Card.Title>
                    <Card.Text className="fw-bold text-success access-price">
                      ${access.price?.toFixed(2)}
                    </Card.Text>
                    <Card.Text className="fw-bold text-success access-stock">
                      stock:{access.stock}
                    </Card.Text>
                    <Link to={`/allproduct/${access._id}`}>
                      <Button variant="danger" onClick={() => addToCart(access)}>
                        Add to Cart
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No bicycles found.</p>
          )}
        </Row>
        </Col>
      </Row>
    </Container>
    
  </>
  );
};
export default Accessoriess