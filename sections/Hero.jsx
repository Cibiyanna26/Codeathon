'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
    <section
      style={{
        padding: '50px 0',
        display: 'flex',
        justifyContent: 'center',
      }}
      id="home"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: 10,
            marginTop: '70px',
          }}
          id="heroPage"
        >
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

        {/* Buttons Section */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px', // Space between buttons
          }}
        >
          {/* Apply Button */}
          <motion.button
            className="Btn font-normal"
            type="button"
            style={{
              backgroundColor: '#00A6FB',
              padding: '12px 24px',
              color: 'white',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              opacity: isImageVisible ? 1 : 0,
              pointerEvents: isImageVisible ? 'auto' : 'none',
              transition: 'opacity 0.3s ease',
            }}
            animate={{
              scale: [1, 1.1, 1], // Slightly enlarges and shrinks back
            }}
            transition={{
              repeat: Infinity, // Infinite loop
              duration: 1, // Animation duration
              ease: 'easeInOut', // Smooth transition
            }}
          >
            <a
              href="https://docs.google.com/spreadsheets/d/1I16tsocCksPMUi396xXEHgXWFD0L3oRdOAdOmzFx_zM/edit?usp=sharing"
              target="_blank"
              style={{ textDecoration: 'none', color: 'white' }}
              className=' font-bold'
            >
              Result of Phase I
            </a>
          </motion.button>


          {/* Download Button */}
          
        </div>

        {/* Image Section */}
        <motion.div
          variants={slideIn('right', 'tween', 0.1, 1.5)}
          style={{
            position: 'relative',
            width: '100%',
            marginTop: '30px',
            onAnimationStart: () => setImageVisible(false), // Hide buttons when sliding starts
            onAnimationComplete: () => setImageVisible(true), // Show buttons when sliding ends
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '300px',
              background:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
              borderTopLeftRadius: '140px',
              zIndex: 0,
              top: '-30px',
            }}
          />
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
              {/* Optional Logo Placement */}
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;