'use client';

// import Link from 'next/link';

import { Link } from 'react-scroll';

import React from 'react';
import './Navbar.css';

function Navbar() {
  const [status, setStatus] = React.useState(false);
  const handleNavClick = () => {
    setStatus(!status);
  };

  return (
    <div className="nav">
      <div className="heading">
        <h2>
          <Link className="navParts" to="home">HACKSTREET 2.0</Link>
        </h2>
      </div>
      <div className="NavBar-desc">
        <Link className="navParts" to="home">HOME</Link>
        <Link className="navParts" to="about">ABOUT</Link>
        <Link className="navParts" to="prize">PRIZE</Link>
        <Link className="navParts" to="faq">FAQs</Link>
        <Link className="navParts" to="sponser">PARTNERS</Link>

      </div>
      <button type="button" onClick={handleNavClick} className="menuButton">
        <img id="menuImg" src="/menuBtn.png" />
      </button>

      <div
        style={{ display: status ? 'block' : 'none' }}
        className="NavBar-description flex flex-col"
      >
        <button type="button" onClick={handleNavClick} className="crossImg">
          <img src="/whiteCross.png" />
        </button>

        <Link className="navParts" to="home">
          HOME
        </Link>
        <br />
        <Link className="navParts" to="about">
          ABOUT
        </Link>
        <br />
        <Link className="navParts" to="prize">
          PRIZE
        </Link>
        <br />
        <Link className="navParts" to="faq">
          FAQs
        </Link>
        <br />
        <Link className="navParts" to="sponser">
          PARTNERS
        </Link>
        <br />
      </div>
    </div>
  );
}

export default Navbar;
