import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="bg-white text-slate-900 min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-industrial-cyan/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-md space-y-6">
        <h1 className="font-heading font-extrabold text-7xl md:text-8xl text-slate-900 tracking-wider leading-none">
          404
        </h1>
        <h2 className="font-heading font-bold text-xl md:text-2xl text-industrial-cyan uppercase tracking-wider">
          Link Interrupted
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
          The requested system node could not be resolved or does not exist. The line is currently inactive.
        </p>
        
        <div className="pt-6">
          <Link 
            to="/" 
            className="inline-flex px-8 py-3 bg-industrial-cyan text-white hover:bg-slate-900 font-semibold rounded text-xs tracking-wider uppercase font-heading transition-all shadow-md shadow-industrial-cyan/10"
          >
            Re-route to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
