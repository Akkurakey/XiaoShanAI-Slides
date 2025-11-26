import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { Sparkles, Brain, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export const Cover: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  return (
    <SlideLayout pageNumber={page} totalPages={total} className="bg-transparent">
      <div className="h-full flex flex-col justify-center items-center text-center relative z-10 pb-12">
        
        {/* Abstract Background Floating Symbols - Reduced Opacity and moved to edges */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
           <motion.div animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10 text-[5rem] lg:text-[10rem] text-slate-800 opacity-5 font-serif leading-none blur-sm">∫</motion.div>
           <motion.div animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-40 right-20 text-[5rem] lg:text-[10rem] text-slate-800 opacity-5 font-serif leading-none blur-sm">∑</motion.div>
           <div className="absolute top-1/3 right-10 text-[4rem] lg:text-[8rem] text-slate-800 opacity-5 font-serif leading-none blur-sm">π</div>
           <div className="absolute bottom-10 left-1/4 text-[4rem] lg:text-[8rem] text-slate-800 opacity-5 font-serif leading-none blur-sm">√</div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 lg:mb-14 relative z-20"
        >
          <span className="px-4 py-2 lg:px-6 lg:py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs lg:text-sm font-bold tracking-[0.2em] text-indigo-900 uppercase ring-1 ring-white/50">
            Cambridge EduX Hackathon 2025
          </span>
        </motion.div>

        {/* Main Title with stronger presence */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           className="relative z-20"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-black text-slate-900 mb-6 tracking-tighter leading-[0.85] select-none drop-shadow-sm">
            Xiaoshan<span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-indigo-700">.AI</span>
          </h1>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl lg:text-4xl font-medium text-slate-700 mb-10 lg:mb-16 tracking-wide relative z-20 max-w-4xl leading-tight px-4"
        >
          Animated Video Generation for <br/>
          <span className="text-slate-900 font-semibold">Education Equality</span>
        </motion.h2>

        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl relative z-20 px-6"
        >
           <div className="glass-card p-6 lg:p-8 rounded-3xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center group cursor-default">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100/80 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <Brain className="w-6 h-6 lg:w-8 lg:h-8 text-blue-700" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">Concept Learning</h3>
              <p className="text-slate-600 font-medium text-sm lg:text-base">Deep visual understanding</p>
           </div>
           
           <div className="glass-card p-6 lg:p-8 rounded-3xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center group cursor-default">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-purple-100/80 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-inner">
                 <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">Problem Solving</h3>
              <p className="text-slate-600 font-medium text-sm lg:text-base">Step-by-step reasoning</p>
           </div>
           
           <div className="glass-card p-6 lg:p-8 rounded-3xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center group cursor-default">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-emerald-100/80 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-inner">
                 <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-emerald-700" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">Full Transparency</h3>
              <p className="text-slate-600 font-medium text-sm lg:text-base">Verifiable code output</p>
           </div>
        </motion.div>

        <div className="absolute bottom-10 text-slate-500 font-mono text-xs tracking-[0.2em] uppercase opacity-70 hidden lg:block">
          Challenge 4: AI Video Generation
        </div>
      </div>
    </SlideLayout>
  );
};