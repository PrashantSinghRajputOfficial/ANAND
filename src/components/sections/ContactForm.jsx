import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm({ presetService = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: presetService,
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API request using axios or setTimeout mock
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-lg">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-industrial-cyan to-industrial-accent"></div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Full Name
            </label>
            <input 
              type="text" 
              id="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rajesh Kumar" 
              className="bg-slate-50 border border-slate-200 focus:bg-white focus:border-industrial-cyan focus:ring-1 focus:ring-industrial-cyan/20 outline-none rounded-md px-4 py-3 text-sm text-slate-900 transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Company Name
            </label>
            <input 
              type="text" 
              id="company" 
              required 
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Tata Projects Ltd" 
              className="bg-slate-50 border border-slate-200 focus:bg-white focus:border-industrial-cyan focus:ring-1 focus:ring-industrial-cyan/20 outline-none rounded-md px-4 py-3 text-sm text-slate-900 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Corporate Email
            </label>
            <input 
              type="email" 
              id="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. rajesh@company.com" 
              className="bg-slate-50 border border-slate-200 focus:bg-white focus:border-industrial-cyan focus:ring-1 focus:ring-industrial-cyan/20 outline-none rounded-md px-4 py-3 text-sm text-slate-900 transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Mobile Number
            </label>
            <input 
              type="tel" 
              id="phone" 
              required 
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210" 
              className="bg-slate-50 border border-slate-200 focus:bg-white focus:border-industrial-cyan focus:ring-1 focus:ring-industrial-cyan/20 outline-none rounded-md px-4 py-3 text-sm text-slate-900 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Required System
          </label>
          <select 
            id="service" 
            required 
            value={formData.service}
            onChange={handleChange}
            className="bg-slate-50 border border-slate-200 focus:bg-white focus:border-industrial-cyan focus:ring-1 focus:ring-industrial-cyan/20 outline-none rounded-md px-4 py-3 text-sm text-slate-900 transition-all cursor-pointer"
          >
            <option value="" className="bg-white text-slate-900" disabled>Select panel / system type</option>
            <option value="plc" className="bg-white text-slate-900">PLC Control Panels</option>
            <option value="apfc" className="bg-white text-slate-900">APFC Panels</option>
            <option value="amf" className="bg-white text-slate-900">AMF Switchboards</option>
            <option value="mcc" className="bg-white text-slate-900">Motor Control Centers (MCC)</option>
            <option value="pcc" className="bg-white text-slate-900">Power Control Panels (PCC)</option>
            <option value="busduct" className="bg-white text-slate-900">Busbar Trunking Systems</option>
            <option value="earthing" className="bg-white text-slate-900">Earthing System Grounding</option>
            <option value="turnkey" className="bg-white text-slate-900">Turnkey Electrification Setup</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Project Load Specifications / Scope
          </label>
          <textarea 
            id="message" 
            rows="4" 
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe load capacities, environmental conditions, site configurations, or regulatory targets..." 
            className="bg-slate-50 border border-slate-200 focus:bg-white focus:border-industrial-cyan focus:ring-1 focus:ring-industrial-cyan/20 outline-none rounded-md px-4 py-3 text-sm text-slate-900 transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={submitting}
          className="w-full py-4 bg-industrial-cyan text-white hover:bg-slate-900 font-bold rounded-md text-sm transition-all duration-300 tracking-wider uppercase font-heading disabled:opacity-50 shadow-md shadow-industrial-cyan/10"
        >
          {submitting ? 'Transmitting Data...' : 'Submit Request'}
        </button>

        {success && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-md text-center text-xs font-semibold">
            Data Transmitted Successfully. Our contracting engineer will contact you within 24 hours.
          </div>
        )}
      </form>
    </div>
  );
}
