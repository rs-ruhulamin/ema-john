import React, { useState, useEffect } from 'react';
import { useProduct } from '../../Database/ProductsProvider';
import { Link } from 'react-router-dom';

const Search = () => {
    const { GetAllProducts } = useProduct();

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // console.log('Search term:', searchTerm);
        if (GetAllProducts) {
            if (searchTerm.trim() !== '') {
                const words = searchTerm.split(' ').filter(word => word.trim() !== '');
                // console.log('Words:', words);
                if (words.length > 1 && searchTerm.trim().includes(' ')) {
                    const filteredResults = GetAllProducts.filter(item =>
                        item.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
                    );

                    setSearchResults(filteredResults);
                } else {
                    setSearchResults([]);
                }
            } else {
                setSearchResults([]);
            }
        }
    }, [searchTerm, GetAllProducts]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='search w-100 position-relative'>
            <input type="text" value={searchTerm} onChange={handleChange} className='w-100' placeholder='Search Your Dream Products' />
            <button className=' search_btn position-absolute'> <i className="fa fa-search"></i></button>

            {searchResults.length > 0 && (
                <div className='showing_results position-absolute'>
                    <ul>
                        {searchResults.map((item, index) => (

                            <Link>                             <li key={index}>{item.name}</li> </Link>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Search;
