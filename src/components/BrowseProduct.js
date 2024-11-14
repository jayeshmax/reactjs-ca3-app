import React from 'react'
import { BrowserRouter as Router, Route, Routes,Link, useNavigate } from "react-router-dom";


function BrowseProduct() {
    const navigate = useNavigate();


    
    const product1 = {
        id: 1,
        name: "Chandan (Sandalwood)",
        price: 180,
        imageUrl: './images/product-images/1.png',
        description: 'Our Chandan (Sandalwood) perfume captures the timeless essence of tranquility, offering a rich, soothing fragrance that lingers gently. With its deep, earthy notes.'
    };


    const product2 = {
        id: 2,
        name: "Mogra (Jasmine)",
        price: 170,
        imageUrl: './images/product-images/2.png',
        description: 'Our Mogra (Jasmine) perfume envelops you in the exquisite fragrance of fresh jasmine blossoms, offering a sweet, floral scent that’s both uplifting and elegant.'
    };


    const product3 = {
        id: 3,
        name: "Gulab (Rose)",
        price: 150,
        imageUrl: './images/product-images/3.png',
        description: "Gulab is the Hindi word for rose, and it's used in many traditional Indian perfumes due to its rich, floral, and classic fragrance. Gulab Attar is particularly popular."
    };


    const product4 = {
        id: 4,
        name: "Raat Ki Rani (Night Jasmine)",
        price: 200,
        imageUrl: './images/product-images/4.png',
        description: 'A delicate, sweet floral scent, Raat Ki Rani (also known as Night Jasmine) blooms in the evening and has a very strong, pleasant fragrance.'
    };


    const product5 = {
        id: 5,
        name: "Agarwood (Oudh)",
        price: 200,
        imageUrl: './images/product-images/5.png',
        description: 'Agarwood, also known as Oudh, is a precious and aromatic resin used in Indian perfumes, famous for its deep, woody, and smoky scent'
    };

    const product6 = {
        id: 6,
        name: "Kesar (Saffron)",
        price: 250,
        imageUrl: './images/product-images/6.png',
        description: 'Our Kesar (Saffron) perfume is a luxurious, warm fragrance that blends the rich, exotic notes of saffron with subtle hints of spice and sweetness. This opulent scent exudes sophistication.'
    };

    const product7 = {
        id: 7,
        name: "Keora",
        price: 200,
        imageUrl: './images/product-images/7.png',
        description: 'Extracted from the Kewra flower (also known as Pandanus), this fragrance is sweet, slightly floral, and used in many traditional Indian attars and perfumes.'
    };

    const product8 = {
        id: 8,
        name: "Jasmine Sambac",
        price: 250,
        imageUrl: './images/product-images/8.png',
        description: 'This is another form of jasmine commonly used in Indian perfumes. Its scent is rich, sweet, and deep, often used in both modern and traditional fragrances.'
    };

    return (
        <div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '40px'}}>
            <p className='h1'>Browse Product</p>
            </div>


            <div class="container text-center">
                {/* First Row=========================== */}
                <div class="row">

                    <div class="col"  id="multipleBox1">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <img className="rounded-4 card-img-top" src={product1.imageUrl}  style={{height:'200px', width:'auto'}}/>
                            <div className="card-body clearfix">
                                <h4 className="card-title">{product1.name}</h4>
                                <h5 className="card-text">Starting at ₹{product1.price}/piece</h5>
                                <p class="card-text">{product1.description}</p>
                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: product1  })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col" id="multipleBox2">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <img className="rounded-4 card-img-top" alt="..."  src={product2.imageUrl}  style={{height:'200px', width:'auto'}} />
                            <div className="card-body clearfix">
                                <h4 className="card-title">{product2.name}</h4>
                                <h5 className="card-text">Starting at ₹{product2.price}/piece</h5>
                                <p class="card-text">{product2.description}</p>

                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: product2  })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>


                    <div class="col" id="multipleBox3">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <img className="rounded-4 card-img-top" alt="..." src={product3.imageUrl}  style={{height:'200px', width:'auto'}} />
                            <div className="card-body clearfix">
                                <h4 className="card-title">{product3.name}</h4>
                                <h5 className="card-text">Starting at ₹{product3.price}/piece</h5>
                                <p class="card-text">{product3.description}</p>
                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: product3 })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Row ====================================*/}
                <div className='row'>
                    <div class="col" id="multipleBox3">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <div className="card-body clearfix">
                                <img className="rounded-4 card-img-top" alt="..." src={product4.imageUrl}  style={{height:'320px', width:'569px'}}/>

                                <h4 className="card-title" style={{marginTop:'20px'}}>{product4.name}</h4>
                                <h5 className="card-text">Starting at ₹{product4.price}/piece</h5>
                                <p class="card-text">{product4.description}</p>
                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: product4  })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col" id="multipleBox3">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <div className="card-body clearfix">
                                <img className="rounded-4 card-img-top" alt="..." src={product5.imageUrl}  style={{height:'320px', width:'569px'}}/>
                                <h4 className="card-title" style={{marginTop:'20px'}}>{product5.name}</h4>
                                <h5 className="card-text">Starting at ₹{product5.price}/piece</h5>
                                <p class="card-text">{product5.description}</p>
                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state:  product5  })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Third Row ===================================*/}
                    <div class="row">

                    <div class="col"  id="multipleBox1">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <img className="rounded-4 card-img-top" src={product6.imageUrl}  style={{height:'200px', width:'auto'}}/>
                            <div className="card-body clearfix">
                                <h4 className="card-title">{product6.name}</h4>
                                <h5 className="card-text">Starting at ₹{product6.price}/piece</h5>
                                <p class="card-text">{product6.description}</p>
                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: product6  })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col" id="multipleBox2">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <img className="rounded-4 card-img-top" alt="..."  src={product7.imageUrl}  style={{height:'200px', width:'auto'}} />
                            <div className="card-body clearfix">
                                <h4 className="card-title">{product7.name}</h4>
                                <h5 className="card-text">Starting at ₹{product7.price}/piece</h5>
                                <p class="card-text">{product7.description}</p>

                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: product7  })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>


                    <div class="col" id="multipleBox3">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <img className="rounded-4 card-img-top" alt="..." src={product8.imageUrl}  style={{height:'200px', width:'auto'}} />
                            <div className="card-body clearfix">
                                <h4 className="card-title">{product8.name}</h4>
                                <h5 className="card-text">Starting at ₹{product8.price}/piece</h5>
                                <p class="card-text">{product8.description}</p>
                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: product8 })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>
                        
                    </div>
                </div>


                

            </div>


            
            <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
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
    )
}

export default BrowseProduct