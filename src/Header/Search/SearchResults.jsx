import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = (props) => {


    const product = props.products;

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

    let productTitle = product.name;

    var seoUrl = generateSEOUrl(productTitle);
    let seoUrl2 = seoUrl + "-" + product.key + ".html";
    let DoneUrl = seoUrl2;


    return (
        <li >   
        <div>
      

        <Link to={DoneUrl}><h3 className='p_titel'>  {product.name} </h3></Link>
        
        </div>
          </li> 
    );
};

export default SearchResults;