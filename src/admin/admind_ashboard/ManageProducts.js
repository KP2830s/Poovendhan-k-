import React, { useEffect, useState } from 'react';
import './ManageProducts.css';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // http://localhost:5000/api/v3/product
    fetch(`${process.env.REACT_APP_API_URL}/product`)
  .then(res => res.json())
  .then(data => setProducts(data))
  .catch(error => console.error("Fetch failed:", error));
  console.log("API URL:", process.env.REACT_APP_API_URL);

  }, []);


  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Bicycles',
    price: '',
    stock: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // (e) => setFormData({ ...formData, imageFile: e.target.files[0] })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('category', formData.category);
      form.append('price', parseFloat(formData.price));
      form.append('stock', parseInt(formData.stock));
  
      if (formData.imageFile) {
        form.append('image', formData.imageFile);
      }
  
      const url = editingProduct
        ? `${process.env.REACT_APP_API_URL}/product/${editingProduct._id}`
        : `${process.env.REACT_APP_API_URL}/product`;
  
      const method = editingProduct ? 'PUT' : 'POST';
  
      const response = await fetch(url, {
        method,
        body: form
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        console.error("❌ Error from server:", result.message || result);
        return;
      }
  
      if (editingProduct) {
        setProducts(products.map(p => p._id === result._id ? result : p));
      } else {
        setProducts([...products, result]);
      }
  
      resetForm();
    } catch (err) {
      console.error("❌ Error submitting form:", err);
    }
  };
  

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock.toString(),
      image: product.image,
      mageFile: null
    });
    setShowForm(true);
  };


  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (res.ok) {
        setProducts(products.filter(p => p._id !== id));
      } else {
        const err = await res.json();
        console.error("Failed to delete:", err.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'Bicycles',
      price: '',
      stock: '',
      image: ''
    });
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="manage-products-container">
      <div className="products-header">
        <h1>Manage Products</h1>
        <button
          className="btn-add"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
        >
          Add New Product
        </button>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="product-form">
            <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="Bicycles">Bicycles</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Parts">Parts</option>
                  <option value="Clothing">Clothing</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Price ($)</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Stock Quantity</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Image URL (optional)</label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => setFormData({ ...formData, imageFile: e.target.files[0]})}/>
                    </div>

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={resetForm}>
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="products-grid">
        {products ? (products.map(product => (
          <div key={product._id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <div className="product-details">
                <span className="product-price">${product.price}</span>
                <span className={`product-stock ${product.stock < 10 ? 'low' : ''}`}>
                  Stock: {product.stock}
                </span>
              </div>
              <div className="product-actions">
                <button
                  className="btn-edit"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))):(<p>Prodact is not Stock</p>)}
      </div>
    </div>
  );
};

export default ManageProducts;

