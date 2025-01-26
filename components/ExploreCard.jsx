'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import './Explore.css';

const themes = [
  { id: 1, title: "No Poverty", description: "End poverty in all its forms everywhere." },
  { id: 2, title: "Zero Hunger", description: "Achieve food security and improved nutrition." },
  { id: 3, title: "Good Health", description: "Ensure healthy lives and promote well-being for all." },
  { id: 4, title: "Quality Education", description: "Promote lifelong learning opportunities for all." },
  { id: 5, title: "Gender Equality", description: "Achieve gender equality and empower women and girls." },
  { id: 6, title: "Clean Water", description: "Ensure availability of clean water and sanitation." },
  { id: 7, title: "Clean Energy", description: "Ensure access to affordable, reliable, and sustainable energy." },
  { id: 8, title: "Decent Work", description: "Promote sustained economic growth and productive employment." },
  { id: 9, title: "Innovation", description: "Build resilient infrastructure and foster innovation." },
  { id: 10, title: "Reduced Inequality", description: "Reduce inequality within and among countries." },
  { id: 11, title: "Sustainable Cities", description: "Make cities inclusive, safe, and sustainable." },
  { id: 12, title: "Responsible Consumption", description: "Ensure sustainable consumption and production patterns." },
  { id: 13, title: "Climate Action", description: "Take urgent action to combat climate change." },
  { id: 14, title: "Life Below Water", description: "Conserve and sustainably use marine resources." },
  { id: 15, title: "Life on Land", description: "Protect and restore terrestrial ecosystems." },
  { id: 16, title: "Peace & Justice", description: "Promote peaceful and inclusive societies." },
  { id: 17, title: "Partnerships", description: "Strengthen partnerships for sustainable development." },
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
        <div className="relative mt-6">
          <motion.div
            className="flex space-x-6 cursor-grab overflow-x-auto scrollbar-hide"
            drag="x"
            dragConstraints={{ left: -2600, right: 0 }}
            animate={{ x: [0, -2600, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 50,
              ease: "linear",
            }}
          >
            {themes.map((theme) => (
              <motion.div
                key={theme.id}
                className="card"
                whileHover={{
                  animationPlayState: "paused", // Pause sliding on hover
                }}
              >
                <div className="content">
                  <div className="front">
                  <img
                  src={`/goal${theme.id}.png`}
                  alt={theme.title}
                  className="mx-auto mb-2 -mt-6 w-40 h-40 object-contain"
                />

                 <h3>{theme.title}</h3>             
                      </div>
                  <div className="back">
                    <p className="text-white text-center text-sm">
                      {theme.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <motion.button
  className="Btn font-normal"
  type="button"
  style={{
    background: 'linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%, transparent 60%, rgba(27, 253, 156, 0.1) 100%)',
    padding: '12px 24px',
    color: 'white',
    border: '2px solid #1BFD9C',
    borderRadius: '4px', // Keep this as is, as per your original style
    cursor: 'pointer',
    marginLeft: '480px',
    marginTop: '60px',
    transition: 'all 0.3s', // Update transition for consistency
    // marginRight: '0px',
    boxShadow: 'inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1)',
  }}
  
>

            <a
              href="https://docs.google.com/document/d/129oaV_B37G0kbu0yiN92aw0R87ZQsg0fts98T6QgUS4/edit?tab=t.0"target="_blank"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              
              Know More About Themes
            </a>
          </motion.button>
    </section>
  );
}

export default Explore;