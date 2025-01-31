'use client';

import { motion } from 'framer-motion';
import './Feedback.css';
import { InsightCard, TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

function Feedback() {
  return (
    <div className="partner-section" id="sponsor">
      {/* Organized By Section */}

      {/* Our Partners Section */}
      <TitleText
        title="Our Partners"
        textStyles="text-center"
        className="partner-heading"
      />
      <p className="partner-heading">Community Partners</p>

      <div className="sponsor-container">
        <img
          className="sponsorsImages"
          id="rosen"
          src="\gdglogo.png"
          alt="Google Developer Groups"
        />
        <p className="sponsor-text">Google Developer Groups</p>
        <p className="sponsor-location">
          <span className="on-campus">On Campus</span> . Vellore Institute of
          Technology , Chennai
        </p>
      </div>

      <TitleText
        title="Organizers"
        textStyles="text-center"
        className="partner-heading"
      />

      <div className="organizer-container">
        <p className="sponsor-text">
          Department of Computer Science and Engineering
        </p>
        <p className="organizer-text">X</p>
        <p className="sponsor-text">
          Department of Computer Science and Business Systems
        </p>
      </div>
      <p className="organizer-text block text-center">X</p>
      <div className="sponsor-container">
        <img
          className="sponsorsImages"
          id="rosen"
          src="\gdglogo.png"
          alt="Google Developer Groups"
        />
        <p className="sponsor-text">Google Developer Groups</p>
        <p className="sponsor-location">
          <span className="on-campus">On Campus</span> . Sri Eshwar College of
          Engineering
        </p>
      </div>

      {/* Community Partners Section */}
    </div>
  );
}

export default Feedback;
