'use client';

import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import React from 'react';

function Navbar() {
  const [status, setStatus] = React.useState(false);

  const handleNavClick = () => {
    setStatus(!status);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        width: '100%',
        position: 'fixed', // Fixed position for always visible navbar
        top: 0,
        left: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)', // Optional: subtle glass effect
        backgroundColor: 'transparent', // Removed background color
      }}
    >
      {/* Logo or Title */}
      <div>
        <h2 style={{ margin: 0 }}>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold', // Bold text for logo
            }}
            to="home"
          >
            CODEATHON
          </Link>
        </h2>
      </div>

      {/* Desktop Navigation */}
      <div
        className="NavBar-desc"
        style={{
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        {['home', 'about', 'prize', 'faq', 'sponsor'].map((item) => (
          <Link
            key={item}
            style={{
              textDecoration: 'none',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold', // Bold text for nav links
            }}
            to={item}
          >
            {item.toUpperCase()}
          </Link>
        ))}

        {/* Download Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: '#008CBA',
            padding: '10px 20px',
            color: 'white',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          <a
            href="/Template.pptx"
            download
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Download PPT Template
          </a>
        </motion.button>
      </div>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={handleNavClick}
        className="menuButton"
        style={{
          display: 'none', // Default hidden for desktop
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img src="/menuBtn.png" alt="Menu" style={{ width: '24px' }} />
      </button>

      {/* Mobile Menu */}
      {status && (
        <div
          className="NavBar-description"
          style={{
            position: 'absolute',
            top: '60px',
            right: '0',
            backgroundColor: '#333',
            padding: '20px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <button
            onClick={handleNavClick}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              fontSize: '20px',
              marginBottom: '10px',
              alignSelf: 'flex-end',
            }}
          >
            ✕
          </button>
          {['home', 'about', 'prize', 'faq', 'sponsor'].map((item) => (
            <Link
              key={item}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold', // Bold text for mobile nav links
              }}
              to={item}
            >
              {item.toUpperCase()}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: '#008CBA',
              padding: '10px 20px',
              color: 'white',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            <a
              href="/Template.pptx"
              download
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Download PPT Template
            </a>
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
