


import React from 'react'
import '../App';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BookList from './BookList';

const Navbar = () => {

     const navigate = useNavigate();
    return (
        <div className='navbar'>
            <div>
                <Link to="/">
                <h1 onClick={() => navigate(`/books/${BookList}`)}>Book <span style={{color:"antiquewhite"}}>Hub</span></h1>
                </Link>
            </div>
            <div>
                <Link to="/about">
                <h3>About</h3>
                </Link>
            </div>
            <div>
                <Link to="/favorites">
                <h3>Your Favorites</h3>
                </Link>
            </div>
        </div>
    )
}

export default Navbar 