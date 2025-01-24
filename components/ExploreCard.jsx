'use client';

import { motion } from 'framer-motion';
import { TitleText } from '../components';
import styles from '../styles';

// Correct Image Paths
const themes = [
  { id: 1, title: "No Poverty", img: "/Goal-1.jpg" },
  { id: 2, title: "Zero Hunger", img: "/goal2.png" },
  { id: 3, title: "Good Health and Well-being", img: "/goal3.png" },
  { id: 4, title: "Quality Education", img: "/goal4.png" },
  { id: 5, title: "Gender Equality", img: "/goal5.png" },
  { id: 6, title: "Clean Water and Sanitation", img: "/goal6.png" },
  { id: 7, title: "Affordable and Clean Energy", img: "/goal7.png" },
  { id: 8, title: "Decent Work and Economic Growth", img: "/goal8.png" },
  { id: 9, title: "Industry, Innovation and Infrastructure", img: "/goal9.png" },
  { id: 10, title: "Reduced Inequality", img: "/goal10.png" },
  { id: 11, title: "Sustainable Cities and Communities", img: "/goal11.png" },
  { id: 12, title: "Responsible Consumption and Production", img: "/goal12.jpg" },
  { id: 13, title: "Climate Action", img: "/goal_13.png" },
  { id: 14, title: "Life Below Water", img: "/goal14.png" },
  { id: 15, title: "Life on Land", img: "/goal15.png" },
  { id: 16, title: "Peace and Justice Strong Institutions", img: "/goal16.png" },
  { id: 17, title: "Partnerships to achieve the Goal", img: "/goal17.png" },
];

function Explore() {
  return (
    <section className={`${styles.paddings} py-8`} id="explore">
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <TitleText title={<>🗡 THEMES 🗡</>} textStyles="text-center mb-4" /> */}

        <div className="relative mt-6">
          <motion.div
            className="flex space-x-6 cursor-grab overflow-x-auto scrollbar-hide"
            drag="x"
            dragConstraints={{
              left: -2600, // Adjusted for 17 items
              right: 0,
            }}
            animate={{ x: [0, -2600, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 50, // Keeps the animation duration slow
              ease: "linear",
            }}
          >
            {themes.map((theme) => (
              <motion.div
                key={theme.id}
                className="min-w-[200px] h-[250px] bg-gray-800 text-white rounded-lg flex flex-col items-center justify-center text-lg font-bold p-4 shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                {/* Use Next.js Image Component */}
                <img
                  src={theme.img}
                  alt={theme.title}
                  width={100} // Reduced width
                  height={100} // Reduced height
                  className="object-cover rounded-lg"
                />
                <p className="mt-2 text-center text-white">{theme.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Explore;
