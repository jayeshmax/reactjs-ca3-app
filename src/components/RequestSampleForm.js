import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RequestSampleForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, price, scentIntensity, quantityLevel, isPressurized } = location.state || {};

  const [formData, setFormData] = useState({ name: '', address: '', email: '', phoneNo: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    

    e.preventDefault();

    console.log(formData)

    alert("Your Request has been submitted\nWe will contact you shortly.");

    navigate('/browse-product');

    
    // Submit data to backend API
    fetch('/api/request-sample', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, product, price, scentIntensity, quantityLevel, isPressurized })
    }).then(response => response.json())
      .then(data => alert("Sample requested successfully!"))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div style={styles.container}>
      <h2 className='h2'>Request Sample for {product?.name}</h2>

      <div style={styles.formContainer}>
        

        

        <div style={{ height:'450px', width: '100%', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <p className='h4' style={{display:'flex',direction:'column',justifyContent:'center'}}>Product Details</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            
            <thead>
            <tr>
                <th colSpan="2" style={{ textAlign: 'center', padding: '10px', fontSize: '18px', fontWeight: 'bold', borderBottom: '2px solid #ddd' }}>

                <img src={product?.imageUrl} alt={product?.name} style={{ height: '180px', width: 'auto', objectFit: 'contain' }} />

                </th>
            </tr>
            </thead>
            <tbody>
            
            <tr>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}><strong>Price:</strong></td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>₹{price}</td>
            </tr>
            <tr>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}><strong>Scent Intensity:</strong></td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{scentIntensity}</td>
            </tr>
            <tr>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}><strong>Quantity Level:</strong></td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{quantityLevel}</td>
            </tr>
            <tr>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}><strong>Pressurized:</strong></td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{isPressurized ? 'Yes' : 'No'}</td>
            </tr>
            </tbody>
        </table>
        </div>


        <div style={styles.form}>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <br/>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} placeholder='Name' />
            </label>
            <label>
              Phone No:
              <br/>
              <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required style={styles.input} placeholder="Phone No."/>
            </label>
            <label>
              E-mail:
              <br/>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} placeholder="E-mail" />
            </label>
            <label>
              Address:
              <br/>
              <textarea rows="5" cols="40" placeholder="Enter your address..." style={styles.input}></textarea>

            </label>
            
            <button type="submit" className="btn btn-primary" style={styles.submitButton}>Submit</button>
          </form>
        </div>
      </div>


      

      <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary fixed-bottom" data-bs-theme="dark">
          <div class="container-fluid"> 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
              <li class="nav-item">
                  <a class="nav-link active" aria-disabled="true">FragranceGallery &copy;  2024 - 2034</a>
              </li>
              </ul>
          </div>
          </div>
      </nav>
    </div>
  );
};

// Inline styles for flexbox and layout
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',

  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '40px',
    marginTop: '20px',
    width: '100%',
    maxWidth: '900px',
  },
  productDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flext-start',
    textAlign: 'flex-start',
    marginRight: '100px',
    width: '100%'
  },
  image: {
    height: '200px',
    width: '220px',
    objectFit: 'contain',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '100px'  ,
    width: '100%',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },

  submitButton: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '300px',
    marginTop: '10px',
  },

   
  
};

export default RequestSampleForm;
