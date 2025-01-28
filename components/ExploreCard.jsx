import React from "react";
import { motion } from "framer-motion";
import "./ExploreCard.css"; // Ensure CSS file is correctly linked

const themes = [
  { id: 1, title: "No Poverty", description: "End poverty in all its forms everywhere.", img: "/goal1.png" },
  { id: 2, title: "Zero Hunger", description: "Achieve food security and improved nutrition.", img: "/goal2.png" },
  { id: 3, title: "Good Health", description: "Ensure healthy lives and promote well-being for all.", img: "/goal3.png" },
  { id: 4, title: "Quality Education", description: "Promote lifelong learning opportunities for all.", img: "/goal4.png" },
  { id: 5, title: "Gender Equality", description: "Achieve gender equality and empower women and girls.", img: "/goal5.png" },
  { id: 6, title: "Clean Water", description: "Ensure availability of clean water and sanitation.", img: "/goal6.png" },
  { id: 7, title: "Clean Energy", description: "Ensure access to affordable, reliable, and sustainable energy.", img: "/goal7.png" },
  { id: 8, title: "Decent Work", description: "Promote sustained economic growth and productive employment.", img: "/goal8.png" },
  { id: 9, title: "Innovation", description: "Build resilient infrastructure and foster innovation.", img: "/goal9.png" }, // Fixed the duplicate
  { id: 10, title: "Reduced Inequality", description: "Reduce inequality within and among countries.", img: "/goal10.png" },
  { id: 11, title: "Sustainable Cities", description: "Make cities inclusive, safe, and sustainable.", img: "/goal11.png" },
  { id: 12, title: "Responsible Consumption", description: "Ensure sustainable consumption and production patterns.", img: "/goal12.png" },
  { id: 13, title: "Climate Action", description: "Take urgent action to combat climate change.", img: "/goal13.png" },
  { id: 14, title: "Life Below Water", description: "Conserve and sustainably use marine resources.", img: "/goal14.png" },
  { id: 15, title: "Life on Land", description: "Protect and restore terrestrial ecosystems.", img: "/goal15.png" },
  { id: 16, title: "Peace & Justice", description: "Promote peaceful and inclusive societies.", img: "/goal16.png" },
  { id: 17, title: "Partnerships", description: "Strengthen partnerships for sustainable development.", img: "/goal17.png" },
];

const Explore = () => {
  return (
    <section>
      <div className="explore-card-grid">
        {themes.map((theme) => (
          <div className="explore-card shadow-md" key={theme.id}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={theme.img}
                    alt={theme.title}
                    className="explore-img"
                  />
                  <h2>{theme.title}</h2>
                </div>
                <div className="flip-card-back">
                  <p className="description">{theme.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href="https://docs.google.com/document/d/129oaV_B37G0kbu0yiN92aw0R87ZQsg0fts98T6QgUS4/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "white" }}
        >
          <button
            style={{
              background:
                "linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%, transparent 60%, rgba(27, 253, 156, 0.1) 100%)",
              padding: "12px 24px",
              color: "white",
              border: "2px solid #1BFD9C",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              // marginLeft:"480px",
              // marginTop:"50px",
              boxShadow:
                "inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1)",
            }}
            className="flex items-center"
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 15px rgba(27, 253, 156, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow =
                "inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1)";
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "scale(0.95)";
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
          >
            Know More About Themes
          </button>
        </a>
      </div>
    </section>
  );
};

export default Explore;
