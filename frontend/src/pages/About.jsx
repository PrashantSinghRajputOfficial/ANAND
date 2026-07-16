import React from 'react';
import PageBanner from '../components/sections/PageBanner';
import CTASection from '../components/sections/CTASection';
import StatsCounter from '../components/sections/StatsCounter';
import { FaEye, FaBullseye, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../utils/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      <PageBanner 
        title={t('aboutPageTitle')} 
        subtitle={t('aboutPageSubtitle')}
      />

      {/* Corporate Profile Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase">
              {t('corporateProfile')}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
              {t('excellenceTitle')}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {t('aboutProfile1')}
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              {t('aboutProfile2')}
            </p>
          </div>

          <div className="p-8 md:p-12 bg-white border border-slate-200/60 rounded-2xl relative shadow-md">
            <div className="absolute top-0 left-0 w-2.5 h-full bg-industrial-cyan"></div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-6">{t('ourOperations')}</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-industrial-cyan mt-1 flex-shrink-0" />
                <span>{t('op1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-industrial-cyan mt-1 flex-shrink-0" />
                <span>{t('op2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-industrial-cyan mt-1 flex-shrink-0" />
                <span>{t('op3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-industrial-cyan mt-1 flex-shrink-0" />
                <span>{t('op4')}</span>
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
            <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4">{t('ourVision')}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {t('visionDesc')}
            </p>
          </div>

          <div className="bg-white border border-slate-200/60 rounded-2xl p-10 relative overflow-hidden group hover:border-industrial-cyan/20 transition-all duration-300 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 text-xl mb-6">
              <FaBullseye />
            </div>
            <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4">{t('ourMission')}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {t('missionDesc')}
            </p>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-heading font-semibold text-xs tracking-widest text-industrial-cyan uppercase mb-3 block">
              {t('corePrinciples')}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4.5xl text-slate-900 tracking-tight">
              {t('ourValues')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 border border-slate-200/60 rounded-xl text-center shadow-sm">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{t('valueSafety')}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {t('valueSafetyDesc')}
              </p>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200/60 rounded-xl text-center shadow-sm">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{t('valueQuality')}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {t('valueQualityDesc')}
              </p>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200/60 rounded-xl text-center shadow-sm">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{t('valueTrust')}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {t('valueTrustDesc')}
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
