import './prodcutdiscrption.css';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useCart } from './CartContext';

const ProdcutDiscrption = () => {
  const [Disrive, setDisrive] = useState('discrption');
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [PDdataFrom, setPDdataFrom] = useState({
    fullname: '',
    email: '',
    reviewText: '',
    checkbox: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [reviews, setReviews] = useState([]); // ✅ Store submitted reviews

  // const { _id } = useParams(); // ✅ Get ID from URL
  const { addToCart } = useCart();

  // Fetch all products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/product`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setproduct(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Could not load products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const { id } = useParams();
  const prodcutItem = id && !loading ? product.find(p => p._id === id) : null;


  //   // ✅ Find product only after data is loaded AND _id exists
  //   const prodcutItem = _id && !loading ? product.find(p => p._id === _id) : null;

  // Debug (optional)
  console.log("All products:", product);
  console.log("Current _id:", id);
  console.log("Found product:", prodcutItem);

  // Show feedback to user
  if (loading) return <div className="text-center p-5">Loading product...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  //   if (!id) return <div className="text-center">Invalid product ID.</div>;

  if (!id) return <div className="text-center">Invalid product ID.</div>;
  //   if (!_id) return <div className="text-center">Invalid product ID.</div>;
  if (!prodcutItem) return <div className="text-center">Product not found.</div>;

  // ✅ Handle review submission
  const PDhanding = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!PDdataFrom.fullname.trim()) newErrors.fullname = 'Enter your name';
    if (!PDdataFrom.email.trim()) newErrors.email = 'Enter your email';
    if (!PDdataFrom.reviewText.trim()) newErrors.reviewText = 'Enter your review';
    if (!PDdataFrom.checkbox) newErrors.checkbox = 'You must agree to the terms';

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
    } else {
      // ✅ Add to reviews list
      setReviews(prev => [
        {
          name: PDdataFrom.fullname,
          email: PDdataFrom.email,
          reviewText: PDdataFrom.reviewText,
        },
        ...prev
      ]);

      // ✅ Reset form
      setPDdataFrom({
        fullname: '',
        email: '',
        reviewText: '',
        checkbox: false,
      });
      setFormErrors({});

      console.log("Review submitted successfully!");
    }
  };

  return (
    <>
      <Container className='PD-mian-aline p-5'>
        <Container className='p-5'>
          <Row>
            <Link to="/">← Back to Products</Link>
            <Col>
              <img src={prodcutItem.image} alt={prodcutItem.name} width="400" />
            </Col>
            <Col>
              <p className='fw-bolder fs-large'>{prodcutItem.category}</p>
              <h2>{prodcutItem.name}</h2>
              <p><strong>Price:</strong> ${prodcutItem.price?.toFixed(2)}</p>
              <p><strong>Stock:</strong> {prodcutItem.stock}</p>
              <p>{prodcutItem.description || "No description available."}</p>
              <div>
                <Link to={'/viewcart'}>
                  <Button
                    className='PD-Card-btn'
                    onClick={() => addToCart(prodcutItem)}
                    variant='danger'
                  >
                    ADD TO CART
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>

          <div className='mt-5'>
            <hr />
            <div style={{ display: 'flex', gap: '20px', cursor: 'pointer' }}>
              <div onClick={() => setDisrive('discrption')}>
                <strong>Description</strong>
              </div>
              <div onClick={() => setDisrive('reviwe')}>
                <strong>Review</strong>
              </div>
            </div>

            {Disrive === 'discrption' && (
              <div className='mt-4'>
                <p>{prodcutItem.description || "No description available."}</p>
              </div>
            )}

            {Disrive === 'reviwe' && (
              <div className='RF-00 mt-5'>
                <form onSubmit={PDhanding}>
                  <h4>Add a review</h4>
                  <p>Your email address will not be published. Required fields are marked *</p>

                  <label>Your Review *</label><br />
                  <textarea
                    name='reviewText'
                    value={PDdataFrom.reviewText}
                    onChange={(e) => setPDdataFrom(prev => ({ ...prev, reviewText: e.target.value }))}
                    rows={4}
                    cols={110}
                  />
                  {formErrors.reviewText && <p style={{ color: 'red' }}>{formErrors.reviewText}</p>}

                  <Row>
                    <Col>
                      <label>Name *</label>
                      <input
                        type='text'
                        value={PDdataFrom.fullname}
                        style={{ margin: '0px', width: "408px" }}
                        onChange={(e) => setPDdataFrom(prev => ({ ...prev, fullname: e.target.value }))}
                        name='fullname'
                      />
                      {formErrors.fullname && <p style={{ color: 'red' }}>{formErrors.fullname}</p>}
                    </Col>
                    <Col>
                      <label>Email *</label><br />
                      <input
                        type='email'
                        value={PDdataFrom.email}
                        style={{ margin: '0px', width: "408px" }}
                        onChange={(e) => setPDdataFrom(prev => ({ ...prev, email: e.target.value }))}
                        name='email'
                      /><br />
                      {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
                    </Col>
                  </Row>

                  <input
                    type='checkbox'
                    checked={PDdataFrom.checkbox}
                    style={{ margin: '0px', width: "28px" }}
                    onChange={(e) => setPDdataFrom(prev => ({ ...prev, checkbox: e.target.checked }))}
                  />
                  <label className='label-aree mt-3'>
                    Save my name, email, and website in this browser for the next time I comment.
                  </label><br />
                  {formErrors.checkbox && <p style={{ color: 'red' }}>{formErrors.checkbox}</p>}

                  <Button type="submit" className='btn btn-danger fw-bolder mt-3'>
                    Submit Review
                  </Button>
                </form>
              </div>
            )}

            {/* ✅ Show submitted reviews */}
            {reviews.length > 0 && (
              <div className='mb-4 mt-4'>
                <h4>📝 Customer Reviews:</h4>
                {reviews.map((rev, index) => (
                  <div
                    key={index}
                    style={{
                      border: '1px solid #ccc',
                      padding: '15px',
                      borderRadius: '8px',
                      marginBottom: '10px',
                      backgroundColor: '#f9f9f9'
                    }}
                  >
                    <p><strong>Name:</strong> {rev.name}</p>
                    <p><strong>Email:</strong> {rev.email}</p>
                    <p><strong>Review:</strong> {rev.reviewText}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ProdcutDiscrption;