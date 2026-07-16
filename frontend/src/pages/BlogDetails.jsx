import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../utils/db';
import PageBanner from '../components/sections/PageBanner';
import { FaChevronRight, FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa';
import NotFound from './NotFound';

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const blogsData = db.getBlogs();

  useEffect(() => {
    const foundBlog = blogsData.find(b => b.slug === slug);
    setBlog(foundBlog);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-white text-slate-900 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg font-heading text-industrial-cyan">Loading Article...</div>
      </div>
    );
  }

  if (!blog) {
    return <NotFound />;
  }

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      <PageBanner 
        title={blog.title} 
        subtitle={blog.summary}
      />

      {/* breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200/60 py-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-2 font-body font-medium">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <FaChevronRight size={8} />
          <Link to="/blogs" className="hover:text-slate-900">Insights</Link>
          <FaChevronRight size={8} />
          <span className="text-industrial-cyan">{blog.title}</span>
        </div>
      </div>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-8 bg-slate-50 border border-slate-200/60 rounded-2xl p-8 md:p-12 shadow-md relative">
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-550 border-b border-slate-200 pb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-industrial-cyan" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-industrial-cyan" />
                <span>By {blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-industrial-cyan" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <div className="font-body text-sm md:text-base text-slate-700 leading-relaxed space-y-6">
              {/* Splitting block content into paragraphs for clean layout */}
              {blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="border-t border-slate-200 pt-8 mt-12">
              <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">
                Technical Publication • Anand Electricals & Engineers Engineering Team
              </span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-6 shadow-md space-y-4">
              <h4 className="font-heading font-semibold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-3">
                Latest Publications
              </h4>
              <ul className="space-y-4 text-xs">
                {blogsData.filter(b => b.id !== blog.id).map((b) => (
                  <li key={b.id}>
                    <Link to={`/blogs/${b.slug}`} className="text-slate-600 hover:text-industrial-cyan transition-colors block font-medium">
                      {b.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
