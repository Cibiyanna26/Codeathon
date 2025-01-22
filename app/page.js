import React from 'react';
import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';
import './page.css';

function Page() {
  return (
    <div className="bg-primary-black overflow-hidden bg_pic">
      <Navbar />
      <div className="glassmorphism" />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03" />
        <Explore />
      </div>
      <div className="relative">
        <div className="prizeGradient" />
        <GetStarted />
        <div className="gradient-04" />
        <WhatsNew />
        <div className="gradient-10" />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
