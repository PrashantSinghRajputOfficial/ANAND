import React from 'react';
import PageBanner from '../components/sections/PageBanner';
import CTASection from '../components/sections/CTASection';
import StatsCounter from '../components/sections/StatsCounter';
import { FaEye, FaBullseye, FaCheckCircle } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      <PageBanner 
        title="About Anand Electricals & Engineers" 
        subtitle="A B2B contracting firm delivering reliable energy infrastructure since 2008."
      />

      {/* Corporate Profile Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase">
              Corporate Profile
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
              Eighteen Years of Engineering Excellence
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Founded in Jaipur, Rajasthan, Anand Electricals & Engineers Pvt Ltd has grown from a specialized panel assembly shop into one of India's leading industrial electrical contracting companies. We cater exclusively to factories, government infrastructure, hospitals, hotels, and builders.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              We design and construct high-tension (HT) outdoor substations, low-tension (LT) main distribution panels, motor control centers (MCC), and automated PLC synchronization systems. Every panel is engineered using advanced sheet metal CAD algorithms, CNC punching machinery, and CPRI-certified insulation profiles.
            </p>
          </div>

          <div className="p-8 md:p-12 bg-white border border-slate-200/60 rounded-2xl relative shadow-md">
            <div className="absolute top-0 left-0 w-2.5 h-full bg-industrial-cyan"></div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-6">Our Operations</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-industrial-cyan mt-1 flex-shrink-0" />
                <span>CPRI-tested control panel fabrication up to 6300A capacity.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-industrial-cyan mt-1 flex-shrink-0" />
                <span>Grade-A State Electrical Inspectorate authorized grid installations.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-industrial-cyan mt-1 flex-shrink-0" />
                <span>Nationwide installation and diagnostic commissioning engineers.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-industrial-cyan mt-1 flex-shrink-0" />
                <span>End-to-end design modeling including short circuit heat rise calculations.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="bg-white border border-slate-200/60 rounded-2xl p-10 relative overflow-hidden group hover:border-industrial-cyan/20 transition-all duration-300 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-industrial-cyan/5 border border-industrial-cyan/15 flex items-center justify-center text-industrial-cyan text-xl mb-6">
              <FaEye />
            </div>
            <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              To be recognized as India's premier B2B industrial electrical engineering partner, delivering highly safe, thermal-stable, and energy-efficient control hardware and substations. We strive to support the country's manufacturing expansion by establishing the baseline of industrial power grid safety.
            </p>
          </div>

          <div className="bg-white border border-slate-200/60 rounded-2xl p-10 relative overflow-hidden group hover:border-industrial-cyan/20 transition-all duration-300 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 text-xl mb-6">
              <FaBullseye />
            </div>
            <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our mission is to translate complex power configurations into reliable, physical switchgear cabinets. We achieve this by committing to triple-testing quality procedures, retaining experienced design engineers, and optimizing power factor profiles to prevent utility line losses and penalties.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase mb-3 block">
              Core Principles
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
              Our Value System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 border border-slate-200/60 rounded-xl text-center shadow-sm">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Safety Compliance</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Zero tolerance for electrical leakage or enclosure thermal issues. All calculations match IEEE short-circuit requirements.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200/60 rounded-xl text-center shadow-sm">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Engineering Integrity</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                No compromise on copper ratings or breaker selections. We partner exclusively with Siemens, Schneider, and ABB.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200/60 rounded-xl text-center shadow-sm">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Timely Commissioning</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We understand that plant shutdowns are highly expensive. Pre-fabrication of modular segments ensures fast commissioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Row */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <StatsCounter />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
