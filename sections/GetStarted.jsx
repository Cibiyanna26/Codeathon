'use client';

import { motion } from 'framer-motion';
import './timeline.css';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText } from '../components';
// import { startingFeatures } from '../constants';

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
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 0.8, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">REGISTRATIONS</h2>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('left', 'spring', 0.9, 1.5)}
          >
            <div className="container right">
              <img src="/two.jpg" />
              <div className="text-box">
                <h2 className="heading1">HACKING PERIOD STARTS</h2>
                <small>3RD FEBRUARY, 2024</small>
                <p>3:00 PM onwards</p>
                <span className="right-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 1, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">MID EVALUATION</h2>
                <small>3RD FEBRUARY, 2024</small>
                <p>9:00 PM onwards</p>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('left', 'spring', 1.1, 1.5)}
          >
            <div className="container right">
              <img src="/two.jpg" />
              <div className="text-box">
                <h2 className="heading1">HACKING PERIOD ENDS</h2>
                <small>4TH FEBRUARY, 2024</small>
                <p>3:00 PM </p>
                <span className="right-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 1.2, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">PROJECT SUBMISSION</h2>
                <small>4TH FEBRUARY, 2024</small>
                <p>3:00 PM - 3:30 PM</p>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('left', 'spring', 1.2, 1.5)}
          >
            <div className="container right">
              <img src="/two.jpg" />
              <div className="text-box">
                <h2 className="heading1">FINAL EVALUATION</h2>
                <small>4TH FEBRUARY, 2024</small>
                <p>3:30 PM onwards</p>
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
