
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import StrengthsSection from '../components/StrengthsSection';
import AchievementsSection from '../components/AchievementsSection';
import HistorySection from '../components/HistorySection';
import PracticesSection from '../components/PracticesSection';
import ShadowArmySection from '../components/ShadowArmySection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  // For triggering animation when scrolling to a section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.animate-appear');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-solo-dark text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <StrengthsSection />
      <ShadowArmySection />
      <PracticesSection />
      <AchievementsSection />
      <HistorySection />
      <Footer />
    </div>
  );
};

export default Index;
