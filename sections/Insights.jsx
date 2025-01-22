'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText } from '../components';
import { insights } from '../constants';

function Insights() {
  return (
    <section className={`${styles.paddings} relative z-10`} id="faq">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText title="Frequently Asked Questions" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightCard
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Insights;
