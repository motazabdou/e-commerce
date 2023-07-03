import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { crownSvg } from '../../assets';
import './navbar.scss'

const Navbar = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img className='logo' src={crownSvg} />
                </Link>
                <div className='nav-links'>
                    <Link to='/shop' className='nav-link'>Shop</Link>
                    <Link to='/sign-in' className='nav-link'>Sign In</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar;