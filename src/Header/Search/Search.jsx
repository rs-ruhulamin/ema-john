import React from 'react';

const Search = () => {
    return (
        <div className='search w-100 position-relative'>
            <input type="search" className='w-100'  />
            <button className=' search_btn position-absolute'> <i className="fa fa-search"></i></button>
        </div>
    );
};

export default Search;