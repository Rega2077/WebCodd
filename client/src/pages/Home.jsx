import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import TryItOutSection from '../components/TryItOutSection';
import FAQSection from '../components/FAQSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <TryItOutSection/>
      <FAQSection/>
    </div>
  );
};

export default Home;
