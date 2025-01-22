'use client';

import { motion } from 'framer-motion';
import { TitleText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

function About() {
  return (
    <section className="py-24 relative z-10 px-6 sm:px-12" id="about">
      <div className="gradient-02 absolute inset-0 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-5xl w-full mx-auto flex flex-col items-center text-center relative z-10"
      >
        <TitleText title="Sri Eshwar Thiran Codeathon" textStyles="text-center" className="mb-6" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-4 font-normal sm:text-[28px] text-[18px] text-secondary-white"
        >
          <span className="font-extrabold text-white">Sri Eshwar Thiran Codeathon</span> is a multi-phase hackathon culminating in the Grand Finale on{' '}
          <span className="font-extrabold text-white">February 20, 2025</span>. We call for{' '}
          <span className="font-extrabold text-white">coders, designers, innovators, and problem-solvers</span> from all disciplines to participate, tackle real-world challenges, and{' '}
          <span className="font-extrabold text-white">win exciting prizes</span>.
        </motion.p>

        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="mt-10 font-normal sm:text-[24px] text-[16px] text-secondary-white"
        >
          Participants will have opportunities to collaborate with peers, gain insights from industry experts, and present impactful solutions aligned with the{' '}
          <span className="font-extrabold text-white">United Nations' Sustainable Development Goals (SDGs)</span>. We are committed to fostering an inclusive and diverse environment, ensuring a transformative experience for all students joining us for the{' '}
          <span className="font-extrabold text-white">Codeathon</span>.
        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[20px] h-[32px] object-contain mt-8"
        />
      </motion.div>
    </section>
  );
}

export default About;
