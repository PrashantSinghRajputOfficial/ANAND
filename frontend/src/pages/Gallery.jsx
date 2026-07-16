import React from 'react';
import PageBanner from '../components/sections/PageBanner';
import CTASection from '../components/sections/CTASection';

// Import Assets
import substationImg from '../assets/project_substation.png';
import panelboardImg from '../assets/project_panelboard.png';

export default function Gallery() {
  const images = [
    { src: panelboardImg, title: "CNC Metal Turret Shop", category: "Enclosure Fabrication" },
    { src: substationImg, title: "132kV Switchyard Testing", category: "Substation Site" },
    { src: panelboardImg, title: "Quality Control Lab", category: "Injection Testing" },
    { src: substationImg, title: "Transformer Cable Terminals", category: "Installation Work" },
    { src: panelboardImg, title: "PLC Wiring Panel Assemblies", category: "Assembly Line" },
    { src: substationImg, title: "Final Factory Acceptance Inspection", category: "FAT Testing Area" }
  ];

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      <PageBanner 
        title="Industrial Media Gallery" 
        subtitle="Inside our advanced manufacturing floors and active contracting sites."
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Pinterest style masonry layout in tailwind */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, index) => (
              <div 
                key={index} 
                className="break-inside-avoid rounded-xl overflow-hidden border border-slate-200 bg-slate-50 relative group shadow-md"
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-auto object-cover group-hover:scale-103 transition-all duration-500"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <span className="text-[10px] text-industrial-cyan uppercase font-heading font-semibold tracking-wider mb-1">
                    {img.category}
                  </span>
                  <h4 className="font-heading font-bold text-slate-900 text-base leading-tight">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
