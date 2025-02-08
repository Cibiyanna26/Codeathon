'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaLinkedin,
  FaSquareFacebook,
  FaGithubSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { socials } from '../constants';
import './Footer.css';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

function Footer() {
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
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-6 relative`}
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-row gap-6 footerMain`}>
        
        {/* Horizontal Layout with Reduced Space */}
        <div className="flex flex-wrap justify-between items-start text-white gap-6">
          
          {/* College Name & Address */}
          <div className="font-bold text-[100%] opacity-50 w-[28%] ml-5">
            <h4 className="text-[22px] font-extrabold">Sri Eshwar College of Engineering</h4>
            <div className="flex flex-row items-center gap-2">
              <IoLocationSharp className="text-2xl" />
              <div className="text-[14px]">
                <p>Vadasithur, Kinathukadavu</p>
                <p>Coimbatore, India</p>
              </div>
            </div>
          </div>

          {/* Faculty Coordinators */}
          <div className="font-bold text-[100%] opacity-50 w-[28%]">
            <h4 className="text-[18px] font-extrabold">Faculty Coordinators</h4>
            <div className="flex flex-row gap-2 items-center">
              <FaPhoneAlt className="text-sm" />
              <p className='text-[14px]'>
                Dr. S. Sampath Kumar, ASP/CSE: <a href="tel:+91 88382 94783">+91 88382 94783</a>
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaPhoneAlt className="text-sm" />
              <p className='text-[14px]'>
                Dr. K. Cholaraja, AP/CSBS: <a href="tel:+91 75982 90289">+91 75982 90289</a>
              </p>
            </div>
          </div>

          {/* GDG Coordinators */}
          <div className="font-bold text-[100%] opacity-50 w-[28%] ">
            <h4 className="text-[18px] font-extrabold">GDG Coordinators</h4>
            <div className="flex flex-row gap-2 items-center">
              <FaPhoneAlt className="text-sm" />
              <p className='text-[14px]'>
                Griffin Anushual: <a href="tel:+91 89033 96562">+91 89033 96562</a>
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaPhoneAlt className="text-sm" />
              <p className='text-[14px]'>
                Cibiyanna P: <a href="tel:+91 XXXXXXXXXX">+91 88703 22548</a>
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              {/* <FaPhoneAlt className="text-sm" /> */}
              <p className='text-[14px] ml-6'>
                Subiksha M
              </p>
            </div>
          </div>

        </div>

        {/* Social Media Links */}
        <div className="flex flex-col font-bold text-[22px] text-white gap-3">
          <p>Find Us Here:</p>
          <div className="flex gap-3">
            {socials.map((social, index) => (
              <button className="social-btn" key={index}>
                <a href={social.href} target="_main">
                  <img
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className="w-[22px] h-[22px] object-contain cursor-pointer"
                  />
                </a>
              </button>
            ))}
          </div>
        </div>
        
      </div>
    </motion.footer>
  );
}

export default Footer;
