import React from 'react';

export default function PageBanner({ title, subtitle }) {
  return (
    <div className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      {/* Subtle Grid and Glow Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(234,88,12,0.03)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h1 className="font-heading font-extrabold text-3.5xl md:text-5xl text-slate-900 tracking-tight mb-4 animate-[fadeIn_0.8s_ease]">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed animate-[fadeIn_1s_ease]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
