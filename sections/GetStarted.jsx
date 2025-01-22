'use client';

import { motion } from 'framer-motion';
import './timeline.css';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText } from '../components';

function GetStarted() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex lg:flex-col flex-col gap-8 m-auto`}
      >
        <TitleText title="Timeline" textStyles="text-center" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn('down', 'spring', 0.2, 1.5)}
      >
        <div className="timeline">
          {/* Phase I: Idea Submission */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 0.8, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">IDEA SUBMISSION</h2>
                <small>JANUARY 26, 2025</small>
                <p>Registration and Idea Submission Deadline (Online)</p>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div>

          {/* Phase II: Prototype Presentation */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('left', 'spring', 0.9, 1.5)}
          >
            <div className="container right">
              <img src="/two.jpg" />
              <div className="text-box">
                <h2 className="heading1">PROTOTYPE PRESENTATION</h2>
                <small>FEBRUARY 5, 2025</small>
                <p>Prototype Presentation and Evaluation via Google Meet</p>
                <span className="right-arrow" />
              </div>
            </div>
          </motion.div>

          {/* Phase III: Final Hackathon */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 1, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">FINAL HACKATHON</h2>
                <small>FEBRUARY 20, 2025</small>
                <p>Grand Finale (Offline – Top 25 Teams)</p>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div>

          {/* Prize Distribution */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('left', 'spring', 1.1, 1.5)}
          >
            <div className="container right">
              <img src="/two.jpg" />
              <div className="text-box">
                <h2 className="heading1">PRIZE DISTRIBUTION</h2>
                <small>FEBRUARY 20, 2025</small>
                <p>Prize Distribution Ceremony</p>
                <span className="right-arrow" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default GetStarted;
