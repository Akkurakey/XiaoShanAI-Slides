import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { Rocket, Users, School, Video, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturePill: React.FC<{ color: string, children: React.ReactNode }> = ({ color, children }) => (
  <div className={`flex items-start p-2 rounded-lg bg-white/50 border border-white/60 shadow-sm mb-2 last:mb-0 hover:bg-white/80 transition-colors`}>
    <div className={`mt-1 mr-2 w-1.5 h-1.5 rounded-full shrink-0 ${color}`}></div>
    <span className="leading-snug">{children}</span>
  </div>
);

export const Future: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Roadmap: From Validation to Globalization"
      subtitle="Our Vision for 2026 and Beyond"
    >
      <div className="flex flex-col h-full justify-between pb-1">
        
        {/* Top: Roadmap */}
        <div className="flex-1 flex flex-col justify-center mb-8 lg:mb-4 lg:min-h-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative px-2 lg:h-full">
             
             {/* Connection Line (Desktop Only) */}
             <div className="absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-orange-500 -z-10 rounded-full opacity-30 hidden lg:block"></div>

             {/* Phase 1 */}
             <div className="relative group flex flex-col lg:h-full min-h-[250px] lg:min-h-0">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-500 rounded-2xl shadow-[0_10px_20px_rgba(34,197,94,0.3)] mx-auto mb-3 lg:mb-4 relative z-10 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ring-4 ring-white/50 shrink-0">
                   <div className="font-black text-white text-xl">Q1</div>
                </div>
                <motion.div whileHover={{ y: -5 }} className="glass-card p-4 rounded-3xl flex-1 cursor-default border border-white/60 flex flex-col min-h-0">
                   <h4 className="font-bold text-lg lg:text-xl text-slate-800 mb-3 text-center shrink-0">Foundation</h4>
                   <div className="text-sm text-slate-700 font-medium flex-1 overflow-y-auto custom-scrollbar px-1">
                      <FeaturePill color="bg-green-500">Core Dual-Mode System</FeaturePill>
                      <FeaturePill color="bg-green-500">Offline Mode Dev</FeaturePill>
                      <FeaturePill color="bg-green-500">Initial Partnerships</FeaturePill>
                      <FeaturePill color="bg-green-500">Quality Assurance System</FeaturePill>
                   </div>
                </motion.div>
             </div>

             {/* Phase 2 */}
             <div className="relative group flex flex-col lg:h-full min-h-[250px] lg:min-h-0">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-600 rounded-2xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] mx-auto mb-3 lg:mb-4 relative z-10 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ring-4 ring-white/50 shrink-0">
                   <div className="font-black text-white text-xl">Q2</div>
                </div>
                <motion.div whileHover={{ y: -5 }} className="glass-card p-4 rounded-3xl flex-1 cursor-default border border-white/60 flex flex-col min-h-0">
                   <h4 className="font-bold text-lg lg:text-xl text-slate-800 mb-3 text-center shrink-0">Expansion</h4>
                   <div className="text-sm text-slate-700 font-medium flex-1 overflow-y-auto custom-scrollbar px-1">
                      <FeaturePill color="bg-blue-500">Pre-generated Content Library</FeaturePill>
                      <FeaturePill color="bg-blue-500">Exam Problem Bank Integration</FeaturePill>
                      <FeaturePill color="bg-blue-500">Teacher Review Portal</FeaturePill>
                      <FeaturePill color="bg-blue-500">Mobile App Development</FeaturePill>
                      <FeaturePill color="bg-blue-500">20+ Schools</FeaturePill>
                   </div>
                </motion.div>
             </div>

             {/* Phase 3 */}
             <div className="relative group flex flex-col lg:h-full min-h-[250px] lg:min-h-0">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-purple-500 rounded-2xl shadow-[0_10px_20px_rgba(168,85,247,0.3)] mx-auto mb-3 lg:mb-4 relative z-10 flex items-center justify-center transition-transform group-hover:scale-100 duration-300 ring-4 ring-white/50 shrink-0">
                   <div className="font-black text-white text-xl">Q3</div>
                </div>
                <motion.div whileHover={{ y: -5 }} className="glass-card p-4 rounded-3xl flex-1 cursor-default border border-white/60 flex flex-col min-h-0">
                   <h4 className="font-bold text-lg lg:text-xl text-slate-800 mb-3 text-center shrink-0">Scale</h4>
                   <div className="text-sm text-slate-700 font-medium flex-1 overflow-y-auto custom-scrollbar px-1">
                      <FeaturePill color="bg-purple-500">AI Voice Narration (Multi-lang)</FeaturePill>
                      <FeaturePill color="bg-purple-500">Interactive Quizzes</FeaturePill>
                      <FeaturePill color="bg-purple-500">Community Content Sharing</FeaturePill>
                      <FeaturePill color="bg-purple-500">Subject-specific optimization</FeaturePill>
                      <FeaturePill color="bg-purple-500">Code library & templates</FeaturePill>
                      <FeaturePill color="bg-purple-500">5+ Provinces in China</FeaturePill>
                   </div>
                </motion.div>
             </div>

             {/* Phase 4 */}
             <div className="relative group flex flex-col lg:h-full min-h-[250px] lg:min-h-0">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-500 rounded-2xl shadow-[0_10px_20px_rgba(249,115,22,0.3)] mx-auto mb-3 lg:mb-4 relative z-10 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ring-4 ring-white/50 shrink-0">
                   <div className="font-black text-white text-xl">Q4</div>
                </div>
                <motion.div whileHover={{ y: -5 }} className="glass-card p-4 rounded-3xl flex-1 cursor-default border border-white/60 flex flex-col min-h-0">
                   <h4 className="font-bold text-lg lg:text-xl text-slate-800 mb-3 text-center shrink-0">Global</h4>
                   <div className="text-sm text-slate-700 font-medium flex-1 overflow-y-auto custom-scrollbar px-1">
                      <FeaturePill color="bg-orange-500">NGO & Int. School Partnerships</FeaturePill>
                      <FeaturePill color="bg-orange-500">150+ Language Support</FeaturePill>
                      <FeaturePill color="bg-orange-500">Regional Curriculum Alignment</FeaturePill>
                      <FeaturePill color="bg-orange-500">Global exam integration</FeaturePill>
                      <FeaturePill color="bg-orange-500">Expand to SE Asia, Africa, LatAm</FeaturePill>
                   </div>
                </motion.div>
             </div>
          </div>
        </div>

        {/* Bottom: Vision Stats & Global Use Cases */}
        <div className="bg-slate-900 text-white p-6 rounded-[2.5rem] shadow-2xl shrink-0 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden ring-1 ring-white/10 mt-1 gap-6 lg:gap-0">
           {/* Background sheen */}
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
           <div className="absolute -right-20 -bottom-20 opacity-10 rotate-12">
              <Rocket className="w-96 h-96 text-white" />
           </div>
           
           {/* Left: Title */}
           <div className="relative z-10 w-full lg:w-1/4 text-center lg:text-left">
              <h3 className="text-2xl lg:text-4xl font-serif font-bold mb-1 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Vision for Impact</h3>
              <p className="text-slate-400 text-sm lg:text-lg font-light">Scaling from 500 to 500,000 students in one year.</p>
           </div>
           
           {/* Center: Global Use Cases */}
           <div className="relative z-10 flex-1 px-4 lg:px-8 flex justify-center lg:border-l lg:border-r border-white/10 mx-6 w-full lg:w-auto">
              <div className="w-full max-w-lg">
                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center justify-center lg:justify-start">
                    <Rocket className="w-4 h-4 mr-2" /> Global Use Cases
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                     <div className="flex items-center text-slate-200 text-sm font-medium">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0"/> Rural schools with limited resources
                     </div>
                     <div className="flex items-center text-slate-200 text-sm font-medium">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0"/> NGOs running education programs
                     </div>
                     <div className="flex items-center text-slate-200 text-sm font-medium">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0"/> Language-minority students
                     </div>
                     <div className="flex items-center text-slate-200 text-sm font-medium">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0"/> Special education needs
                     </div>
                  </div>
              </div>
           </div>

           {/* Right: Stats */}
           <div className="flex space-x-6 lg:space-x-10 relative z-10">
               <div className="text-center group">
                  <div className="flex justify-center mb-1 group-hover:scale-110 transition-transform"><Users className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400"/></div>
                  <div className="text-2xl lg:text-4xl font-black tracking-tighter text-white">500k+</div>
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-bold">Students</div>
               </div>
               <div className="text-center group">
                  <div className="flex justify-center mb-1 group-hover:scale-110 transition-transform"><School className="w-5 h-5 lg:w-6 lg:h-6 text-purple-400"/></div>
                  <div className="text-2xl lg:text-4xl font-black tracking-tighter text-white">5,000+</div>
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-bold">Schools</div>
               </div>
               <div className="text-center group">
                  <div className="flex justify-center mb-1 group-hover:scale-110 transition-transform"><Video className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400"/></div>
                  <div className="text-2xl lg:text-4xl font-black tracking-tighter text-white">1M+</div>
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-bold">Videos</div>
               </div>
           </div>
        </div>
      </div>
    </SlideLayout>
  );
};