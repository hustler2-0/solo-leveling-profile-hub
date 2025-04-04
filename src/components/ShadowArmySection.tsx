
import React, { useEffect, useState, useRef } from 'react';

const ShadowArmySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-solo-dark min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-solo-dark via-solo-purple/10 to-solo-dark"></div>
      <div className="absolute inset-0 shadow-particles opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">Shadow Army Commander</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The elite general of Sung Jin-Woo's shadow forces, commanding legions of the most powerful shadow soldiers extracted from S-rank hunters and monsters.
          </p>
        </div>
        
        {/* 3D Model Section */}
        <div className={`relative w-full max-w-5xl mx-auto perspective ${isVisible ? 'animate-appear' : 'opacity-0'}`}>
          <div className="shadow-model-container w-full aspect-square max-w-2xl mx-auto relative transform-style-3d">
            {/* Rotating platform */}
            <div className="absolute inset-0 animate-rotate-slow shadow-model-platform"></div>
            
            {/* Energy effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-full bg-purple-glow animate-pulse-glow opacity-70"></div>
              
              {/* Lightning Effects */}
              <div className="lightning-effect lightning-1"></div>
              <div className="lightning-effect lightning-2"></div>
              <div className="lightning-effect lightning-3"></div>
              
              {/* Purple mist */}
              <div className="absolute inset-0 purple-mist opacity-40"></div>
            </div>
            
            {/* Shadow Commander Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/lovable-uploads/918da85c-4c7f-46fd-9d7a-1a50187f4222.png" 
                alt="Shadow Army Commander" 
                className="w-[85%] object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.7)] animate-float"
              />
            </div>
            
            {/* Floating runes */}
            <div className="floating-rune w-16 h-16 border border-solo-purple/50 rotate-45 top-10 left-10 animate-delay-300"></div>
            <div className="floating-rune w-12 h-12 border-2 border-solo-light-purple/40 -rotate-12 bottom-20 right-0 animate-delay-700"></div>
            <div className="floating-rune w-10 h-10 bg-solo-purple/20 rounded-full bottom-40 left-0 animate-delay-500"></div>
            <div className="floating-rune w-20 h-20 border border-solo-purple/30 rotate-12 top-32 right-5 animate-delay-200"></div>
          </div>
          
          {/* Commander stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="stat-card animate-delay-300">
              <h3 className="text-xl font-display font-bold text-solo-light-purple mb-2">Extraction Origin</h3>
              <p className="text-gray-300">S-Rank Hunter Igris</p>
            </div>
            <div className="stat-card animate-delay-500">
              <h3 className="text-xl font-display font-bold text-solo-light-purple mb-2">Specialization</h3>
              <p className="text-gray-300">Silent Blade Techniques</p>
            </div>
            <div className="stat-card animate-delay-700">
              <h3 className="text-xl font-display font-bold text-solo-light-purple mb-2">Rank</h3>
              <p className="text-gray-300">Marshal Grade Shadow</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-solo-purple hover:bg-solo-purple/80 text-white rounded-lg font-medium transition-all shadow-neon-purple">
              Join The Shadow Army
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShadowArmySection;
