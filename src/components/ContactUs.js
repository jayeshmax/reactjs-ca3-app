import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: '', address: '', email: '', phoneNo: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Your Details has been submitted\nWe will contact you shortly.");

    navigate('/browse-product');
    
    // Submit data to backend API
    fetch('/api/request-sample', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData })
    }).then(response => response.json())
      .then(data => alert("Sample requested successfully!"))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>

      <div style={{marginTop:'30px'}}>
        <form onSubmit={handleSubmit} style={styles.form}>
        <h2 className='h2'>Contact Us</h2>

          <label style={styles.label}>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              style={styles.input} 
              placeholder='Name' 
            />
          </label>

          <label style={styles.label}>
            Phone No:
            <input 
              type="tel" 
              name="phoneNo" 
              value={formData.phoneNo} 
              onChange={handleChange} 
              required 
              style={styles.input} 
              placeholder="Phone No." 
            />
          </label>

          <label style={styles.label}>
            E-mail:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              style={styles.input} 
              placeholder="E-mail" 
            />
          </label>

          <label style={styles.label}>
            Address:
            <textarea 
              rows="5" 
              cols="40" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              placeholder="Enter your address..." 
              style={styles.textarea}
            />
          </label>

          <button type="submit" className="btn btn-primary" style={styles.submitButton}>Submit</button>
        </form>
      </div>

      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary fixed-bottom" data-bs-theme="dark">
        <div className="container-fluid"> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-disabled="true">FragranceGallery &copy; 2024 - 2034</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Inline styles for form layout
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',  // Ensure form elements are stacked vertically
    alignItems: 'flex-start',  // Align to the left
    maxWidth: '400px',
    margin: '0 auto', // Center the form
  },

  label: {
    marginBottom: '12px', // Adds space between label and input
    fontSize: '14px',
  },

  input: {
    marginBottom: '10px',
    padding: '8px',
    width: '100%', // Make input fields take full width of the container
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },

  textarea: {
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },

  submitButton: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',  // Make button take full width of the container
    marginTop: '10px',
  },
};

export default ContactUs;
