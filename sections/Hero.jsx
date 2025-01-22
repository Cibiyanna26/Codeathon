'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Assuming you have motion utility functions (slideIn, staggerContainer, textVariant)
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

function Hero() {
  const [isImageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    // Adding script dynamically to the DOM
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // Cleanup on component unmount
    };
  }, []);

  return (
    <section style={{ padding: '50px 0', display: 'flex', justifyContent: 'center' }} id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', zIndex: 10, marginTop: '70px' }} id="heroPage">
          <motion.h1
            variants={textVariant(1.1)}
            style={{
              fontSize: '2.5rem', // Adjust text size
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white', // Change text color to white
              marginBottom: '20px',
            }}
            id="head"
          >
            Innovation | Sustainability | Impact
          </motion.h1>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          {/* Discord Button, visibility controlled */}
          <motion.button
            className="Btn font-normal"
            type="button"
            style={{
              backgroundColor: '#4CAF50',
              padding: '12px 24px',
              color: 'white',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '20px',
              opacity: isImageVisible ? 1 : 0, // Hide button when the image slides
              pointerEvents: isImageVisible ? 'auto' : 'none', // Disable button interaction when hidden
              transition: 'opacity 0.3s ease', // Smooth transition
            }}
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSchw2TJX7HNnYJlGXx13jlzk9KjDT6NBYXz1gL0PMcQDjBy8g/viewform" style={{ textDecoration: 'none', color: 'white' }}>
              Apply
            </a>
          </motion.button>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.1, 1.5)}
          style={{
            position: 'relative',
            width: '100%',
            marginTop: '30px', // Added margin to separate button and image
            onAnimationStart: () => setImageVisible(false), // Hide button when sliding starts
            onAnimationComplete: () => setImageVisible(true), // Show button when sliding ends
          }}
        >
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '300px',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
            borderTopLeftRadius: '140px',
            zIndex: 0,
            top: '-30px'
          }} />
          <img
            src="/gif3.gif"
            alt="cover"
            style={{
              width: '100%',
              height: '500px',
              objectFit: 'cover',
              borderTopLeftRadius: '140px',
              position: 'relative',
              zIndex: 10,
            }}
          />

          <a href="#explore">
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '-50px',
                paddingRight: '40px',
                position: 'relative',
                zIndex: 10,
              }}
            >
              {/* <img
                src="/logo_hack.png"
                alt="stamp"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                }}
              /> */}
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
