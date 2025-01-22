'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures, newFeatures2 } from '../constants';

function WhatsNew() {
  return (
    <section className={`${styles.paddings} relative z-10`} id="prize">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <div className="w-[90vw]">
            <TitleText title="Rewards🏆" textStyles="text-center" />
          </div>
          <div className="w-[90vw]">
            <TitleText title="PRIZE POOL OF INR 50K" textStyles="text-center" />
          </div>
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          {/* <img
            src="/revimage20.png"
            alt="whats-new"
            className="w-[97%] h-[97%] object-contain"
          /> */}
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/revimage20(reverse).png"
            alt="whats-new"
            className="w-[97%] h-[97%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          {/* <TitleText title={<>What's new about Hackstreet 2.0?</>} /> */}
          <div className="mt-[48px] flex-col flex-wrap justify-evenly gap-[28px]">
            {newFeatures2.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhatsNew;
