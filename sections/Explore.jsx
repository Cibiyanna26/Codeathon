'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';

function Explore() {
  const [active, setActive] = useState('world-2');

  useEffect(() => {
    // Set the state to the first element's ID by default
    if (exploreWorlds.length > 0) {
      setActive(exploreWorlds[0].id);
    }
  }, []);
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText title={<>🗡THEMES🗡</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[100vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Explore;
