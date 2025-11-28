import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { Share2, Download, TrendingDown, Users, Globe, Database, ArrowRight, Zap, Copy } from 'lucide-react';
import { motion } from 'framer-motion';

export const Community: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="The Open Ecosystem"
      subtitle="Share, Clone, Adapt: The Path to Zero-Cost Education"
    >
      <div className="flex flex-col h-full gap-8">
        
        {/* Main Process Hub */}
        <div className="flex-1 bg-white rounded-[3rem] border border-slate-200 shadow-2xl relative overflow-hidden flex items-center justify-center p-8">
           {/* Background Elements */}
           <div className="absolute inset-0 bg-slate-50/50"></div>
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
           
           {/* Connecting Lines (SVG) */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
              {/* Left to Center */}
              <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
              {/* Center to Right */}
              <line x1="50%" y1="50%" x2="75%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
           </svg>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl relative z-10">
              
              {/* Step 1: Teacher A */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="flex flex-col items-center"
              >
                 <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl mb-6 relative group">
                    <div className="absolute -top-3 -left-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">TEACHER A</div>
                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-500">
                       <Share2 className="w-10 h-10" />
                    </div>
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mb-1">1. Contribute</h3>
                 <p className="text-sm text-center text-slate-500 max-w-[220px]">
                    Uploads courseware package containing standardized code & assets.
                 </p>
              </motion.div>

              {/* Center: The Hub */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.2 }}
                 className="flex flex-col items-center justify-center"
              >
                 <div className="relative">
                    <div className="absolute inset-0 bg-slate-900 rounded-full blur-2xl opacity-20"></div>
                    <div className="w-40 h-40 bg-slate-900 rounded-[2.5rem] flex flex-col items-center justify-center text-white shadow-2xl border-4 border-slate-800 relative z-10">
                       <Database className="w-12 h-12 mb-3 text-emerald-400" />
                       <span className="font-bold tracking-widest text-sm">GLOBAL</span>
                       <span className="font-black text-xl">LIBRARY</span>
                    </div>
                    {/* Orbiting particles */}
                    <div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                 </div>
              </motion.div>

              {/* Step 3: Teacher B */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="flex flex-col items-center"
              >
                 <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl mb-6 relative group">
                    <div className="absolute -top-3 -right-3 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">TEACHER B</div>
                    <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-500">
                       <Copy className="w-10 h-10" />
                    </div>
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mb-1">2. 1:1 Clone</h3>
                 <p className="text-sm text-center text-slate-500 max-w-[220px]">
                    Instantly replicates and modifies via 1-click parameter changes.
                 </p>
              </motion.div>

           </div>
        </div>

        {/* Bottom Section: Economic Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-48">
           
           {/* Dark Mode Impact Card */}
           <div className="bg-slate-900 rounded-[2.5rem] p-8 flex items-center justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div className="relative z-10">
                 <div className="flex items-center text-emerald-400 font-bold text-xs uppercase tracking-widest mb-3">
                    <Zap className="w-4 h-4 mr-2" /> Economic Disruption
                 </div>
                 <h3 className="text-4xl font-serif font-bold text-white mb-2">Marginal Cost</h3>
                 <div className="flex items-end">
                    <span className="text-6xl font-black text-emerald-400 leading-none">0</span>
                    <span className="text-slate-400 ml-2 font-medium mb-1.5">/ video</span>
                 </div>
              </div>

              <div className="h-full w-px bg-slate-800 mx-6"></div>

              <div className="relative z-10 flex-1">
                 <p className="text-slate-300 text-sm leading-relaxed">
                    Why create from scratch? Clone a verified lesson plan from a top educator and adapt it in seconds.
                 </p>
              </div>
           </div>

           {/* Network Effect Card */}
           <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-[2.5rem] p-8 flex flex-col justify-center shadow-lg relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-4">
                 <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                    <Users className="w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-slate-800">The Network Effect</h3>
                    <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Exponential Value</p>
                 </div>
              </div>
              <p className="text-slate-600 text-lg leading-snug">
                 As the library grows, the need to write original code approaches zero. <span className="font-bold text-indigo-600">Every user contributes to the collective intelligence.</span>
              </p>
           </div>

        </div>

      </div>
    </SlideLayout>
  );
};