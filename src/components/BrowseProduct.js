import React from 'react'
import { BrowserRouter as Router, Route, Routes,Link, useNavigate } from "react-router-dom";


function BrowseProduct() {
    const navigate = useNavigate();


    
    // Example product data
    const product = {
        id: 1,
        name: "Chandan (Sandalwood)1",
        price: 150,
        imageUrl: './images/perfume-intense.svg'
    };

    return (
        <div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '40px'}}>
            <p className='h1'>Browse Product</p>
            </div>


            <div class="container text-center">
                <div class="row">

                    <div class="col"  id="multipleBox1">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <img className="rounded-4 card-img-top" alt="..." />
                            <div className="card-body clearfix">
                                <h4 className="card-title">{product.name}</h4>
                                <h5 className="card-text">Starting at ₹{product.price}/piece</h5>
                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: { product } })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col" id="multipleBox2">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <img className="rounded-4 card-img-top" alt="..." />
                            <div className="card-body clearfix">
                                <h4 className="card-title">{product.name}</h4>
                                <h5 className="card-text">Starting at ₹{product.price}/piece</h5>
                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: { product } })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>


                    <div class="col" id="multipleBox3">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <img className="rounded-4 card-img-top" alt="..." />
                            <div className="card-body clearfix">
                                <h4 className="card-title">{product.name}</h4>
                                <h5 className="card-text">Starting at ₹{product.price}/piece</h5>
                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: { product } })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            
        </div>
    )
}

export default BrowseProduct