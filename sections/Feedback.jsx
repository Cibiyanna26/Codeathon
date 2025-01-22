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

      <div>

        <div>
          {/* <h4 className="font-normal justify-center flex  lg:text-[50px] text-[35px] text-white">
            In-Kind Partners
          </h4> */}
          <div className="sponsors inkind-sp">
            <img className="sponsorsImages" id="alpha" src="\WolframAlphaImg.png" alt="WOLFRAM ALPHA LOGO" />
            <img className="sponsorsImages" id="echo3d" src="\echo3DImg.png" alt="ECHO 3D LOGO" />
            <img className="sponsorsImages" id="xyz" src="\xyzImg.png" alt="XYZ LOGO" />
            <img className="sponsorsImages" id="axure" src="\axureImg.svg" alt="AXURE LOGO" />
            <img className="sponsorsImages" id="rosen" src="\rosenfeldImg.png" alt="ROSENFELD LOGO" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
