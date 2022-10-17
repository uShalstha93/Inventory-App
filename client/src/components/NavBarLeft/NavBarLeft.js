import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLeft = () => {

    return (

        <div className='navLink container p-4' style={{ fontSize: "20px", backgroundColor: "#dfdbdb"}}>
            <Link to="/">
                <p className="leftMenuLetter"><i className="bi bi-house-fill mr-2"></i> DASHBOARD</p>
            </Link>
            <Link to="/category">
                <p className="leftMenuLetter"><i className="bi bi-tags-fill mr-2"></i> CATEGORY</p>
            </Link>
            <Link to="/products">
                <p className="leftMenuLetter"><i className="bi bi-archive-fill mr-2"></i> PRODUCTS</p>
            </Link>
            <Link to="/customers">
                <p className="leftMenuLetter"><i className="bi bi-person-fill mr-2"></i> CUSTOMERS</p>
            </Link>
            <Link to="/orders">
                <p className="leftMenuLetter"><i className="bi bi-receipt mr-2"></i> ORDERS</p>
            </Link>
        </div>

    );
}

export default NavBarLeft;