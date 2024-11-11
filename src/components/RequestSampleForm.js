import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const RequestSampleForm = () => {
  const location = useLocation();
  const { product, price, scentIntensity, quantityLevel, isPressurized } = location.state || {};

  const [formData, setFormData] = useState({ name: '', address: '', email: '', phoneNo: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit data to backend API
    fetch('/api/request-sample', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, product, price, scentIntensity, quantityLevel, isPressurized })
    }).then(response => response.json())
      .then(data => alert("Sample requested successfully!"))
      .catch(error => console.error('Error:', error));
  };

  console.log(product)

  return (
    <div>
      <h2>Request Sample for {product.name}</h2>

      <div>
        <img src={product.imageUrl}></img>
      </div>

      
      
      
      
      <p>Price: Rs. {price}</p>
      <p>Scent Intensity: {scentIntensity}</p>
      <p>Quantity Level: {quantityLevel}</p>
      <p>Pressurized: {isPressurized}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Phone No:
          <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default RequestSampleForm;
