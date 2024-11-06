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
            <svg
              className={`perfume-bottle ${quantityLevel.toLowerCase()}`}
              fill="#000000"
              height="800px"
              width="800px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 442 442"
              xmlSpace="preserve"
              style={{
                width: quantityLevel === "Travel Size" ? '80px' : 
                       quantityLevel === "Standard Size" ? '100px' : '120px',
                height: quantityLevel === "Travel Size" ? '200px' : 
                        quantityLevel === "Standard Size" ? '250px' : '300px'
              }}
            >
              <g>
                <path d="M231.5,50.5c0-5.79-4.71-10.5-10.5-10.5c-5.79,0-10.5,4.71-10.5,10.5S215.21,61,221,61C226.79,61,231.5,56.29,231.5,50.5z" />
                <path d="M346,163.682h-60V122c0-5.522-4.478-10-10-10h-10V10c0-5.523-4.478-10-10-10h-70c-5.523,0-10,4.477-10,10v102h-10 c-5.523,0-10,4.478-10,10v41.682H96c-11.028,0-20,8.972-20,20V422c0,11.028,8.972,20,20,20h250c11.028,0,20-8.972,20-20V183.682 C366,172.653,357.028,163.682,346,163.682z M196,20h50v92h-50V20z M96,422V183.682h70c5.523,0,10-4.477,10-10V132h35v71.682h-85 c-5.523,0-10,4.478-10,10V392c0,5.522,4.477,10,10,10h190c5.522,0,10-4.478,10-10v-60.892c0-5.522-4.478-10-10-10s-10,4.478-10,10 V382H136V223.682h75V352c0,5.522,4.477,10,10,10c5.523,0,10-4.478,10-10V223.682h75V297c0,5.522,4.478,10,10,10s10-4.478,10-10 v-83.318c0-5.522-4.478-10-10-10h-85V132h35v41.682c0,5.523,4.478,10,10,10h70L346.002,422H96z" />
              </g>
            </svg>
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
