import React from "react";

const App = () => {
  return (
    <div>
        <center>
          <img src="./assets/logo.png" style={{ height: '50px', width: 'auto', margin: '10px' }} alt="logo" />
        </center>

        <nav className="navbar navbar-expand-sm bg-danger navbar-dark sticky-top" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">HomelyStay</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="./contactus.html">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        <center style={{ color: 'white' }}>
            <br />
            <br />
            <br />
            <p className="h1">Welcome to HomelyStay</p>

            <br />
            <br />
            <p className="h1">Find unique places to stay and things to do, all over the world.</p>

            <div className="d-inline-flex p-2">
                <form action="http://127.0.0.1:5500/login.html">
                <input type="submit" className="btn btn-primary btn-lg shadow-lg" value="Login" style={{ margin: '20px' }} />
                </form>

                <form action="http://127.0.0.1:5500/signup/signup.html">
                <input type="submit" className="btn btn-success btn-lg shadow-lg" value="Signup" style={{ margin: '20px' }} />
                </form>
            </div>

            <p className="h2" style={{ textShadow: '2px 2px #5c5858' }}>Available Countries</p>

            <div className="d-inline-flex p2">

                <div className="shadow-lg p-3 card mb-3 text-start rounded-4" style={{ width: '18rem', margin: '20px' }}>
                <img className="rounded-4 card-img-top" src="./assets/india.jpg" alt="India" style={{ height: '200px', width: '200px' }} />
                <div className="card-body">
                    <h5 className="card-title">India</h5>
                    <p className="card-text">A vibrant land steeped in history, is famous for its festivals, delicious curries, and the majestic Monuments</p>
                </div>
                </div>

                <div className="shadow-lg p-3 card mb-3 text-start rounded-4" style={{ width: '18rem', margin: '20px' }}>
                <img className="rounded-4 card-img-top" src="./assets/usa.jpg" alt="USA" style={{ height: '200px', width: 'auto' }} />
                <div className="card-body">
                    <h5 className="card-title">USA</h5>
                    <p className="card-text">The United States, a melting pot of cultures, is known for its megacities, Hollywood, and democratic system.</p>
                </div>
                </div>

                <div className="shadow-lg p-3 card mb-3 text-start rounded-4" style={{ width: '18rem', margin: '20px' }}>
                    <img className="rounded-4 card-img-top" src="./assets/canada.jpg" alt="Canada" style={{ height: '200px', width: 'auto' }} />
                    <div className="card-body">
                        <h5 className="card-title">Canada</h5>
                        <p className="card-text">Canada, vast with stunning landscapes, boasts maple syrup, hockey, and a long border with the United States.</p>
                    </div>
                </div>



        
            </div>




            <div class="container text-center">
                <div class="row">

                    <div class="col"  id="multipleBox1">
                        
                    <div className="shadow-lg p-3 card mb-3 text-start rounded-4">
                        <img className="rounded-4 card-img-top" alt="..." />

                        <div className="card-body clearfix">
                            <h2 className="card-title">500/day</h2>
                            <h5 className="card-text">dfdfdf</h5>
                            <p className="card-text">sdfsddd</p>

                            <button 
                                className="p-2 ms-auto btn btn-success float-end" 
                            >
                                Get a price
                            </button>
                        </div>
                    </div>


                    </div>
                    <div class="col" id="multipleBox2">
                        
                    </div>
                    <div class="col" id="multipleBox3">
                        
                    </div>
                </div>
            </div>
        </center>

        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="#">&copy;</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-disabled="true">HomelyStay 2024</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default App;
