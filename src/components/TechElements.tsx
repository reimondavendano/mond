import React from 'react';
import { Code, Terminal, Cpu, Database, Globe, Zap, Binary, Wifi } from 'lucide-react';

export const TechElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating tech icons */}
      <div className="absolute top-20 left-10 text-blue-400/30 animate-pulse" 
           style={{ animationDelay: '0s', animationDuration: '3s' }}>
        <Code size={32} />
      </div>
      <div className="absolute top-40 right-20 text-purple-400/30 animate-bounce" 
           style={{ animationDelay: '1s', animationDuration: '4s' }}>
        <Terminal size={28} />
      </div>
      <div className="absolute bottom-40 left-20 text-cyan-400/30 animate-pulse" 
           style={{ animationDelay: '2s', animationDuration: '2.5s' }}>
        <Cpu size={24} />
      </div>
      <div className="absolute bottom-20 right-40 text-green-400/30 animate-bounce" 
           style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>
        <Database size={30} />
      </div>
      <div className="absolute top-60 left-1/3 text-pink-400/30 animate-pulse" 
           style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
        <Globe size={26} />
      </div>
      <div className="absolute bottom-60 right-1/3 text-yellow-400/30 animate-bounce" 
           style={{ animationDelay: '2.5s', animationDuration: '3s' }}>
        <Zap size={22} />
      </div>
      
      {/* Binary code streams */}
      <div className="absolute top-0 left-1/4 text-blue-400/20 text-xs font-mono animate-pulse">
        <div className="transform rotate-90 origin-left">
          01001000 01100101 01101100 01101100 01101111
        </div>
      </div>
      <div className="absolute bottom-0 right-1/4 text-purple-400/20 text-xs font-mono animate-pulse" 
           style={{ animationDelay: '1s' }}>
        <div className="transform -rotate-90 origin-right">
          01010111 01100101 01100010 01000100 01100101 01110110
        </div>
      </div>
      
      {/* Circuit-like lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q200,50 400,100 T800,100"
          stroke="url(#circuit1)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M0,300 Q300,250 600,300 T1200,300"
          stroke="url(#circuit1)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </svg>
      
      {/* Floating particles with tech symbols */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-cyan-400/20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        >
          {i % 4 === 0 && <Binary size={12} />}
          {i % 4 === 1 && <Wifi size={10} />}
          {i % 4 === 2 && <div className="w-1 h-1 bg-current rounded-full" />}
          {i % 4 === 3 && <div className="w-1 h-1 bg-current" />}
        </div>
      ))}
      
      {/* Matrix-style falling code */}
      <div className="absolute top-0 left-10 text-green-400/10 text-xs font-mono animate-pulse">
        <div className="flex flex-col space-y-1">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-20 text-blue-400/10 text-xs font-mono animate-pulse" 
           style={{ animationDelay: '2s' }}>
        <div className="flex flex-col space-y-1">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.15}s` }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};