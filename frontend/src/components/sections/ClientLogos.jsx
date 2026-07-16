import React from 'react';

export default function ClientLogos() {
  const logos = [
    "SUN AGRI", "BSB STEEL", "ST. TERESA", "RANISATI", "SIEMENS", "ABB", 
    "SUN AGRI", "BSB STEEL", "ST. TERESA", "RANISATI", "SIEMENS", "ABB"
  ];

  return (
    <div className="w-full overflow-hidden py-10 relative">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-industrial-bg to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-industrial-bg to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling Track */}
      <div className="flex w-[200%] animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        <div className="flex justify-around items-center w-1/2 gap-12">
          {logos.slice(0, 6).map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <span className="font-heading font-bold text-xl md:text-2xl tracking-widest text-slate-300 hover:text-industrial-cyan transition-all duration-300 select-none">
                {logo}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-around items-center w-1/2 gap-12">
          {logos.slice(6, 12).map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <span className="font-heading font-bold text-xl md:text-2xl tracking-widest text-slate-300 hover:text-industrial-cyan transition-all duration-300 select-none">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for Marquee in Tailwind style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
