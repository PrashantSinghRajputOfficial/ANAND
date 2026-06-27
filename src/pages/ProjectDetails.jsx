import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../utils/db';
import PageBanner from '../components/sections/PageBanner';
import ContactForm from '../components/sections/ContactForm';
import { FaChevronRight, FaCalendarAlt, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import NotFound from './NotFound';

// Import Assets
import substationImg from '../assets/project_substation.png';
import panelboardImg from '../assets/project_panelboard.png';

export default function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectsData = db.getProjects();
    const foundProject = projectsData.find(proj => proj.slug === slug);
    setProduct(foundProject);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [slug]);

  const getImage = (imgName) => {
    if (!imgName) return panelboardImg;
    if (imgName.startsWith('http') || imgName.startsWith('data:') || imgName.startsWith('/')) return imgName;
    if (imgName === 'project_substation.png') return substationImg;
    if (imgName === 'project_panelboard.png') return panelboardImg;
    return panelboardImg;
  };

  if (loading) {
    return (
      <div className="bg-white text-slate-900 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg font-heading text-industrial-cyan">Loading Case File...</div>
      </div>
    );
  }

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      <PageBanner 
        title={project.title} 
        subtitle={`Case Study: How we solved power constraints for ${project.clientName}.`}
      />

      {/* breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200/60 py-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-2 font-body font-medium">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <FaChevronRight size={8} />
          <Link to="/projects" className="hover:text-slate-900">Projects</Link>
          <FaChevronRight size={8} />
          <span className="text-industrial-cyan">{project.title}</span>
        </div>
      </div>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Main Visual Image */}
            <div className="w-full h-80 md:h-[450px] rounded-xl overflow-hidden border border-slate-200 shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10"></div>
              <img 
                src={getImage(project.image)} 
                alt={project.title} 
                className="w-full h-full object-cover scale-101"
              />
            </div>

            {/* Scope details */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-2.5xl text-slate-900">Project Scope</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {project.scope}
              </p>
            </div>

            {/* Case study challenge / solution / result rows */}
            <div className="space-y-8 pt-8 border-t border-slate-200">
              
              <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-8 space-y-3 shadow-sm">
                <h4 className="font-heading font-semibold text-slate-900 text-lg uppercase tracking-wide">
                  The Challenge
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-8 space-y-3 shadow-sm">
                <h4 className="font-heading font-semibold text-slate-900 text-lg uppercase tracking-wide text-industrial-cyan">
                  The Engineering Solution
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.solutions}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-8 space-y-3 shadow-sm">
                <h4 className="font-heading font-semibold text-emerald-600 text-lg uppercase tracking-wide font-semibold">
                  The Result
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.results}
                </p>
              </div>

            </div>

          </div>

          {/* Sidebar Metrics and Quote Contact Grid */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            
            {/* Meta statistics */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-6 shadow-md space-y-4">
              <h4 className="font-heading font-semibold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-3">
                Project Profile
              </h4>
              <div className="space-y-3.5 text-sm">
                <div className="flex items-center gap-3 text-slate-500">
                  <FaUserAlt className="text-industrial-cyan flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase block leading-none text-slate-400">Client</span>
                    <span className="text-slate-800 font-medium">{project.clientName}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <FaMapMarkerAlt className="text-industrial-cyan flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase block leading-none text-slate-400">Location</span>
                    <span className="text-slate-800 font-medium">{project.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <FaCalendarAlt className="text-industrial-cyan flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase block leading-none text-slate-400">Completion Year</span>
                    <span className="text-slate-800 font-medium">{project.completionYear}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Request Form */}
            <div>
              <h4 className="font-heading font-semibold text-slate-900 uppercase tracking-wider text-xs mb-4">
                Consult on Similar Setup
              </h4>
              <ContactForm presetService="turnkey" />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
