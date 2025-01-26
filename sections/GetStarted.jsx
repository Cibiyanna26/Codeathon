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
          {/* Timeline Phases */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 0.8, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">IDEA SUBMISSION</h2>
                <small>FEBRUARY 1, 2025</small>
                <p>Registration and Idea Submission Deadline (Online)</p>
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
                <h2 className="heading1">PROTOTYPE PRESENTATION</h2>
                <small>FEBRUARY 8, 2025</small>
                <p>Prototype Presentation and Evaluation via Google Meet</p>
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
                <h2 className="heading1">FINAL HACKATHON</h2>
                <small>FEBRUARY 20, 2025</small>
                <p>Grand Finale (Offline – Top 25 Teams)</p>
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
                <h2 className="heading1">PRIZE DISTRIBUTION</h2>
                <small>FEBRUARY 20, 2025</small>
                <p>Prize Distribution Ceremony</p>
                <span className="right-arrow" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Guidelines Section */}
      <motion.div
        variants={fadeIn('up', 'spring', 0.5, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="guidelines-section mt-10"
      >
        <TitleText title="Guidelines" textStyles="text-center" />
        <div className="guidelines-content mt-6 text-white max-w-4xl mx-auto p-6 rounded-lg bg-gray-900 shadow-lg">
          <ul className="list-disc list-inside text-left text-lg leading-8 space-y-4">
            <li>No registration fee for idea submission.</li>
            <li>
              Only the team leader registers the team with a unique name (no institute names).
            </li>
            <li>Each team consists of 4–6 members from the same college/university.</li>
            <li>Participants can join only one team; overlapping teams will be disqualified.</li>
            <li>All updates will be shared only with the team leader.</li>
            <li>No changes to team members or leader after registration.</li>
            <li>Ideas must align with the given themes.</li>
            <li>
              Shortlisted teams for the Grand Finale pay ₹300 per participant (covers meals).
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default GetStarted;
