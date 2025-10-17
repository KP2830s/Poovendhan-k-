import React from 'react'
import { Container, Col, Row, Button, } from 'react-bootstrap';

const About = () => {
  return (
    <>
        <main>
         <section>
          <div className='FM-1'>
             <h2 className='SC-tl'>Sports Cycles</h2>
             <h1 className='SC-tl-1'>KRYO X26 MTB</h1>
             <h5 className='SC-tl-2'>SPECIFICATIONS:</h5>
             <ul className='SC-li'>
               <li>Lightweight 18" Frame</li>
               <li>Steel Suspension Fork</li>
               <li>Steel Hardtail Frame</li>
             </ul>
             <Button className='btn btn-danger c1'>Buy Now</Button>
          </div>
         {/* <div className='CD-G1-00'>
           <Container>
             <h1 className='CD-G1-0'>
             NEW ARRIVALS
             </h1>
             <Row>
               <Col>
                 <Card>
                   <Card.Img variant='top' src='/cycle/bicycle-7.jpg'/>
                   <CardBody>
                     <Card.Title>KRYO X26 MTB – MODEL K</Card.Title>
                     <Card.Text>
                       $350.00
                     </Card.Text>
                   </CardBody>
                 </Card>
               </Col>
               <Col>
                 <Card>
                   <Card.Img variant='top' src='/cycle/bicycle-1.jpg'/>
                   <CardBody>
                     <Card.Title>KRYO X26 MTB – MODEL K</Card.Title>
                     <Card.Text>
                       $350.00
                     </Card.Text>
                   </CardBody>
                 </Card>
               </Col>
               <Col>
                 <Card>
                   <Card.Img variant='top' src='/cycle/bicycle-4.jpg'/>
                   <CardBody>
                     <Card.Title>KRYO X26 MTB – MODEL K</Card.Title>
                     <Card.Text>
                       $350.00
                     </Card.Text>
                   </CardBody>
                 </Card>
               </Col>
               <Col>
                 <Card>
                   <Card.Img variant='top' src='/cycle/bicycle-5.jpg'/>
                   <CardBody>
                     <Card.Title>KRYO X26 MTB – MODEL K</Card.Title>
                     <Card.Text>
                       $350.00
                     </Card.Text>
                   </CardBody>
                 </Card>
               </Col>
             </Row>
           </Container>
           {/* Slider }
         </div>
       </section> */}
       {/* <main>
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
                     <li>Sunt in culpa qui</li>
                     <li>Officia deserunt mollit</li>
                     <li>Excepteur sint occaecat</li>
                   </ul>
                   <ul>
                   <li>Sunt in culpa qui</li>
                     <li>Officia deserunt mollit</li>
                     <li>Excepteur sint occaecat</li>
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
                     <li>Sunt in culpa qui</li>
                     <li>Officia deserunt mollit</li>
                     <li>Excepteur sint occaecat</li>
                   </ul>
                   <ul>
                   <li>Sunt in culpa qui</li>
                     <li>Officia deserunt mollit</li>
                     <li>Excepteur sint occaecat</li>
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
                     <li>Sunt in culpa qui</li>
                     <li>Officia deserunt mollit</li>
                     <li>Excepteur sint occaecat</li>
                   </ul>
                   <ul>
                   <li>Sunt in culpa qui</li>
                     <li>Officia deserunt mollit</li>
                     <li>Excepteur sint occaecat</li>
                   </ul>
                 </div>
                 <Button className='btn btn-danger'>Buy Now</Button>
               </div>
           </div> */}
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
           {/* <div>
           <Container className='CD-img-02'>
             <h1>
             EXPLORE ACCESSORIES
             </h1>
             <Row>
               <Col>
                 <Card>
                   <Card.Img variant='top' src='/cycle/bicycle-1.jpg'/>
                   <CardBody>
                     <Card.Title>KRYO X26 MTB – MODEL K</Card.Title>
                     <Card.Text>
                       $350.00
                     </Card.Text>
                   </CardBody>
                 </Card>
                 </Col>
                 <Col>
                 <Card>
                   <Card.Img variant='top' src='/cycle/bicycle-4.jpg'/>
                   <CardBody>
                     <Card.Title>KRYO X26 MTB – MODEL K</Card.Title>
                     <Card.Text>
                       $350.00
                     </Card.Text>
                   </CardBody>
                 </Card>
                 </Col>
                 <Col>
                 <Card>
                   <Card.Img variant='top' src='/cycle/bicycle-5.jpg'/>
                   <CardBody>
                     <Card.Title>KRYO X26 MTB – MODEL K</Card.Title>
                     <Card.Text>
                       $350.00
                     </Card.Text>
                   </CardBody>
                 </Card>
               </Col>
               <Col>
                 <Card>
                   <Card.Img variant='top' src='/cycle/bicycle-7.jpg'/>
                   <CardBody>
                     <Card.Title>KRYO X26 MTB – MODEL K</Card.Title>
                     <Card.Text>
                       $350.00
                     </Card.Text>
                   </CardBody>
                 </Card>
               </Col>
             </Row>
           </Container>
           </div> */}
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
               <div className='bg-img-3'>
                 <h3>DISCOVER THE COLLECTION</h3>
                 <h4>MOUNTAIN BIKES</h4>
                 <p>
                     Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit. Ut elit tellus,
                     luctus nec ullamcorper mattis, pulvinar dapibus.
                 </p>
               </div>
           </div>
         </section>
       </main>
    </>
   
  )
}

export default About