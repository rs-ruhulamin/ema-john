import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className='account'>
             <div className="account-icon">
                                    <Link>
                                     <i className="fa fa-user"></i>
                                     <span> Login | Sign Up  </span>
                                    </Link>
</div>
        </div>
    );
};

export default Account;