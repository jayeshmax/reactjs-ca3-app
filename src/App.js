import React from "react";
import { BrowserRouter as Router, Route, Routes,Link, useNavigate } from "react-router-dom";
import ProductQuote from  "./components/ProductQuote4"
import RequestSampleForm from "./components/RequestSampleForm";
import BrowseProduct from "./components/BrowseProduct";
import ContactUs from "./components/ContactUs";


const App = () => {
    return (
        <Router>
            <div>
                <center>
                    <img src="./images/fragrance-gallery-logo.png" style={{ height: '70px', width: 'auto', marginBottom:'5px' }} alt="logo" />
                </center>

                <nav className="navbar navbar-expand-sm bg-danger navbar-dark sticky-top" data-bs-theme="dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">FragranceGallery</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/" >Home</Link>
                                </li>
                                <li>
                                    <a className="nav-link active" aria-current="page" >|</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/browse-product">Browse Product</Link>
                                </li>
                                <li>
                                    <a className="nav-link active" aria-current="page" >|</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product-quote" element={<ProductQuote />} />
                    <Route path="/request-sample" element={<RequestSampleForm />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/browse-product" element={<BrowseProduct />} />
                </Routes>
            </div>
        </Router>
    );
};

const Home = () => {
    const navigate = useNavigate();

    // Example product data
    const product1 = {
        id: 1,
        name: "Chandan (Sandalwood)",
        price: 180,
        imageUrl: './images/product-images/1.png',
        description: 'Sandalwood is a quintessential Indian fragrance, known for its warm, creamy, and soothing scent. Many Indian perfume brands offer Chandan as a signature fragrance.'
    };


    const product2 = {
        id: 2,
        name: "Mogra (Jasmine)",
        price: 170,
        imageUrl: './images/product-images/2.png',
        description: 'Mogra is a fragrant jasmine flower, widely used in Indian perfumes for its sweet, floral, and intoxicating scent.'
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
        description: 'Agarwood, also known as Oudh, is a precious and aromatic resin used in Indian perfumes, famous for its deep, woody, and smoky scent Liked by many.'
    };

    const product6 = {
        id: 6,
        name: "Kesar (Saffron)",
        price: 250,
        imageUrl: './images/product-images/6.png',
        description: 'Kesar or saffron is a highly aromatic spice in India, and perfumes made with saffron notes are warm, sweet, and exotic.'
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

        <center style={{ color: 'white',backgroundImage: 'url(./images/main-page-background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
        <br />
        <br />
        <br />
        <p className="h1">Welcome to FragranceGallery</p>


        <br />
        <br />
        <p className="h1">Elevate Your Presence with a Fragrance that Defines You.</p>

        <div className="d-inline-flex p-2">
            <form >
                <Link className="nav-link active" to="/browse-product">
                    <input type="submit" className="btn btn-primary btn-lg shadow-lg" value="Browse Product" style={{ margin: '20px' }} />
                </Link>
            </form>

            <form>
                <Link className="nav-link active" to="/browse-product">
                    <input type="submit" className="btn btn-success btn-lg shadow-lg" value="Contact us" style={{ margin: '20px' }} />
                </Link>

            </form>
        </div>

        <p className="h2" style={{ textShadow: '2px 2px #5c5858', marginTop:'30px' }}>Most popular choices</p>

        <div className="d-inline-flex p2">

            <div className="shadow-lg p-3 card mb-3 text-start rounded-4" style={{ width: '18rem', margin: '20px',height:'370px' }}>
                <img className="rounded-4 card-img-top" src={product3.imageUrl} style={{ height: '143px', width: '254px' }} />
                <div className="card-body">
                    <h3 className="card-title">{product3.name}</h3>
                    <p className="card-text h5" style={{marginTop:'20px'}}>Starting at ₹{product3.price}/piece</p>

                    <button 
                        style={{marginTop:'20px'}}
                        className="p-2 ms-auto btn btn-success float-end" 
                        onClick={() => navigate("/product-quote", { state:  product3  })}
                    >
                        Get a Quote
                    </button>

                </div>
            </div>


            <div className="shadow-lg p-3 card mb-3 text-start rounded-4" style={{ width: '18rem', margin: '20px',height:'370px' }}>
                <img className="rounded-4 card-img-top" src={product2.imageUrl} style={{ height: '143px', width: '254px' }} />
                <div className="card-body">
                    <h3 className="card-title">{product2.name}</h3>
                    <p className="card-text h5" style={{marginTop:'20px'}}>Starting at ₹{product3.price}/piece</p>

                    <button 
                        style={{marginTop:'20px'}}
                        className="p-2 ms-auto btn btn-success float-end" 
                        onClick={() => navigate("/product-quote", { state:  product3  })}
                    >
                        Get a Quote
                    </button>

                </div>
            </div>


            <div className="shadow-lg p-3 card mb-3 text-start rounded-4" style={{ width: '18rem', margin: '20px',height:'370px' }}>
                <img className="rounded-4 card-img-top" src={product6.imageUrl} style={{ height: '143px', width: '254px' }} />
                <div className="card-body">
                    <h3 className="card-title">{product6.name}</h3>
                    <p className="card-text h5" style={{marginTop:'20px'}}>Starting at ₹{product6.price}/piece</p>

                    <button 
                        style={{marginTop:'20px'}}
                        className="p-2 ms-auto btn btn-success float-end" 
                        onClick={() => navigate("/product-quote", { state:  product6  })}
                    >
                        Get a Quote
                    </button>

                </div>
            </div>

        </div>

        <p className="h1" style={{ textShadow: '4px 4px #5c5858', marginTop:'30px' }}>Newly Released</p>


        <div class="container text-center">
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

                    <div class="col"  id="multipleBox2">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <img className="rounded-4 card-img-top" src={product8.imageUrl}  style={{height:'200px', width:'auto'}}/>
                            <div className="card-body clearfix">
                                <h4 className="card-title">{product8.name}</h4>
                                <h5 className="card-text">Starting at ₹{product8.price}/piece</h5>
                                <p class="card-text">{product8.description}</p>
                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: product8  })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col"  id="multipleBox3">
                        <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                            <img className="rounded-4 card-img-top" src={product5.imageUrl}  style={{height:'200px', width:'auto'}}/>
                            <div className="card-body clearfix">
                                <h4 className="card-title">{product5.name}</h4>
                                <h5 className="card-text">Starting at ₹{product5.price}/piece</h5>
                                <p class="card-text">{product5.description}</p>
                                <button 
                                    className="p-2 ms-auto btn btn-success float-end" 
                                    onClick={() => navigate("/product-quote", { state: product5  })}
                                >
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



        
        </center>

        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid"> 
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

export default App;
