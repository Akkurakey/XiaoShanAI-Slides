import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { BrainCircuit, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const End: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  return (
    <SlideLayout pageNumber={page} totalPages={total} className="bg-transparent">
      <div className="h-full flex flex-col justify-center items-center text-center relative z-10 pb-16">
        
        {/* Abstract Background Icons */}
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
          className="mb-6"
        >
           <div className="px-6 py-2 lg:px-8 lg:py-3 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-lg inline-flex items-center space-x-3 lg:space-x-4 mb-2 hover:scale-105 transition-transform cursor-default">
             <BrainCircuit className="w-8 h-8 lg:w-10 lg:h-10 text-blue-700" />
             <span className="text-xl lg:text-3xl font-serif font-bold text-slate-800 tracking-wide">Xiaoshan AI</span>
           </div>
        </motion.div>

        {/* Big Gradient Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-black mb-6 lg:mb-10 tracking-tighter leading-[0.85] drop-shadow-sm select-none text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700"
        >
          Thank You
        </motion.h1>

        {/* Improved Join Us Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="relative mb-8 lg:mb-12 flex flex-col items-center px-4"
        >
          <div className="flex items-center space-x-3 mb-4">
             <div className="h-px w-8 lg:w-12 bg-slate-300"></div>
             <span className="text-xs lg:text-sm font-bold uppercase tracking-widest text-slate-400">Our Mission</span>
             <div className="h-px w-8 lg:w-12 bg-slate-300"></div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-serif text-slate-800 leading-tight tracking-tight">
             Join Us in Democratizing Education
          </h2>
          <div className="w-16 h-1 lg:w-24 lg:h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 lg:mt-6"></div>
        </motion.div>

        {/* Quote */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="max-w-4xl mx-auto px-6"
        >
          <div className="relative">
             <QuoteIcon className="absolute -top-6 -left-4 lg:-left-8 w-8 h-8 lg:w-12 lg:h-12 text-blue-200/50" />
             <p className="text-xl lg:text-3xl font-serif italic text-slate-600 leading-relaxed font-medium">
               "Technology is best when it brings people together and makes education accessible."
             </p>
             <QuoteIcon className="absolute -bottom-6 -right-4 lg:-right-8 w-8 h-8 lg:w-12 lg:h-12 text-blue-200/50 rotate-180" />
          </div>
        </motion.div>
        
        {/* Footer Pill */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="mt-12 lg:mt-16 flex items-center space-x-3 text-slate-500 font-medium bg-white/40 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/40 shadow-sm"
        >
           <Sparkles className="w-4 h-4 text-purple-500" />
           <span className="font-mono tracking-[0.2em] uppercase text-[10px] lg:text-xs">Cambridge EduX Hackathon 2025</span>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
);