import React from 'react';
import { AnimatedText } from './AnimatedText';
import { TechElements } from './TechElements';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollToNext: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToNext }) => {
  const roles = [
    "a Senior Software Engineer",
    "a Backend Developer",
    "a Frontend Developer", 
    "a Full Stack Developer",
    "a Scrum Master",
    
  ];

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Dark tech background with galaxy effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        {/* Galaxy stars effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <TechElements />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-left">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                  Hi, I'm Reimond Mark Avendano,
                </span>
              </h1>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 h-16 flex items-center">
                <AnimatedText 
                  texts={roles}
                  className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <button 
                onClick={() => onScrollToNext()}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={handleScrollToContact}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-600 shadow-2xl">
                {/* Placeholder professional image */}
                <img
                    src="../assets/img2.png"
                    alt="Professional Profile"
                    className="w-full h-full object-cover"
                  />
              </div>
              
              {/* Floating tech elements around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center animate-bounce">
                <span className="text-white font-mono text-xs">&lt;/&gt;</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse">
                <span className="text-white text-xs">JS</span>
              </div>
              <div className="absolute top-1/2 -left-6 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center animate-ping">
                <span className="text-white text-xs">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <button 
            onClick={() => onScrollToNext()}
            className="text-cyan-400/70 hover:text-cyan-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};