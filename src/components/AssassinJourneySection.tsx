
import React, { useEffect, useState, useRef } from 'react';

const AssassinJourneySection = () => {
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
      {/* Background with overlapping gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-solo-dark via-solo-shadow to-solo-dark opacity-80"></div>
      <div className="absolute inset-0 shadow-particles opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">The Weakest Hunter's Ascension</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From an E-rank hunter struggling to survive each dungeon to the sovereign of shadows feared by all.
            Witness the extraordinary journey that began with humility and culminated in absolute power.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isVisible ? 'animate-appear' : 'opacity-0'}`}>
          {/* Image with effects */}
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-solo-dark via-transparent to-transparent z-10"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-solo-purple/50 via-solo-light-purple/30 to-solo-purple/50 rounded-lg z-0 animate-pulse-glow"></div>
            
            <div className="relative z-[1] p-1 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/37ee8ca7-53bd-42ad-b5d6-223b8a0859f9.png" 
                alt="Sung Jin-Woo as the weakest hunter" 
                className="rounded-lg w-full shadow-lg relative z-[2]"
              />
              
              {/* Stylistic elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-solo-purple/30 z-[3]"></div>
              <div className="absolute top-4 left-4 text-sm font-mono text-solo-light-purple/70 z-[4]">E-RANK HUNTER</div>
              <div className="absolute bottom-4 right-4 px-2 py-1 bg-solo-dark/70 rounded text-sm text-solo-light-purple z-[4] border border-solo-purple/30">
                SURVIVAL RATE: 14%
              </div>
            </div>
          </div>
          
          {/* Journey text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-purple">
              The Weakest Becomes The Strongest
            </h3>
            
            <div className="space-y-4">
              {/* Timeline points */}
              <div className="relative pl-8 border-l border-solo-purple/30">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-purple"></div>
                <h4 className="font-display text-xl text-solo-light-purple mb-1">Hunter Awakening</h4>
                <p className="text-gray-300">Awakened with minimal power, Jin-Woo became known as "the world's weakest hunter" with barely enough ability to enter the lowest-level dungeons.</p>
              </div>
              
              <div className="relative pl-8 border-l border-solo-purple/30">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-purple"></div>
                <h4 className="font-display text-xl text-solo-light-purple mb-1">Double Dungeon Incident</h4>
                <p className="text-gray-300">A routine E-rank dungeon turned into a deadly trap, where Jin-Woo faced certain death until he encountered the mysterious System.</p>
              </div>
              
              <div className="relative pl-8 border-l border-solo-purple/30">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-purple"></div>
                <h4 className="font-display text-xl text-solo-light-purple mb-1">System Awakening</h4>
                <p className="text-gray-300">Granted a second chance through the System, Jin-Woo began his journey of leveling up from the weakest to potentially the strongest hunter in existence.</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-light-purple"></div>
                <h4 className="font-display text-xl text-solo-light-purple mb-1">Shadow Monarch's Rise</h4>
                <p className="text-gray-300">His journey led him to inherit the legacy of the Shadow Monarch, transforming the once-ridiculed E-rank hunter into the most powerful entity in the world.</p>
              </div>
            </div>
            
            <button className="px-6 py-3 mt-4 bg-solo-purple hover:bg-solo-purple/80 text-white rounded-lg font-medium transition-all shadow-neon-purple">
              Experience The Full Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssassinJourneySection;
