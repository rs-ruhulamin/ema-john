import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header/Header'
import Shop from './Shop/Shop'
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewOder from "./ViewOrder/ViewOrder";
import Showproduct from "./ShowProduct/Showproduct";
import F404 from "./Error/F404";
import { CartProvider } from "./Header/Cart/CartContext";
import { ProductsProvider } from "./Database/ProductsProvider";
import Search from "./Header/Search/Search";




function App() {

  return (


    <ProductsProvider>
    <CartProvider>
    <>
     <Router>
     <Header></Header>
    <div className="container-fluid nav-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="nav-menu w-100">
                                <ul className="menu_box m-0 p-0">
                                    <li className="menu_list d-inline-block"><Link to="/" className="menu link" >Home</Link> </li>
                                    <li className="menu_list d-inline-block"><Link to="/order" className="menu link" >order</Link> </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
   
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/order" element={<ViewOder />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:DoneUrl" element={<Showproduct />} />
        <Route path="*" element={<F404/>} />
     
      </Routes>
    </Router>

    </>

    </CartProvider>
    </ProductsProvider>

  )
}



export default App
