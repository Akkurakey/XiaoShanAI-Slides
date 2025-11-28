import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { BrainCircuit, Sparkles, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const End: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  return (
    <SlideLayout pageNumber={page} totalPages={total} className="bg-slate-50/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-70" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-70" />
      </div>

      <div className="h-full flex flex-col justify-center items-center text-center relative z-10 pb-12 lg:pb-16 px-6">
        
        {/* Logo / Brand Small */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
           <div className="flex items-center space-x-2 text-slate-400">
             <BrainCircuit className="w-5 h-5" />
             <span className="text-sm font-semibold tracking-widest uppercase">Xiaoshan AI</span>
           </div>
        </motion.div>

        {/* Main Title: Thank You */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-12"
        >
          <h1 className="text-7xl md:text-9xl font-serif font-black tracking-tighter text-slate-900 drop-shadow-sm leading-none">
            Thank You
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 md:h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full mx-auto mt-2 opacity-80"
            style={{ maxWidth: '120px' }}
          />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="max-w-3xl w-full mx-auto"
        >
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 md:p-12 text-center overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-500">
             

             <Quote className="absolute top-4 left-6 w-12 h-12 text-slate-100 -scale-x-100 opacity-80" />
             
             <div className="relative z-10 space-y-6">
               <div className="flex items-center justify-center space-x-4 mb-2">
                 <div className="h-px w-8 bg-slate-300"></div>
                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Our Vision</span>
                 <div className="h-px w-8 bg-slate-300"></div>
               </div>

               <p className="text-xl md:text-2xl font-serif text-slate-700 leading-relaxed">
                 Rising from the remote mountains, our founder knows the struggle of limited educational resources. 
               </p>
               
               <p className="text-xl md:text-2xl font-serif text-slate-700 leading-relaxed">
                 We are on a mission to democratize education using 
                 <span className="block mt-4 text-3xl md:text-4xl">
                   <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">AI</span>
                   <span className="mx-3 font-serif italic font-light text-slate-400">&</span>
                   <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600 font-serif italic">Love</span>
                 </span>
               </p>
             </div>

             <Quote className="absolute bottom-4 right-6 w-12 h-12 text-slate-100 opacity-80" />
          </div>
        </motion.div>
        
        {/* Simple Footer */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="mt-16 flex items-center space-x-2 text-slate-400/80 text-xs tracking-widest uppercase font-medium"
        >
           <Sparkles className="w-3 h-3" />
           <span>Cambridge EduX Hackathon 2025</span>
        </motion.div>

      </div>
    </SlideLayout>
  );
};
