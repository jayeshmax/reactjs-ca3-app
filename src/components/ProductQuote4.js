import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductQuote2.css';

const ProductQuote4 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [price, setPrice] = useState(product ? product.price : 0);
  const [scentIntensity, setScentIntensity] = useState("Mild");
  const [quantityLevel, setQuantityLevel] = useState("Travel Size");
  const [isPressurized, setIsPressurized] = useState("No");

  const calculatePrice = (intensity, quantity, pressurized) => {
    let additionalCost = 0;
    if (intensity === "Moderate") additionalCost += 30;
    else if (intensity === "Intense") additionalCost += 50;
    if (quantity === "Standard Size") additionalCost += 30;
    else if (quantity === "Full Size") additionalCost += 50;
    if (pressurized === "Yes") additionalCost += 30;
    setPrice(product.price + additionalCost);
  };

  const handleScentChange = (value) => { setScentIntensity(value); calculatePrice(value, quantityLevel, isPressurized); };
  const handleQuantityChange = (value) => { setQuantityLevel(value); calculatePrice(scentIntensity, value, isPressurized); };
  const handlePressurizationChange = (value) => { setIsPressurized(value); calculatePrice(scentIntensity, quantityLevel, value); };

  const handleRequestSample = () => {
    navigate('/request-sample', {
      state: { product, price, scentIntensity, quantityLevel, isPressurized }
    });
  };

  // Determine which SVG to display based on scent intensity
  const getPerfumeBottleImage = () => {
    switch (scentIntensity) {
      case "Mild":
        return "./images/perfume-mild.svg"; // mild scent image
      case "Moderate":
        return "./images/perfume-moderate.svg"; // moderate scent image
      case "Intense":
        return "./images/perfume-intense.svg"; // intense scent image
      default:
        return "./images/perfume-mild.svg"; // default mild scent image
    }
  };

  return (
    <div className="product-quote-container">
        
        <h1>Product Quote</h1>
      {product ? (
        <div className="quote-content">
          <div className="bottle-container">
            <img
              src={getPerfumeBottleImage()}
              alt="Perfume Bottle"
              className="perfume-bottle"
              style={{
                width: quantityLevel === "Travel Size" ? '180px' : 
                       quantityLevel === "Standard Size" ? '200px' : '220px',
                height: quantityLevel === "Travel Size" ? '300px' : 
                        quantityLevel === "Standard Size" ? '350px' : '400px'
              }}
            />
          </div>
          <div className="quote-details">
            <h2>{product.name}</h2>
            <p>Base Price: Rs. {product.price}</p>
            <p>Product ID: {product.id}</p>

            <h3>Customize Your Product</h3>

            <div>
              <h4>Scent Intensity</h4>
              <button 
                className={`btn btn-outline-primary ${scentIntensity === "Mild" ? "active" : ""}`}
                onClick={() => handleScentChange("Mild")}>Mild (0 Rs)</button>
              <button 
                className={`btn btn-outline-primary ${scentIntensity === "Moderate" ? "active" : ""}`}
                onClick={() => handleScentChange("Moderate")}>Moderate (+30 Rs)</button>
              <button 
                className={`btn btn-outline-primary ${scentIntensity === "Intense" ? "active" : ""}`}
                onClick={() => handleScentChange("Intense")}>Intense (+50 Rs)</button>
            </div>

            <div>
              <h4>Quantity Level</h4>
              <button 
                className={`btn btn-outline-secondary ${quantityLevel === "Travel Size" ? "active" : ""}`}
                onClick={() => handleQuantityChange("Travel Size")}>Travel Size (0 Rs)</button>
              <button 
                className={`btn btn-outline-secondary ${quantityLevel === "Standard Size" ? "active" : ""}`}
                onClick={() => handleQuantityChange("Standard Size")}>Standard Size (+30 Rs)</button>
              <button 
                className={`btn btn-outline-secondary ${quantityLevel === "Full Size" ? "active" : ""}`}
                onClick={() => handleQuantityChange("Full Size")}>Full Size (+50 Rs)</button>
            </div>

            <div>
              <h4>Pressurized</h4>
              <button 
                className={`btn btn-outline-success ${isPressurized === "No" ? "active" : ""}`}
                onClick={() => handlePressurizationChange("No")}>No (0 Rs)</button>
              <button 
                className={`btn btn-outline-success ${isPressurized === "Yes" ? "active" : ""}`}
                onClick={() => handlePressurizationChange("Yes")}>Yes (+30 Rs)</button>
            </div>

            <h3>Total Quote Price: Rs. {price}</h3>

            
            

          </div>
      <button className="btn btn-primary" onClick={handleRequestSample}>Request a Sample</button>

        </div>

        
      ) : (
        <p>No product data available.</p>
      )}


    </div>
  );
};

export default ProductQuote4;
