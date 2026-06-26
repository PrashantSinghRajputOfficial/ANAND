import React from 'react';
import PageBanner from '../components/sections/PageBanner';
import CTASection from '../components/sections/CTASection';
import { FaIndustry, FaHospital, FaHotel, FaBuilding, FaWarehouse, FaCheckCircle } from 'react-icons/fa';

export default function Industries() {
  const industries = [
    {
      name: "Manufacturing Plants",
      icon: <FaIndustry className="text-industrial-cyan text-4xl mb-6" />,
      desc: "Providing heavy power motor control centers, sub-stations, and dynamic PLC line synchronizations for heavy process lines.",
      solution: "Recommended: MCC Panels, PCC Panels, Bus Ducts"
    },
    {
      name: "Healthcare & Hospitals",
      icon: <FaHospital className="text-industrial-cyan text-4xl mb-6" />,
      desc: "Fail-safe AMF automatic backup changeovers and clean-line medical isolation grounding systems for operating suites.",
      solution: "Recommended: AMF Panels, Chemical Earthing Systems"
    },
    {
      name: "Luxury Hotels",
      icon: <FaHotel className="text-industrial-cyan text-4xl mb-6" />,
      desc: "Optimized APFC capacitor network banks and main breakers to maintain line voltages and prevent high reactive power billing tariffs.",
      solution: "Recommended: APFC Panels, PCC Panels"
    },
    {
      name: "Commercial Hubs",
      icon: <FaBuilding className="text-industrial-cyan text-4xl mb-6" />,
      desc: "High-capacity compact sandwich bus ducts for building trunk runs, replacing heavy and bulky cable routing trays.",
      solution: "Recommended: Bus Ducts, AMF Panels"
    },
    {
      name: "Logistics Warehouses",
      icon: <FaWarehouse className="text-industrial-cyan text-4xl mb-6" />,
      desc: "Organized low-voltage distribution boards, external safety earthing systems, and automated conveyor control switches.",
      solution: "Recommended: Earthing Systems, MCC Panels"
    }
  ];

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      <PageBanner 
        title="Industries We Serve" 
        subtitle="Specialized electrical hardware customized to comply with sector safety rules."
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, index) => (
              <div 
                key={index} 
                className="bg-slate-50 border border-slate-200/60 rounded-2xl p-10 shadow-lg hover:border-industrial-cyan/25 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {ind.icon}
                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4">
                    {ind.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>
                
                <div className="border-t border-slate-200 pt-4 mt-6">
                  <span className="text-xs text-industrial-cyan font-heading font-semibold flex items-center gap-1.5">
                    <FaCheckCircle /> {ind.solution}
                  </span>
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
