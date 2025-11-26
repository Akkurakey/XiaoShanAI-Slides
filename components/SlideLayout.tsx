import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  pageNumber: number;
  totalPages: number;
  className?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  children, 
  title, 
  subtitle, 
  pageNumber, 
  totalPages,
  className = ""
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`w-full lg:h-full min-h-screen lg:min-h-0 flex flex-col bg-white/50 border border-white/60 shadow-2xl relative overflow-y-auto lg:overflow-hidden ${className}`}
    >
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-10 opacity-90 fixed lg:absolute" />

      {/* Slide Content */}
      <div className="flex-1 px-6 lg:px-16 pt-14 pb-24 lg:pb-20 flex flex-col relative z-0 min-h-0">
        
        {/* Logo - Absolute positioned */}
        <div className="absolute top-6 lg:top-10 right-6 lg:right-14 flex items-center space-x-3 opacity-90 z-20 group select-none">
           <div className="p-2.5 rounded-xl bg-white/60 border border-white/60 shadow-sm group-hover:bg-white/80 transition-colors duration-300">
             <BrainCircuit className="w-6 h-6 text-slate-800" />
           </div>
           <span className="font-bold text-slate-800 tracking-wider text-base uppercase font-serif hidden sm:inline">Xiaoshan AI</span>
        </div>

        {/* Header Section */}
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-6 w-full shrink-0 relative"
          >
            {title && (
              <h2 className="text-3xl lg:text-5xl font-serif font-black text-slate-900 mb-2 tracking-tight leading-tight max-w-[85%]">
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className="text-lg lg:text-xl text-slate-600 font-light tracking-wide flex items-center">
                <span className="w-8 h-[2px] bg-slate-400 mr-4 rounded-full hidden sm:block"></span>
                {subtitle}
              </h3>
            )}
          </motion.div>
        )}
        
        {/* Main Content Area - Fill remaining space */}
        <div className="flex-1 relative h-full w-full lg:min-h-0">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full px-6 lg:px-12 py-3 flex justify-between items-center text-sm text-slate-500 font-medium z-10 border-t border-white/30 bg-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
          <span className="tracking-widest uppercase text-[10px] font-bold opacity-70">Xiaoshan AI System</span>
        </div>
        <span className="font-mono text-[10px] opacity-60 tracking-wider hidden sm:block">CAMBRIDGE EDUX 2025 • SLIDE {pageNumber} / {totalPages}</span>
      </div>
    </motion.div>
  );
};