'use client';

import { motion } from 'framer-motion';
import './Feedback.css';
import { InsightCard, TitleText, TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

function Feedback() {
  return (
    <div className="partner-section" id="sponser">

      <TitleText title="Our Partners" textStyles="text-center" className="partner-heading" />

      <div className="sponsor-container">
        <img className="sponsorsImages" id="rosen" src="\gdglogo.png" alt="Google Developer Logo" />
        <p className="sponsor-text">Google Developer Groups</p>
        <p 
  className="sponser-location" 
  style={{ color: 'white' }}
>
  On Campus .  Sri Eshwar College Of Engineering
</p>

      </div>
    </div>
  );
}

export default Feedback;