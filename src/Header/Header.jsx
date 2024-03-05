import React from 'react';
import './header.css'
import Search from './Search/Search';
import Account from './Account/Account';
import Cart from './Cart/Cart';


const Header = () => {


    return (
        <div className="">
            {/* this is Area Of Logo */}
            <div className="container">
                {/* this is Area Of Logo */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-boxs w-100 d-flex justify-content-between align-items-center">
                            <div className="logo-box">
                                <a href="/" className='logo'><img src="/assets/images/logo.png" alt="" /></a>
                            
                            </div>
                            <div className="search_box">
                                <Search />
                            </div>
                            <div className="other_box d-flex">
                               <Account/>
                               <Cart></Cart>
                              
                            </div>
                        </div>
                    </div>
                </div>
     
            </div>

        
        </div>

    );
};

export default Header;





