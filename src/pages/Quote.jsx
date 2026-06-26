import React from 'react';
import PageBanner from '../components/sections/PageBanner';
import ContactForm from '../components/sections/ContactForm';
import { FaEnvelope, FaRegClock } from 'react-icons/fa';

export default function Quote() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      <PageBanner 
        title="Request Technical Quote" 
        subtitle="Route your load configurations directly to our senior estimating engineers."
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-heading font-bold text-2.5xl text-slate-900">
              Bidding Consultations
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              For large infrastructure developments or RIICO factory installations, we provide full technical support during tender bidding. Submit single-line diagrams (SLD) or load specs, and our estimators will prepare a Bill of Materials (BOM) matching project timelines.
            </p>

            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-3 text-slate-500">
                <FaRegClock className="text-industrial-cyan text-base flex-shrink-0" />
                <span>Typical turn-around: 24 to 48 working hours.</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <FaEnvelope className="text-industrial-cyan text-base flex-shrink-0" />
                <span>Submit files directly to: anandelectricals1984@gmail.com</span>
              </div>
            </div>
            
            {/* Custom specification box */}
            <div className="p-6 bg-slate-50 border border-slate-200/60 rounded-xl border-l-2 border-l-industrial-cyan shadow-sm">
              <h4 className="font-heading font-semibold text-slate-900 text-xs mb-1">CPRI Tested Cabinets</h4>
              <p className="text-[10px] text-slate-600 leading-relaxed">
                All estimations default to 50kA short-circuit ratings with IP54/IP55 metal enclosures unless otherwise requested.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
