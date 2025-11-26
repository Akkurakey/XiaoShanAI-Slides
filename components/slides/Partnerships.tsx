import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { MapPin, Award, School, Calendar, CheckCircle2, Quote } from 'lucide-react';

export const Partnerships: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Real Impact, Real Schools"
      subtitle="From Pilot to Practice"
    >
      <div className="flex flex-col h-full space-y-4">
        
        {/* Stats Banner - Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 shrink-0">
           {[
             { val: "80+", label: "Teachers Trained", color: "text-blue-600" },
             { val: "500+", label: "Students Reached", color: "text-purple-600" },
             { val: "6", label: "Partner Schools", color: "text-emerald-600" },
             { val: "300+", label: "Videos Created", color: "text-orange-600" },
           ].map((stat, idx) => (
             <div key={idx} className="glass-card p-4 text-center rounded-2xl hover:-translate-y-1 transition-transform cursor-default shadow-sm">
                <div className={`text-2xl lg:text-3xl font-black ${stat.color} mb-1`}>{stat.val}</div>
                <div className="text-slate-500 font-bold text-[10px] uppercase tracking-wide">{stat.label}</div>
             </div>
           ))}
        </div>

        {/* Location Cards - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 flex-1 lg:min-h-0">
          
          {/* Partner 1 - Guizhou */}
          <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col h-full min-h-[400px] group border border-white/60 hover:shadow-2xl transition-all relative">
            <div className="flex-1 overflow-hidden relative min-h-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src="/assets/partner_placeholder_1.jpg" 
                alt="Students in classroom" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-3 left-6 z-20">
                 <h3 className="text-lg lg:text-xl font-bold text-white mb-0.5 shadow-black drop-shadow-md">Guizhou County Primary School</h3>
                 <div className="flex items-center text-white/90 text-[10px] font-bold uppercase tracking-wider">
                  <MapPin className="w-3 h-3 mr-1" /> Guizhou Province, County-level City
                </div>
              </div>
            </div>
            
            <div className="p-5 shrink-0 flex flex-col justify-end">
              <div className="mb-2">
                 <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 flex items-center">
                   <Award className="w-3.5 h-3.5 mr-1.5" /> Program
                 </div>
                 <h4 className="text-lg font-bold text-slate-800 leading-tight">Christmas Technology Education Training</h4>
                 <div className="flex items-center mt-1.5 text-xs text-slate-500 font-medium bg-slate-100/50 w-fit px-2 py-1 rounded">
                   <Calendar className="w-3 h-3 mr-1.5" /> Dec 25, 2025
                 </div>
              </div>

              <div className="pt-2 border-t border-slate-100 mt-2">
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Focus Areas</div>
                 <ul className="space-y-1.5">
                   <li className="flex items-start text-sm lg:text-base text-slate-700 font-medium leading-snug">
                     <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> AI Tools for Education
                   </li>
                   <li className="flex items-start text-sm lg:text-base text-slate-700 font-medium leading-snug">
                     <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Video Generation for Math & Science
                   </li>
                   <li className="flex items-start text-sm lg:text-base text-slate-700 font-medium leading-snug">
                     <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Hands-on Workshop: Creating Videos
                   </li>
                 </ul>
              </div>
            </div>
          </div>

          {/* Partner 2 - Yunnan */}
          <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col h-full min-h-[400px] group border border-white/60 hover:shadow-2xl transition-all relative">
            <div className="flex-1 overflow-hidden relative min-h-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src="/assets/partner_placeholder_2.jpg"
                alt="Lecture hall" 
                className="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-3 left-6 z-20">
                 <h3 className="text-lg lg:text-xl font-bold text-white mb-0.5 shadow-black drop-shadow-md">Northwest Yunnan Rural School</h3>
                 <div className="flex items-center text-white/90 text-[10px] font-bold uppercase tracking-wider">
                  <MapPin className="w-3 h-3 mr-1" /> Northwest Yunnan Province, Rural Villages
                </div>
              </div>
            </div>
            
            <div className="p-5 shrink-0 flex flex-col justify-end">
              <div className="mb-2">
                 <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1 flex items-center">
                   <School className="w-3.5 h-3.5 mr-1.5" /> Program
                 </div>
                 <h4 className="text-lg font-bold text-slate-800 leading-tight">AI Tools Training Camp for Rural Education</h4>
                 <div className="flex items-center mt-1.5 text-xs text-slate-500 font-medium bg-slate-100/50 w-fit px-2 py-1 rounded">
                   <Calendar className="w-3 h-3 mr-1.5" /> Dec 2025 - Jan 2026
                 </div>
              </div>

              <div className="pt-2 border-t border-slate-100 mt-2">
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Focus Areas</div>
                 <ul className="space-y-1.5">
                   <li className="flex items-start text-sm lg:text-base text-slate-700 font-medium leading-snug">
                     <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" /> Dual-Mode Video Generation Training
                   </li>
                   <li className="flex items-start text-sm lg:text-base text-slate-700 font-medium leading-snug">
                     <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" /> Creating Localized Educational Content
                   </li>
                   <li className="flex items-start text-sm lg:text-base text-slate-700 font-medium leading-snug">
                     <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" /> Offline Mode Usage for Low-Bandwidth
                   </li>
                 </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Quote Footer */}
        <div className="glass-card px-8 py-4 rounded-2xl flex items-center justify-center shrink-0 border border-white/60 bg-white/70 shadow-md">
           <div className="flex items-center space-x-6">
             <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0 shadow-inner">
               <Quote className="w-6 h-6 text-orange-500 fill-orange-200" />
             </div>
             <div className="flex flex-col">
               <p className="text-sm lg:text-lg font-serif italic text-slate-700 font-medium leading-snug">
                 "For the first time, we can create professional teaching videos ourselves, in minutes. This changes everything for rural education."
               </p>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">— Teacher Wang, Yunnan Rural School</p>
             </div>
           </div>
        </div>
      </div>
    </SlideLayout>
  );
};