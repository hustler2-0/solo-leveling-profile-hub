
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const UpcomingFightSection = () => {
  const [isHovered, setIsHovered] = useState(false);
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
    <section 
      ref={sectionRef}
      id="upcoming-fight" 
      className="py-20 relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-solo-dark via-solo-dark/95 to-solo-dark"></div>
      
      {/* Particle effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7,
              animation: `float-enhanced ${3 + Math.random() * 7}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">The Upcoming Battle</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Witness the collision of overwhelming powers as Sung Jin-Woo faces his greatest challenge yet.
            The Shadow Monarch versus the forces that threaten humanity's existence.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-appear' : 'opacity-0'}`}>
          {/* Main battle showcase */}
          <div 
            className="relative perspective-1000 my-16 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Smoke and glow effects container */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              {/* Blue side smoke effect */}
              <div className={`absolute inset-y-0 left-0 w-1/2 smoke-effect-blue transition-all duration-1000 ${isHovered ? 'opacity-80' : 'opacity-40'}`}></div>
              
              {/* Red side smoke effect */}
              <div className={`absolute inset-y-0 right-0 w-1/2 smoke-effect-red transition-all duration-1000 ${isHovered ? 'opacity-80' : 'opacity-40'}`}></div>
              
              {/* Center clash effect */}
              <div className={`absolute inset-0 clash-effect transition-opacity duration-1000 ${isHovered ? 'opacity-90' : 'opacity-0'}`}></div>
              
              {/* White smoke particles */}
              <div className="absolute inset-0">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white/80 blur-md"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${40 + Math.random() * 20}%`,
                      opacity: isHovered ? 0.7 + Math.random() * 0.3 : 0.1 + Math.random() * 0.3,
                      transform: 'scale(0)',
                      animation: `smoke-rise ${3 + Math.random() * 4}s infinite ease-out`,
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Main image */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] preserve-3d">
              <img 
                src="/lovable-uploads/4bb9baa0-e1af-477d-8d1e-282be3c8fb97.png" 
                alt="Sung Jin-Woo facing a powerful enemy" 
                className="w-full h-auto object-cover"
              />
              
              {/* Image overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-solo-dark/80 to-transparent"></div>
              
              {/* Energy beams */}
              <div className={`absolute left-1/3 top-0 bottom-0 w-1 bg-solo-blue-glow/70 blur-sm transition-all duration-1000 ${isHovered ? 'opacity-100' : 'opacity-40'}`}></div>
              <div className={`absolute right-1/3 top-0 bottom-0 w-1 bg-red-500/70 blur-sm transition-all duration-1000 ${isHovered ? 'opacity-100' : 'opacity-40'}`}></div>
              
              {/* Glowing eyes on the right character */}
              <div className={`absolute top-[30%] right-[27%] w-2 h-2 rounded-full bg-red-500 blur-sm transition-all duration-1000 ${isHovered ? 'animate-pulse-glow' : 'opacity-70'}`}></div>
              
              {/* Glowing daggers/weapons effect */}
              <div className={`absolute top-[40%] right-[30%] w-6 h-1 rotate-45 rounded-full bg-red-500/90 blur-sm transition-all duration-1000 ${isHovered ? 'animate-pulse-glow' : 'opacity-70'}`}></div>
              <div className={`absolute top-[42%] right-[28%] w-6 h-1 rotate-45 rounded-full bg-red-500/90 blur-sm transition-all duration-1000 ${isHovered ? 'animate-pulse-glow' : 'opacity-70'}`}></div>
              
              {/* Battle information overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 translate-y-0 group-hover:translate-y-[-10px]">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white text-shadow">Shadow Monarch</h3>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-solo-purple to-solo-blue-glow w-[85%] rounded-full"></div>
                    </div>
                    <p className="text-solo-light-purple font-medium">Power Level: Monarch</p>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white text-shadow">???</h3>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-500 to-orange-400 w-[90%] rounded-full"></div>
                    </div>
                    <p className="text-red-400 font-medium">Power Level: Unknown</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating battle elements */}
            <div className={`absolute -top-5 -left-5 w-16 h-16 rounded-full border border-solo-purple/30 transition-all duration-500 ${isHovered ? 'opacity-100 animate-rotate-slow' : 'opacity-40'}`}></div>
            <div className={`absolute -bottom-5 -right-5 w-16 h-16 rounded-full border border-red-500/30 transition-all duration-500 ${isHovered ? 'opacity-100 animate-rotate-slow' : 'opacity-40'}`}></div>
          </div>
          
          {/* Battle details section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 border-l-4 border-solo-purple hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="text-xl font-display font-bold text-solo-light-purple mb-4">The Shadow Monarch's Strategy</h3>
              <p className="text-gray-300">
                Jin-Woo approaches battles with meticulous planning and adaptability. His tactical genius allows him to 
                analyze enemy patterns and exploit weaknesses instantly. Against unknown opponents, he begins defensively to assess their capabilities before unleashing his full power.
              </p>
              <div className="mt-6 flex items-center space-x-2">
                <span className="text-sm text-solo-purple font-medium">Strengths:</span>
                <span className="px-2 py-1 bg-solo-purple/20 rounded-full text-xs">Adaptability</span>
                <span className="px-2 py-1 bg-solo-purple/20 rounded-full text-xs">Shadow Army</span>
                <span className="px-2 py-1 bg-solo-purple/20 rounded-full text-xs">Domain Control</span>
              </div>
            </div>
            
            <div className="glass-card p-6 border-l-4 border-red-500 hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="text-xl font-display font-bold text-red-400 mb-4">The Unknown Adversary</h3>
              <p className="text-gray-300">
                A mysterious entity whose presence alone warps reality. This opponent represents a level of threat beyond conventional understanding. The clash between these powers threatens to tear the very fabric of the world apart.
              </p>
              <div className="mt-6 flex items-center space-x-2">
                <span className="text-sm text-red-400 font-medium">Threats:</span>
                <span className="px-2 py-1 bg-red-500/20 rounded-full text-xs">Reality Distortion</span>
                <span className="px-2 py-1 bg-red-500/20 rounded-full text-xs">Unknown Origin</span>
                <span className="px-2 py-1 bg-red-500/20 rounded-full text-xs">Overwhelming Aura</span>
              </div>
            </div>
          </div>
          
          {/* Battle prediction */}
          <div className="mt-12 glass-card p-8 rounded-lg border-t border-b border-white/10">
            <h3 className="text-2xl font-display font-bold text-center text-gradient-purple mb-8">Battle Prediction</h3>
            
            <div className="space-y-6">
              <p className="text-gray-200 text-center">
                The collision of two sovereign powers—Jin-Woo's domain of shadows versus an entity of unknown origin.
                This battle won't merely test strength but will challenge the very limits of what it means to be a Monarch.
              </p>
              
              <div className="flex justify-center pt-4">
                <div className="h-1 w-48 bg-gradient-to-r from-solo-purple via-white to-red-500 rounded-full"></div>
              </div>
              
              <p className="italic text-center text-gray-300">
                "When absolute darkness meets consuming light, the world itself holds its breath."
              </p>
            </div>
          </div>
          
          {/* CTA button */}
          <div className="mt-12 text-center">
            <Button 
              className="px-8 py-6 bg-gradient-to-r from-solo-purple to-solo-blue hover:from-solo-blue hover:to-solo-purple text-white rounded-lg font-medium text-lg transition-all duration-500 shadow-neon-purple hover:shadow-neon-purple-intense transform hover:scale-105"
            >
              Witness The Battle
            </Button>
          </div>
        </div>
      </div>
      
      {/* Custom animations for this section */}
      <style>
        {`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .smoke-effect-blue {
          background: linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(255, 255, 255, 0.3));
          filter: blur(20px);
          animation: smoke-pulse-blue 8s infinite ease-in-out;
        }
        
        .smoke-effect-red {
          background: linear-gradient(to left, rgba(239, 68, 68, 0.2), rgba(255, 255, 255, 0.3));
          filter: blur(20px);
          animation: smoke-pulse-red 8s infinite ease-in-out;
        }
        
        .clash-effect {
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
          filter: blur(30px);
          animation: clash-pulse 3s infinite ease-in-out;
        }
        
        @keyframes smoke-pulse-blue {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translateY(-10px) scale(1.05);
          }
        }
        
        @keyframes smoke-pulse-red {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translateY(-10px) scale(1.05);
          }
        }
        
        @keyframes clash-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        @keyframes smoke-rise {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0);
          }
          20% {
            opacity: 0.8;
            transform: translateY(0) scale(1.5);
          }
          80% {
            opacity: 0.3;
            transform: translateY(-20px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px) scale(0);
          }
        }
        `}
      </style>
    </section>
  );
};

export default UpcomingFightSection;
