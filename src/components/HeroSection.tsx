
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-solo-dark">
        <div className="absolute inset-0 bg-gradient-radial from-solo-purple/20 via-solo-dark to-solo-dark opacity-70" />
        <div className="absolute inset-0 shadow-particles" />
      </div>

      {/* Hero content */}
      <div className="container max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className={`space-y-6 text-center lg:text-left transform ${loaded ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 delay-300`}>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient-purple leading-tight">
              <span className="block">Sung Jin-Woo</span>
              <span className="text-3xl md:text-4xl text-solo-light-purple/80">The Shadow Monarch</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              From the weakest E-rank hunter to the most powerful entity in existence, 
              witness the extraordinary journey of the man who rewrote the rules of power.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-solo-purple hover:bg-solo-purple/80 text-white rounded-lg font-medium transition-all shadow-neon-purple">
                Explore His Power
              </button>
              <button className="px-6 py-3 bg-transparent border border-solo-purple/50 hover:border-solo-purple text-solo-light-purple rounded-lg font-medium transition-all hover:shadow-neon-purple">
                Shadow Army
              </button>
            </div>
          </div>
          
          {/* Hero image with fire frame */}
          <div className={`relative flex justify-center items-center transform ${loaded ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
            <div className="relative w-80 h-96 md:w-96 md:h-[30rem] perspective">
              {/* Fire frame effects */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-600/70 via-red-600/60 to-amber-500/50 animate-pulse opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-700/60 via-orange-500/50 to-yellow-400/40 animate-pulse opacity-50" 
                     style={{animationDelay: '300ms'}}></div>
                
                {/* Flame particles */}
                <div className="absolute bottom-0 left-0 right-0 h-2/3 overflow-hidden">
                  <div className="absolute bottom-0 left-1/4 w-2 h-16 bg-amber-500/80 rounded-full animate-float" style={{animationDuration: '2.5s'}}></div>
                  <div className="absolute bottom-0 left-1/3 w-3 h-24 bg-orange-500/80 rounded-full animate-float" style={{animationDuration: '3s', animationDelay: '200ms'}}></div>
                  <div className="absolute bottom-0 left-1/2 w-4 h-20 bg-red-500/80 rounded-full animate-float" style={{animationDuration: '2.7s', animationDelay: '100ms'}}></div>
                  <div className="absolute bottom-0 left-2/3 w-3 h-16 bg-amber-400/80 rounded-full animate-float" style={{animationDuration: '3.2s', animationDelay: '300ms'}}></div>
                  <div className="absolute bottom-0 left-3/4 w-2 h-20 bg-orange-600/80 rounded-full animate-float" style={{animationDuration: '2.8s', animationDelay: '150ms'}}></div>
                </div>
                
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_10px_rgba(249,115,22,0.4)]"></div>
              </div>
              
              {/* Image container with border */}
              <div className="absolute inset-4 rounded-xl overflow-hidden border-2 border-amber-500/50 z-10 shadow-[0_0_15px_rgba(249,115,22,0.6)]">
                <img 
                  src="/lovable-uploads/f6b4efd7-f7fa-4f42-a417-3f3e881182c9.png" 
                  alt="Sung Jin-Woo" 
                  className="object-contain h-full w-full relative"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    transform: 'translateY(30px)'
                  }}
                />
              </div>
              
              {/* Fire embers */}
              <div className="floating-rune w-2 h-2 bg-yellow-300 rounded-full top-10 left-10 animate-delay-300 z-20" style={{filter: 'blur(1px)'}}></div>
              <div className="floating-rune w-3 h-3 bg-orange-400 rounded-full bottom-20 right-10 animate-delay-700 z-20" style={{filter: 'blur(1px)'}}></div>
              <div className="floating-rune w-2 h-2 bg-amber-300 rounded-full bottom-40 left-10 animate-delay-500 z-20" style={{filter: 'blur(1px)'}}></div>
              <div className="floating-rune w-4 h-4 bg-red-500/70 rounded-full top-32 right-5 animate-delay-200 z-20" style={{filter: 'blur(2px)'}}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-solo-light-purple/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
