
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
      {/* Enhanced background effects with more glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-solo-dark via-solo-dark/95 to-solo-dark"></div>
      <div className="absolute inset-0 bg-purple-glow opacity-30"></div>
      
      {/* Additional glow orbs similar to Shadow Army */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              width: `${150 + Math.random() * 100}px`,
              height: `${150 + Math.random() * 100}px`,
              background: i % 2 === 0 ? 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 70%)' : 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0) 70%)',
              opacity: 0.6,
              animation: `float-enhanced ${8 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              transform: 'translateZ(0)'
            }}
          />
        ))}
      </div>
      
      {/* Shadow particles similar to Shadow Army section */}
      <div className="absolute inset-0 shadow-particles opacity-40"></div>
      <div className="absolute inset-0 bg-radial-pattern opacity-20"></div>
      
      {/* Enhanced particle effects */}
      <div className="absolute inset-0 perspective-1000">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7,
              animation: `float-enhanced ${3 + Math.random() * 7}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translateZ(${Math.random() * 50}px)`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading">The Upcoming Battle</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Witness the collision of overwhelming powers as Sung Jin-Woo faces his greatest challenge yet.
            The Shadow Monarch versus the forces that threaten humanity's existence.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-appear' : 'opacity-0'}`}>
          {/* Main battle showcase with consistent height like other sections */}
          <div 
            className="relative perspective-1000 my-12 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 3D rotation container */}
            <div className={`transform transition-transform duration-700 ${isHovered ? 'rotate-y-1' : ''} preserve-3d`}>
              {/* Enhanced smoke and glow effects container */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                {/* Enhanced blue side smoke effect */}
                <div className={`absolute inset-y-0 left-0 w-1/2 smoke-effect-blue transition-all duration-1000 ${isHovered ? 'opacity-90' : 'opacity-50'}`}></div>
                
                {/* Enhanced red side smoke effect */}
                <div className={`absolute inset-y-0 right-0 w-1/2 smoke-effect-red transition-all duration-1000 ${isHovered ? 'opacity-90' : 'opacity-50'}`}></div>
                
                {/* Enhanced center clash effect */}
                <div className={`absolute inset-0 clash-effect transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-20'}`}></div>
                
                {/* Enhanced white smoke particles */}
                <div className="absolute inset-0">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-white/90 blur-md"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${40 + Math.random() * 20}%`,
                        opacity: isHovered ? 0.8 + Math.random() * 0.2 : 0.2 + Math.random() * 0.3,
                        transform: 'scale(0)',
                        animation: `smoke-rise ${3 + Math.random() * 4}s infinite ease-out`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Main image - HEIGHT ADJUSTED to match other sections, with image-glow animation */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] preserve-3d shadow-neon-purple h-[300px]">
                <img 
                  src="/lovable-uploads/4bb9baa0-e1af-477d-8d1e-282be3c8fb97.png" 
                  alt="Sung Jin-Woo facing a powerful enemy" 
                  className="w-full h-full object-cover object-center animate-image-glow"
                />
                
                {/* Enhanced image overlay for better text contrast and 3D effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-solo-dark/90 to-transparent"></div>
                
                {/* Enhanced energy beams */}
                <div className={`absolute left-1/3 top-0 bottom-0 w-1.5 bg-solo-blue-glow/80 blur-md transition-all duration-1000 ${isHovered ? 'opacity-100' : 'opacity-50'}`}></div>
                <div className={`absolute right-1/3 top-0 bottom-0 w-1.5 bg-red-500/80 blur-md transition-all duration-1000 ${isHovered ? 'opacity-100' : 'opacity-50'}`}></div>
                
                {/* Enhanced glowing eyes on the right character */}
                <div className={`absolute top-[30%] right-[27%] w-2.5 h-2.5 rounded-full bg-red-500 blur-sm transition-all duration-1000 ${isHovered ? 'animate-pulse-intense' : 'opacity-70'}`}></div>
                <div className={`absolute top-[30%] right-[24%] w-2.5 h-2.5 rounded-full bg-red-500 blur-sm transition-all duration-1000 ${isHovered ? 'animate-pulse-intense' : 'opacity-70'}`}></div>
                
                {/* Enhanced glowing daggers/weapons effect */}
                <div className={`absolute top-[40%] right-[30%] w-6 h-1.5 rotate-45 rounded-full bg-red-500/90 blur-sm transition-all duration-1000 ${isHovered ? 'animate-pulse-glow' : 'opacity-70'}`}></div>
                <div className={`absolute top-[42%] right-[28%] w-6 h-1.5 rotate-45 rounded-full bg-red-500/90 blur-sm transition-all duration-1000 ${isHovered ? 'animate-pulse-glow' : 'opacity-70'}`}></div>
                
                {/* Enhanced 3D depth effect elements */}
                <div className={`absolute top-[35%] left-[25%] w-3 h-3 rounded-full bg-solo-purple blur-md transition-all duration-1000 ${isHovered ? 'animate-pulse-glow' : 'opacity-70'}`}></div>
                <div className={`absolute top-[45%] left-[30%] w-2 h-8 rotate-[30deg] rounded-full bg-solo-purple/80 blur-sm transition-all duration-1000 ${isHovered ? 'animate-pulse-glow' : 'opacity-70'}`}></div>
                
                {/* Battle information overlay with 3D transform */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-500 translate-y-0 group-hover:translate-y-[-10px] group-hover:translate-z-10">
                  <div className="flex justify-between items-end transform preserve-3d">
                    <div className="space-y-2 transform translate-z-20">
                      <h3 className="text-2xl font-display font-bold text-white text-shadow">Shadow Monarch</h3>
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-solo-purple to-solo-blue-glow w-[85%] rounded-full"></div>
                      </div>
                      <p className="text-solo-light-purple font-medium">Power Level: Monarch</p>
                    </div>
                    
                    <div className="text-right space-y-2 transform translate-z-20">
                      <h3 className="text-2xl font-display font-bold text-white text-shadow">???</h3>
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-orange-400 w-[90%] rounded-full"></div>
                      </div>
                      <p className="text-red-400 font-medium">Power Level: Unknown</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced floating battle elements with 3D transforms */}
            <div className={`absolute -top-5 -left-5 w-16 h-16 rounded-full border border-solo-purple/30 transition-all duration-500 ${isHovered ? 'opacity-100 animate-rotate-slow' : 'opacity-40'} transform translate-z-30`}></div>
            <div className={`absolute -bottom-5 -right-5 w-16 h-16 rounded-full border border-red-500/30 transition-all duration-500 ${isHovered ? 'opacity-100 animate-rotate-slow' : 'opacity-40'} transform translate-z-30`}></div>
            
            {/* New 3D floating elements */}
            <div className={`absolute top-1/4 -left-10 w-8 h-8 rounded-full bg-solo-purple/20 blur-md transition-all duration-500 ${isHovered ? 'opacity-80' : 'opacity-30'} animate-float-enhanced`}></div>
            <div className={`absolute bottom-1/4 -right-10 w-8 h-8 rounded-full bg-red-500/20 blur-md transition-all duration-500 ${isHovered ? 'opacity-80' : 'opacity-30'} animate-float-enhanced`}></div>
          </div>
          
          {/* Battle details section - with 3D effects */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 border-l-4 border-solo-purple hover:translate-y-[-5px] transition-all duration-300 transform hover:translate-z-10">
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
            
            <div className="glass-card p-6 border-l-4 border-red-500 hover:translate-y-[-5px] transition-all duration-300 transform hover:translate-z-10">
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
          
          {/* Battle prediction with enhanced 3D effects */}
          <div className="mt-12 glass-card p-8 rounded-lg border-t border-b border-white/10 transform transition-all duration-500 hover:translate-y-[-5px] hover:translate-z-10 group">
            <h3 className="text-2xl font-display font-bold text-center text-gradient-purple mb-8">Battle Prediction</h3>
            
            <div className="space-y-6">
              <p className="text-gray-200 text-center">
                The collision of two sovereign powers—Jin-Woo's domain of shadows versus an entity of unknown origin.
                This battle won't merely test strength but will challenge the very limits of what it means to be a Monarch.
              </p>
              
              <div className="flex justify-center pt-4">
                <div className="h-1 w-48 bg-gradient-to-r from-solo-purple via-white to-red-500 rounded-full group-hover:w-64 transition-all duration-700"></div>
              </div>
              
              <p className="italic text-center text-gray-300">
                "When absolute darkness meets consuming light, the world itself holds its breath."
              </p>
            </div>
          </div>
          
          {/* CTA button with enhanced glow */}
          <div className="mt-12 text-center">
            <Button 
              className="px-8 py-6 bg-gradient-to-r from-solo-purple to-solo-blue hover:from-solo-blue hover:to-solo-purple text-white rounded-lg font-medium text-lg transition-all duration-500 shadow-neon-purple hover:shadow-neon-purple-intense transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Witness The Battle</span>
              <span className="absolute inset-0 bg-gradient-to-r from-solo-purple/40 to-solo-blue/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .translate-z-10 {
          transform: translateZ(10px);
        }
        
        .translate-z-20 {
          transform: translateZ(20px);
        }
        
        .translate-z-30 {
          transform: translateZ(30px);
        }
        
        .rotate-y-1 {
          transform: rotateY(1deg);
        }
        
        .smoke-effect-blue {
          background: linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(255, 255, 255, 0.4));
          filter: blur(25px);
          animation: smoke-pulse-blue 8s infinite ease-in-out;
        }
        
        .smoke-effect-red {
          background: linear-gradient(to left, rgba(239, 68, 68, 0.3), rgba(255, 255, 255, 0.4));
          filter: blur(25px);
          animation: smoke-pulse-red 8s infinite ease-in-out;
        }
        
        .clash-effect {
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%);
          filter: blur(35px);
          animation: clash-pulse 3s infinite ease-in-out;
        }
        
        @keyframes smoke-pulse-blue {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-15px) scale(1.1);
          }
        }
        
        @keyframes smoke-pulse-red {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-15px) scale(1.1);
          }
        }
        
        @keyframes clash-pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        
        @keyframes smoke-rise {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0) translateZ(0px);
          }
          20% {
            opacity: 0.9;
            transform: translateY(0) scale(1.8) translateZ(10px);
          }
          80% {
            opacity: 0.5;
            transform: translateY(-30px) scale(1.2) translateZ(20px);
          }
          100% {
            opacity: 0;
            transform: translateY(-50px) scale(0) translateZ(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default UpcomingFightSection;
