import React from 'react';
import { Link } from "react-router-dom";
import "./product.css";

function Product(props) {
    const { key, img, name, price, seller, star, starCount, } = props.products;


    function generateSEOUrl(text) {
        // Convert text to lowercase
        let url = text.toLowerCase();

        // Remove symbols and special characters
        url = url.replace(/[^\w\s-]/g, "");

        // Replace spaces with hyphens
        url = url.replace(/\s+/g, "-");

        // Remove duplicate hyphens
        url = url.replace(/-{2,}/g, "-");

        // Trim leading and trailing hyphens
        url = url.replace(/^-+|-+$/g, "");

        return url;
    }

    let productTitle = props.products.name;

    var seoUrl = generateSEOUrl(productTitle);
    let seoUrl2 = seoUrl + "-" + key + ".html";
    let DoneUrl = seoUrl2;

    let text = name;
    let maxLength = 100;
    let title = text.length > maxLength ? text.slice(0, maxLength) + "..." : text;


    // for the Review star
    let minPrice0 = parseInt(price);
    let discountPrice0 = minPrice0 - ((minPrice0 / 100) * 20);

    let stars = parseInt(star)

    return (
        
        <div className="shop_box"  key={key} >
            <div className="img">
                <img src={img} alt="" />
            </div>
            <Link to={DoneUrl}><h3 className='p_titel'>{title}</h3></Link>

            <span className='seller text-info'>By:- {seller}</span>
            <h4 className="price mainPrice text-danger">{price}$ </h4>
            <h5 className='discountPrice'>
                <del>{discountPrice0}$ </del> <span className='ml-1 text-danger'> (20% off)</span>
            </h5>

            {stars === 0 && (
                <div className="star-box">
                    <span className='star-box-text'> ({starCount}) </span>
                </div>
            )}
            {stars === 1 && (
                <div className="star-box">
                    <i class="fa-solid fa-star"></i>
                    <span className='star-box-text'> ({starCount}) </span>
                </div>
            )}
            {stars === 2 && (
                <div className="star-box">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span className='star-box-text'> ({starCount}) </span>
                </div>
            )}

            {stars === 3 && (
                <div className="star-box">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                    <span className='star-box-text'> ({starCount}) </span>
                </div>
            )}
            {stars === 4 && (
                <div className="star-box">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                    <span className='star-box-text'> ({starCount}) </span>
                </div>
            )}
            {stars === 5 && (
                <div className="star-box">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                    <span className='star-box-text'> ({starCount}) </span>
                </div>
            )}

          




        </div>
    );







}



export default Product;