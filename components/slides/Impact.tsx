import React, { useState } from 'react';
import { SlideLayout } from '../SlideLayout';
import { TrendingUp, Clock, DollarSign, Eye, Layers, RefreshCw, ArrowRight, BookOpen, PenTool, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Impact: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  const [hoveredMode, setHoveredMode] = useState<'mode1' | 'mode2' | null>(null);

  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Redefining Productivity"
      subtitle="Why Xiaoshan AI is a Paradigm Shift"
    >
      <div className="flex flex-col h-full space-y-6">
        
        {/* Comparison Table - Compacted slightly */}
        <div className="glass-card rounded-[2rem] overflow-hidden flex-[0.55] flex flex-col shadow-xl ring-1 ring-white/60 min-h-0">
           <div className="grid grid-cols-4 bg-slate-50/50 backdrop-blur-md px-8 py-4 font-bold text-slate-800 text-base border-b border-slate-200/60 uppercase tracking-widest shrink-0">
             <div className="pl-6">Dimension</div>
             <div className="text-slate-500">Traditional</div>
             <div className="text-blue-600 font-black">Xiaoshan AI</div>
             <div className="text-emerald-600">Advantage</div>
           </div>
           
           <div className="flex-1 flex flex-col divide-y divide-slate-100/50 overflow-y-auto">
             {/* Row 1: Cost */}
             <div className="grid grid-cols-4 px-8 py-3 text-lg items-center hover:bg-white/40 transition-colors flex-1">
               <div className="flex items-center font-bold text-slate-700"><DollarSign className="w-5 h-5 mr-3 text-slate-400" /> Cost</div>
               <div className="text-slate-500 font-medium">$5,000+</div>
               <div className="font-bold text-slate-900">$1.00</div>
               <div><span className="text-emerald-700 font-bold bg-emerald-100/50 px-2 py-0.5 rounded text-sm border border-emerald-200">99% Cheaper</span></div>
             </div>

             {/* Row 2: Speed */}
             <div className="grid grid-cols-4 px-8 py-3 text-lg items-center hover:bg-white/40 transition-colors flex-1">
               <div className="flex items-center font-bold text-slate-700"><Clock className="w-5 h-5 mr-3 text-slate-400" /> Speed</div>
               <div className="text-slate-500 font-medium">2-4 Weeks</div>
               <div className="font-bold text-slate-900">3-5 Mins</div>
               <div><span className="text-emerald-700 font-bold bg-emerald-100/50 px-2 py-0.5 rounded text-sm border border-emerald-200">99% Faster</span></div>
             </div>

             {/* Row 3: Language */}
             <div className="grid grid-cols-4 px-8 py-3 text-lg items-center hover:bg-white/40 transition-colors flex-1">
               <div className="flex items-center font-bold text-slate-700"><TrendingUp className="w-5 h-5 mr-3 text-slate-400" /> Scalability</div>
               <div className="text-slate-500 font-medium">5-10 Languages</div>
               <div className="font-bold text-slate-900">100+ Languages</div>
               <div><span className="text-emerald-700 font-bold bg-emerald-100/50 px-2 py-0.5 rounded text-sm border border-emerald-200">Universal</span></div>
             </div>

             {/* Row 4: Mode */}
             <div className="grid grid-cols-4 px-8 py-3 text-lg items-center hover:bg-white/40 transition-colors flex-1">
               <div className="flex items-center font-bold text-slate-700"><Layers className="w-5 h-5 mr-3 text-slate-400" /> Mode</div>
               <div className="text-slate-500 font-medium">Rigid / Single</div>
               <div className="font-bold text-slate-900">Dual-Mode</div>
               <div><span className="text-emerald-700 font-bold bg-emerald-100/50 px-2 py-0.5 rounded text-sm border border-emerald-200">Full Loop</span></div>
             </div>

             {/* Row 5: Transparency */}
             <div className="grid grid-cols-4 px-8 py-3 text-lg items-center hover:bg-white/40 transition-colors flex-1">
               <div className="flex items-center font-bold text-slate-700"><Eye className="w-5 h-5 mr-3 text-slate-400" /> Transparency</div>
               <div className="text-slate-500 font-medium">Black Box</div>
               <div className="font-bold text-slate-900">100% Visible</div>
               <div><span className="text-emerald-700 font-bold bg-emerald-100/50 px-2 py-0.5 rounded text-sm border border-emerald-200">Trusted</span></div>
             </div>
           </div>
        </div>

        {/* Diagram Area - Replaces Quote */}
        <div className="flex-[0.45] min-h-0 flex items-center justify-center relative">
           
           <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
              
              {/* Connector Arrows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-20 pointer-events-none">
                 {/* Top Arrow L->R */}
                 <div className="absolute top-0 left-0 w-full h-full border-t-2 border-slate-300 rounded-full scale-y-75"></div>
                 <div className="absolute top-[-5px] right-[50%] translate-x-32 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-slate-400 rotate-90"></div>
                 
                 {/* Bottom Arrow R->L */}
                 <div className="absolute bottom-0 left-0 w-full h-full border-b-2 border-slate-300 rounded-full scale-y-75"></div>
                 <div className="absolute bottom-[-5px] left-[50%] -translate-x-32 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-slate-400 rotate-90"></div>
              </div>

              {/* Mode 1 Circle */}
              <motion.div 
                onHoverStart={() => setHoveredMode('mode1')}
                onHoverEnd={() => setHoveredMode(null)}
                className="absolute left-10 flex flex-col items-center cursor-pointer group z-20"
              >
                 <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center shadow-xl transition-all duration-300 ${hoveredMode === 'mode1' ? 'bg-blue-600 border-blue-200 scale-110' : 'bg-white border-blue-100'}`}>
                    <BookOpen className={`w-12 h-12 ${hoveredMode === 'mode1' ? 'text-white' : 'text-blue-600'}`} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mt-4 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/50">Mode 1</h3>
                 <p className="text-sm font-medium text-slate-500">Learn Concept</p>

                 {/* Hover Popover */}
                 <AnimatePresence>
                   {hoveredMode === 'mode1' && (
                     <motion.div 
                       initial={{ opacity: 0, y: -20 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className="absolute bottom-full mb-4 w-56 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-blue-100 text-left pointer-events-none"
                     >
                       <ul className="space-y-2 text-sm text-slate-700">
                         <li className="flex items-center"><CheckCircle className="w-3 h-3 text-blue-500 mr-2"/> New topic introduction</li>
                         <li className="flex items-center"><CheckCircle className="w-3 h-3 text-blue-500 mr-2"/> Concept review</li>
                         <li className="flex items-center"><CheckCircle className="w-3 h-3 text-blue-500 mr-2"/> Self-paced learning</li>
                       </ul>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </motion.div>

              {/* Mode 2 Circle */}
              <motion.div 
                onHoverStart={() => setHoveredMode('mode2')}
                onHoverEnd={() => setHoveredMode(null)}
                className="absolute right-10 flex flex-col items-center cursor-pointer group z-20"
              >
                 <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center shadow-xl transition-all duration-300 ${hoveredMode === 'mode2' ? 'bg-purple-600 border-purple-200 scale-110' : 'bg-white border-purple-100'}`}>
                    <PenTool className={`w-12 h-12 ${hoveredMode === 'mode2' ? 'text-white' : 'text-purple-600'}`} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mt-4 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/50">Mode 2</h3>
                 <p className="text-sm font-medium text-slate-500">Practice Problems</p>

                  {/* Hover Popover */}
                  <AnimatePresence>
                   {hoveredMode === 'mode2' && (
                     <motion.div 
                       initial={{ opacity: 0, y: -20 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className="absolute bottom-full mb-4 w-56 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-purple-100 text-left pointer-events-none"
                     >
                       <ul className="space-y-2 text-sm text-slate-700">
                         <li className="flex items-center"><CheckCircle className="w-3 h-3 text-purple-500 mr-2"/> Exam preparation</li>
                         <li className="flex items-center"><CheckCircle className="w-3 h-3 text-purple-500 mr-2"/> Homework help</li>
                         <li className="flex items-center"><CheckCircle className="w-3 h-3 text-purple-500 mr-2"/> Problem-solving skills</li>
                       </ul>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </motion.div>

              {/* Bottom Result */}
              <div className="absolute bottom-0 translate-y-2 flex flex-col items-center z-10">
                 <div className="h-12 w-0.5 bg-gradient-to-b from-transparent via-slate-300 to-emerald-400 mb-2"></div>
                 <ArrowDown className="w-6 h-6 text-emerald-500 animate-bounce" />
                 <div className="bg-emerald-50 text-emerald-800 font-bold px-8 py-3 rounded-full border border-emerald-200 shadow-lg mt-2 text-lg flex items-center ring-4 ring-white">
                    <RefreshCw className="w-5 h-5 mr-3" />
                    Complete Learning Loop
                 </div>
              </div>

           </div>
        </div>
      </div>
    </SlideLayout>
  );
};

// Helper icon
const ArrowDown = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
);