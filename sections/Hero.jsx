'use client';

import { motion } from 'framer-motion';
import './hero.css';

import { useEffect } from 'react';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

function Hero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={`${styles.yPaddings} flex justify-center`} id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div
          className="flex justify-center items-center flex-col  z-10 lg:mt-[70px] mt-[70px]"
          id="heroPage"
        >
          <motion.h1
            variants={textVariant(1.1)}
            className={styles.heroHeading}
            id="head"
          >
            The Incognito
          </motion.h1>
          <motion.div
            variants={textVariant(1.1)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Realm</h1>
            {/* <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1> */}
          </motion.div>
        </div>

        <div className="frontPageBtn">
          <div
            className="apply-button"
            data-hackathon-slug="hackstreet24"
            data-button-theme="light"
            style={{ height: '44px', width: '312px' }}
          />

          <button className="Btn font-normal" type="button">
            <a href="https://discord.com/invite/zKFdRQ4z9D">Discord</a>
          </button>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.1, 1.5)}
          className="relative w-full md:-mt-[-70px] -mt-[-20px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <img
            src="/gif3.gif"
            alt="cover"
            className="w-full sm:h-[500px] h-[500px] lg:h-[500px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] lg:-mt-[50px] pr-[40px] relative z-[10]">
              <img
                src="/logo_hack.png"
                alt="stamp"
                className="sm:w-[155px] lg:w-[100px] w-[100px] sm:h-[155px] lg:h-[100px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
