import React from 'react'
import "./Panels.css"
const Panels = () => ( 
<div>
    <div className="row ">
        <h4 className="text-center text-white mt-2">Ecommerce App: Please select an option</h4>

        <div className="col-md-2 panels"/>

            <div className="col-md-2 p-2 panels">
                <div className="card h-100 border bg-dark">
                    <div className="overflow ">
                        <br/>
                        <img src="./tshirtPanel.jpeg" alt="Imagen Panel" className="card-img-top image-panel pt-2" />
                    </div>
                    <div className="card-body border-top ">
                        <h5 className="text-center"><strong>T-shirts</strong></h5>
                        <p className="text-center">Discover our T-shirt section</p>
                        <div className="text-center">
                        <a className="btn btn-primary border button-card" href="/tshirt">Check Out</a>
                        </div>
                    
                    </div>
                </div>
            </div>

            <div className="col-md-2 p-2 panels">
            <div className="card h-100 border bg-dark">
                    <div className="overflow ">
                    <br/>
                        <img src="./trousersPanel.jpg" alt="Imagen Panel"  className="card-img-top image-panel  pt-2" />
                    </div>
                    <div className="card-body border-top">
                        <h5 className="text-center"><strong>Trousers</strong></h5>
                        <p className="text-center">Discover our trouser section</p>
                        <div className="text-center">
                        <a className="btn btn-primary border button-card" href="/trousers">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 p-2 panels">
            <div className="card h-100 border bg-dark">
                    <div className="overflow ">
                    <br/>
                        <img src="./hatPanel.jpeg" alt="Imagen Panel"  className="card-img-top image-panel  pt-2" />
                    </div>
                    <div className="card-body border-top">
                        <h5 className="text-center"><strong>Hats</strong></h5>
                        <p className="text-center">Discover our Hat section</p>
                        <div className="text-center">
                        <a className="btn btn-primary border button-card" href="/hats">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 p-2 panels">
            <div className="card h-100 border bg-dark">
                    <div className="overflow ">
                    <br/>
                        <img src="./ballsPanel.jpeg" alt="Imagen Panel"  className="card-img-top image-panel  pt-2" />
                    </div>
                    <div className="card-body border-top">
                        <h5 className="text-center"><strong>Sport items</strong></h5>
                        <p className="text-center">Discover our Sport Items section</p>
                        <div className="text-center">
                        <a className="btn btn-primary border button-card" href="/sportitems">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 p-2 panels" />

        </div>


        <div className="row ">

        <div className="col-md-2 panels"/>

            <div className="col-md-2 p-2 panels">
                <div className="card h-100 border bg-dark">
                    <div className="overflow ">
                        <br/>
                        <img src="/shoesPanel.jpeg" alt="Imagen Panel" className="card-img-top image-panel pt-2" />
                    </div>
                    <div className="card-body border-top ">
                        <h5 className="text-center"><strong>Shoes</strong></h5>
                        <p className="text-center">Discover our Shoes section</p>
                        <div className="text-center">
                        <a className="btn btn-primary border button-card" href="/shoes">Check Out</a>
                        </div>
                    
                    </div>
                </div>
            </div>

            <div className="col-md-2 p-2 panels">
            <div className="card h-100 border bg-dark">
                    <div className="overflow ">
                    <br/>
                        <img src="./jacketPanel.jpeg" alt="Imagen Panel"  className="card-img-top image-panel  pt-2" />
                    </div>
                    <div className="card-body border-top">
                        <h5 className="text-center"><strong>Jackets</strong></h5>
                        <p className="text-center">Discover our jackets section</p>
                        <div className="text-center">
                        <a className="btn btn-primary border button-card" href="/jackets">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 p-2 panels">
            <div className="card h-100 border bg-dark">
                    <div className="overflow ">
                    <br/>
                        <img src="./snowPanel.jpeg" alt="Imagen Panel"  className="card-img-top image-panel  pt-2" />
                    </div>
                    <div className="card-body border-top">
                        <h5 className="text-center"><strong>Snow Items</strong></h5>
                        <p className="text-center">Discover our Snow Items section</p>
                        <div className="text-center">
                        <a className="btn btn-primary border button-card" href="/snowitems">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 p-2 panels">
            <div className="card h-100 border bg-dark">
                    <div className="overflow ">
                    <br/>
                        <img src="backpackPanel.jpeg" alt="Imagen Panel"  className="card-img-top image-panel  pt-2" />
                    </div>
                    <div className="card-body border-top">
                        <h5 className="text-center"><strong>Backpacks</strong></h5>
                        <p className="text-center">Discover our Backpack section</p>
                        <div className="text-center">
                        <a className="btn btn-primary border button-card" href="/backpack">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 p-2 panels" />

        </div>

</div>
    )

export default Panels;


