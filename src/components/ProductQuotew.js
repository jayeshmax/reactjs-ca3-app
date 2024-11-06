// src/ProductQuote.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductQuote.css'; // Import the CSS file for styles and animations

const ProductQuote = () => {
  const location = useLocation();
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

  const handleScentChange = (value) => {
    setScentIntensity(value);
    calculatePrice(value, quantityLevel, isPressurized);
  };

  const handleQuantityChange = (value) => {
    setQuantityLevel(value);
    calculatePrice(scentIntensity, value, isPressurized);
  };

  const handlePressurizationChange = (value) => {
    setIsPressurized(value);
    calculatePrice(scentIntensity, quantityLevel, value);
  };

  return (
    <div className="product-quote-container">
      <h1>Product Quote</h1>
      {product ? (
        <div className="quote-content">
          <div className="bottle-container">
            <div className={`perfume-bottle ${scentIntensity.toLowerCase()} ${quantityLevel.toLowerCase()} ${isPressurized.toLowerCase()}`}>
              {/* Placeholder for animated bottle */}
            </div>
          </div>
          <div className="quote-details">
            <h2>{product.name}</h2>
            <p>Base Price: Rs. {product.price}</p>
            <p>Product ID: {product.id}</p>

            <h3>Customize Your Product</h3>

            <div>
              <h4>Scent Intensity</h4>
              <button onClick={() => handleScentChange("Mild")}>Mild (0 Rs)</button>
              <button onClick={() => handleScentChange("Moderate")}>Moderate (+30 Rs)</button>
              <button onClick={() => handleScentChange("Intense")}>Intense (+50 Rs)</button>
            </div>

            <div>
              <h4>Quantity Level</h4>
              <button onClick={() => handleQuantityChange("Travel Size")}>Travel Size (0 Rs)</button>
              <button onClick={() => handleQuantityChange("Standard Size")}>Standard Size (+30 Rs)</button>
              <button onClick={() => handleQuantityChange("Full Size")}>Full Size (+50 Rs)</button>
            </div>

            <div>
              <h4>Pressurized</h4>
              <button onClick={() => handlePressurizationChange("No")}>No (0 Rs)</button>
              <button onClick={() => handlePressurizationChange("Yes")}>Yes (+30 Rs)</button>
            </div>

            <h3>Total Quote Price: Rs. {price}</h3>
          </div>
        </div>
      ) : (
        <p>No product data available.</p>
      )}
    </div>
  );
};

export default ProductQuote;
