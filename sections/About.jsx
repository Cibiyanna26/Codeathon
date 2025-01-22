'use client';

import { motion } from 'framer-motion';
import { InsightCard, TitleText, TypingText } from '../components';


import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

function About() {
  return (
    <section className={`${styles.paddings} relative z-10`} id="about">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TitleText title="About HackStreet 2.0" textStyles="text-center" className="my-5" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">HackStreet</span> is a 24 hour
          long running hackathon, being held on{' '}
          <span className="font-extrabold text-white">3rd and 4th of February.</span>{' '}
           We call for{' '}
          <span className="font-extrabold text-white">
            hackers, artists, coders, designers, tech evangelists, creatives, and
            developers
          </span>{' '}
          from all disciplines to take part to{' '}
          <span className="font-extrabold text-white">win awesome prizes </span>
          and collaborate with other developers and gain immersive experiences. Throughout the weekend hackers
          at Hackstreet will have{' '}
          <span className="font-extrabold text-white">
            unique opportunities to learn 
          </span>{' '}
          from each other. We are determined to
          have an all-inclusive and diverse group of students joining us for the hackathon.
        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
}

export default About;
