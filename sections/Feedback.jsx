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
        <div className="sponsors-section">
          <h4 className="font-normal justify-center flex  lg:text-[50px] text-[35px] text-white">
            Gold Partners
          </h4>
          <div className="sponsors" id="gsp">
            <img className="sponsorsImages" id="dev" src="/devfolio_spon.webp" alt="DEVFOLIO LOGO" />
            <img className="sponsorsImages" id="polygon" src="/polygon_spon.png" alt="POLYGON LOGO" />
          </div>
        </div>

        <div>
          <h4 className="font-normal justify-center flex  lg:text-[50px] text-[35px] text-white">
            Silver Partner
          </h4>
          <div className="sponsors">
            <img className="sponsorsImages" id="replit" src="/replit.jpg" alt="REPLIT LOGO" />
          </div>
        </div>

        <div>
          <h4 className="font-normal justify-center flex  lg:text-[50px] text-[35px] text-white">
            API Partner
          </h4>
          <div className="sponsors">
            <img className="sponsorsImages" id="bee" src="/BeeceptorImg.png" alt="BEECEPTOR LOGO" />
          </div>
        </div>

        <div>
          <h4 className="font-normal justify-center flex  lg:text-[50px] text-[35px] text-white">
            Interview Partners
          </h4>
          <div className="sponsors">
            <img className="sponsorsImages" id="buddy" src="\InterviewBuddyImg.png" alt="INTERVIEW LOGO" />
            <img className="sponsorsImages" id="cake" src="\interviewcakeImg.png" alt="INTERVIEW LOGO" />
          </div>
        </div>

        <div>
          <h4 className="font-normal justify-center flex  lg:text-[50px] text-[35px] text-white">
            Certificate Partner
          </h4>
          <div className="sponsors">
            <img className="sponsorsImages" id="certi" src="\givemycertificate_spon.png" alt="GIVE MY CERTIFICATE LOGO" />
          </div>
        </div>

        <div>
          <h4 className="font-normal justify-center flex  lg:text-[50px] text-[35px] text-white">
            In-Kind Partners
          </h4>
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
