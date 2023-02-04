

/* ====2 version  */

 import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BookList from './BookList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div>
        <Link to="/">
          <h1 onClick={() => navigate(`/books/${BookList}`)}>BookHub</h1>
        </Link>
      </div>

      
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/about">
          <h3>About</h3>
        </Link>
        
        <Link to="/favorites">
          <h3>Your Favorites</h3>
        </Link>
      </div>

      <div className="hamburger">
          <FontAwesomeIcon onClick={() => setMenuOpen(!menuOpen)} icon={faBars} />
      </div>

    </div>
  );
};

export default Navbar;  




/* ===1 version ==================== */

/* import React from 'react'
import '../App';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BookList from './BookList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

     const navigate = useNavigate();
    return (
        <div className='navbar'>
            <div>
                <Link to="/">
                <h1 onClick={() => navigate(`/books/${BookList}`)}>BookHub</h1>
                </Link>
            </div>
            <div>
                <div className="hamburger">
                <FontAwesomeIcon icon={faBars} />
            </div>
            </div>
            <div>
                <Link to="/about">
                <h3 className='abt'>About</h3>
                </Link>
            </div>
            <div>
                <Link to="/favorites">
                <h3 className='fvr'>Your Favorites</h3>
                </Link>
            </div>
        </div>
    )
}

export default Navbar */