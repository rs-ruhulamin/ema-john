import React, { useState } from 'react';
import "./Showproduct.css"

function Showproduct1(props) {

    const product = props.product;
    var minPrice = parseInt(product.price);
    var discountPrice = minPrice - ((minPrice / 100) * 20);


    const [value, setValue ] = useState('01');

    const handleChange = (event) => {
        const val = event.target.value;
        // Do something with the value
        setValue(val);
    };

    return (
        <div className='row'>






            <div className="col-md-5">
                <div className="main-img">
                    <img className='img-fluid' src={product.img} alt="" />
                </div>

            </div>

            <div className="col-md-7">

                <div className="main-description px-2">
                    <div className="category text-bold">
                        Seller: <span className=' text-secondary'>{product.seller} </span>
                    </div>
                    <div className="product-title text-bold my-3">
                        {product.name}
                    </div>


                    <div className="price-area my-4">
                        <p className="old-price mb-1"><del>${product.price}</del> <span className="old-price-discount text-danger">(20% off)</span></p>
                        <p className="new-price text-bold mb-1">${discountPrice}</p>
                        <p className="text-secondary mb-1">Stock: {product.stock} </p>

                    </div>


                    <div className="buttons d-flex my-5">


                        <div className="block">

                           
                            <input
                                type="number"
                                name="number"
                                className="shadow btn btn-info"
                                value={value}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="block">
                            <button className="shadow btn btn-success" onClick={() => props.cartdetails(product, value)} >Add to cart</button>
                        </div>
                        <div className="block">

                            <a href={product.url} target="_blank" rel="noopener noreferrer" className='shadow btn btn-danger '>Buy On Amazon</a>
                        </div>




                    </div>


                </div>

                <div className="product-details my-4">
                    <p className="details-title text-color mb-1">Product Details</p>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi odio recusandae aliquid ad impedit autem commodi earum voluptatem laboriosam? </p>
                </div>
            </div>









        </div>
    );
};

export default Showproduct1;