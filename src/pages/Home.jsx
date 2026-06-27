import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCertificate, FaArrowRight, FaShieldAlt, FaIndustry, FaHandshake } from 'react-icons/fa';

// Import Shared Components
import StatsCounter from '../components/sections/StatsCounter';
import ClientLogos from '../components/sections/ClientLogos';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

// Import Data Modules
import { db } from '../utils/db';
const productsData = db.getProducts();
const projectsData = db.getProjects();
const servicesData = db.getServices();

// Import Assets
import directorImg from '../assets/director.png';
import substationImg from '../assets/project_substation.png';
import panelboardImg from '../assets/project_panelboard.png';
import heroBgImg from '../assets/hero_industrial_bg.png';

export default function Home() {
  // Motion Animation Configuration
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      
      {/* 1. ENTERPRISE HERO SECTION */}
      <section 
        className="relative pt-48 pb-32 flex items-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/70 z-0"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-industrial-cyan uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-industrial-cyan rounded-full animate-ping"></span>
              Engineering Excellence
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5.5xl leading-tight tracking-tight text-white mb-6">
              LEADING ELECTRICAL INNOVATIONS.
            </h1>
            <p className="font-body text-base md:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
              Powering progress with reliable and efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link to="/products" className="w-full sm:w-auto px-8 py-3.5 bg-industrial-cyan text-white hover:bg-white hover:text-slate-900 transition-all font-semibold rounded-md text-sm text-center tracking-wider uppercase font-heading shadow-lg shadow-industrial-cyan/15">
                Explore Products
              </Link>
              <Link to="/quote" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/30 hover:border-white text-white transition-all font-semibold rounded-md text-sm text-center tracking-wider uppercase font-heading">
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Hero Statistics Counters - styled as glassmorphic on dark bg */}
          <div className="lg:col-span-5 w-full">
            <StatsCounter cols="grid-cols-2" />
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY CLIENTS (LOGO CAROUSEL) */}
      <section className="bg-slate-50 border-y border-slate-200/60">
        <ClientLogos />
      </section>

      {/* 3. COMPANY OVERVIEW */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase">
              Company Overview
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
              An Enterprise Built For Multi-Crore Infrastructure Deployments
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Anand Electricals & Engineers Pvt Ltd operates as an enterprise-grade contractor designing and executing massive electrification drives, custom switchgear arrays, and plant automation loops. 
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              We leverage CNC metal-working machinery, computer-assisted load diagnostics, and high-conductivity copper busbars. Every panel leaves our facility backed by rigorous Factory Acceptance Testing (FAT) parameters.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-industrial-cyan hover:text-slate-900 transition-colors font-semibold font-heading text-sm">
              Read Our Corporate Profile <FaArrowRight size={12} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200/60 rounded-xl hover:border-industrial-cyan/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <FaShieldAlt className="text-industrial-cyan text-3xl mb-4" />
              <h4 className="font-heading font-semibold text-slate-900 mb-2">Safety Certified</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Fully aligned with OHSAS safety guidelines and standard local regulations.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200/60 rounded-xl hover:border-industrial-cyan/20 transition-all duration-300 shadow-sm hover:shadow-md">
              <FaIndustry className="text-industrial-cyan text-3xl mb-4" />
              <h4 className="font-heading font-semibold text-slate-900 mb-2">Advanced CNC</h4>
              <p className="text-slate-500 text-xs leading-relaxed">In-house bending and punching machines ensure perfect enclosure fabrication.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200/60 rounded-xl hover:border-industrial-cyan/20 transition-all duration-300 col-span-2 shadow-sm hover:shadow-md">
              <FaHandshake className="text-industrial-cyan text-3xl mb-4" />
              <h4 className="font-heading font-semibold text-slate-900 mb-2">Government Authorized</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Grade-A certified electrical contractor license, authorized to implement 132kV installations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <div>
              <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase mb-3 block">
                Engineering Hardware
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
                Industrial Panel Systems
              </h2>
            </div>
            <Link to="/products" className="text-industrial-cyan hover:text-slate-900 font-semibold text-sm inline-flex items-center gap-1.5 font-heading">
              View All Products <FaArrowRight size={12} />
            </Link>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {productsData.slice(0, 3).map((prod) => (
              <motion.div 
                key={prod.id}
                variants={fadeInUp}
                className="bg-white border border-slate-200/60 rounded-xl p-8 hover:border-industrial-cyan/35 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-md"
              >
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{prod.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{prod.shortDescription}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Link to={`/products/${prod.slug}`} className="text-industrial-cyan text-sm font-semibold hover:text-slate-900 font-heading inline-flex items-center gap-1.5">
                    Specifications <FaArrowRight size={10} />
                  </Link>
                  <Link to="/quote" className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 hover:bg-industrial-cyan hover:text-white rounded text-xs transition-all font-semibold font-heading uppercase tracking-wider">
                    Enquire
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase mb-3 block">
              Enterprise Support
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
              Electrification & PM Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.slice(0, 4).map((serv) => (
              <div 
                key={serv.id}
                className="p-8 bg-slate-50 border border-slate-200/60 rounded-xl hover:border-industrial-cyan/20 transition-all duration-300 flex gap-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-industrial-cyan/5 border border-industrial-cyan/15 flex items-center justify-center text-industrial-cyan flex-shrink-0 text-xl font-bold font-heading">
                  {serv.id.substring(0, 1).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-slate-900 text-lg mb-2">{serv.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{serv.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serv.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="text-xs text-slate-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-industrial-cyan rounded-full"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase mb-3 block">
              Sector Versatility
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
              Tailored Systems for Specialized Sectors
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Manufacturing", "Healthcare", "Luxury Hotels", "Commercial Hubs", "Warehouses", "Textiles", "Pharma Plants", "Builders"].map((ind, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200/60 rounded-xl hover:border-industrial-cyan/20 transition-all duration-300 text-center flex flex-col justify-center items-center h-32 group shadow-sm hover:shadow-md">
                <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-industrial-cyan group-hover:shadow-[0_0_8px_#EA580C] mb-3 transition-all duration-300"></span>
                <span className="font-heading font-semibold text-slate-500 group-hover:text-slate-900 transition-colors text-sm">
                  {ind}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DIRECTOR MESSAGE */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-8 md:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Image Column */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-64 h-80 rounded-xl overflow-hidden border border-slate-200 group bg-white shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent opacity-40 z-10"></div>
                  <img 
                    src={directorImg} 
                    alt="Director Amit Kumar" 
                    className="w-full h-full object-cover transition-all duration-500 scale-102"
                  />
                </div>
              </div>

              {/* Excerpt Message Column */}
              <div className="lg:col-span-8 space-y-6">
                <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase">
                  Director's Address
                </span>
                <h3 className="font-heading font-bold text-2.5xl md:text-3.5xl text-slate-900 tracking-tight leading-tight">
                  Leading With Engineering Precision
                </h3>
                <blockquote className="border-l-2 border-industrial-cyan pl-6 italic text-slate-600 text-base md:text-lg">
                  "At Anand Electricals, engineering is not just about routing wires or fabricating enclosures. It is about creating highly reliable power networks that support India's manufacturing expansion. We construct infrastructure that guarantees safety, efficiency, and continuous operations for enterprise-scale factories."
                </blockquote>
                
                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <div>
                    <h4 className="font-heading font-semibold text-slate-900">Amit Kumar</h4>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-heading mt-0.5">Founder & Managing Director</p>
                  </div>
                  
                  {/* Signature */}
                  <div className="opacity-70">
                    <svg viewBox="0 0 200 60" width="120" height="40" className="text-industrial-cyan stroke-current fill-none">
                      <path d="M20 40 Q40 10, 60 30 T100 20 T140 40 T180 25" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/leadership" className="inline-flex items-center gap-2 text-industrial-cyan hover:text-slate-900 transition-colors font-semibold font-heading text-xs uppercase tracking-wider">
                    View Director Profile <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. FEATURED PROJECTS */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <div>
              <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase mb-3 block">
                Proven Capability
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
                Featured Power Infrastructure
              </h2>
            </div>
            <Link to="/projects" className="text-industrial-cyan hover:text-slate-900 font-semibold text-sm inline-flex items-center gap-1.5 font-heading">
              View Case Studies <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projectsData.slice(0, 2).map((proj) => (
              <div 
                key={proj.id}
                className="bg-white border border-slate-200/60 rounded-xl overflow-hidden flex flex-col group shadow-md"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 to-transparent z-10"></div>
                  <img 
                    src={proj.image === 'project_substation.png' ? substationImg : panelboardImg} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/85 backdrop-blur-sm border border-slate-800 px-3 py-1 rounded text-xs text-white z-20">
                    {proj.location}
                  </div>
                </div>
                <div className="p-8 space-y-4 relative z-10 -mt-10 bg-white rounded-t-xl">
                  <span className="font-heading font-semibold text-industrial-cyan text-xs tracking-widest uppercase">
                    Case Study - {proj.completionYear}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-slate-900">{proj.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{proj.scope}</p>
                  <Link to={`/projects/${proj.slug}`} className="text-industrial-cyan text-sm font-semibold hover:text-slate-900 font-heading inline-flex items-center gap-1.5 pt-2">
                    Review Challenges & Solutions <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CERTIFICATIONS & COMPLIANCE */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase mb-3 block">
              Safety Checkpoints
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
              Compliance & Safety Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-slate-50 border border-slate-200/60 rounded-xl shadow-sm">
              <FaCertificate className="text-industrial-cyan text-4.5xl mx-auto mb-6" />
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">ISO 9001:2015</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Certified Quality Management System covering full production line checks.</p>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200/60 rounded-xl shadow-sm">
              <FaCertificate className="text-industrial-cyan text-4.5xl mx-auto mb-6" />
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">ISO 45001:2018</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Occupational Health & Safety management certified for on-site substation operations.</p>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200/60 rounded-xl shadow-sm">
              <FaCertificate className="text-industrial-cyan text-4.5xl mx-auto mb-6" />
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Grade-A Contractor</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Licensed by the State Electrical Inspectorate for high-tension installations.</p>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200/60 rounded-xl shadow-sm">
              <FaCertificate className="text-industrial-cyan text-4.5xl mx-auto mb-6" />
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">CPRI Tested</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Enclosures fully certified for short circuit and ingress protection ratings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase mb-3 block">
              Partner Endorsements
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
              Validated By Industrial Developers
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* 11. GALLERY PREVIEW */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <div>
              <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase mb-3 block">
                Factory Floors
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
                Our Advanced Facilities
              </h2>
            </div>
            <Link to="/gallery" className="text-industrial-cyan hover:text-slate-900 font-semibold text-sm inline-flex items-center gap-1.5 font-heading">
              View Full Gallery <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-64 rounded-xl overflow-hidden border border-slate-200 relative group shadow-sm">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
              <img src={panelboardImg} alt="CNC Shop" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
            </div>
            <div className="h-64 rounded-xl overflow-hidden border border-slate-200 relative group shadow-sm">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
              <img src={substationImg} alt="Commissioning" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
            </div>
            <div className="h-64 rounded-xl overflow-hidden border border-slate-200 relative group shadow-sm">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
              <img src={panelboardImg} alt="Assembly Line" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 12. CTA */}
      <CTASection />

    </div>
  );
}
