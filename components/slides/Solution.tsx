import React, { useState } from 'react';
import { SlideLayout } from '../SlideLayout';
import { Video, Edit3, Zap, Layers, ArrowRight, Eye, Clock, Settings, Cpu, MonitorPlay, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FlowNode: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  subDetail?: string;
  colorClass: string;
}> = ({ icon, title, subDetail, colorClass }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col items-center relative group cursor-default z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-2 transition-transform duration-300 group-hover:scale-110 border border-white/50 ${colorClass}`}>
        {icon}
      </div>
      <div className="text-slate-800 font-bold text-sm text-center max-w-[150px] leading-tight z-10 relative">
        {title}
      </div>
      
      {/* Hover Reveal Content */}
      <AnimatePresence>
        {isHovered && subDetail && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full mb-3 bg-slate-900/95 text-white text-sm p-4 rounded-xl backdrop-blur-md border border-white/10 shadow-xl w-56 text-center z-[60] pointer-events-none"
          >
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900/95 rotate-45 border-b border-r border-white/10"></div>
            {subDetail}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Solution: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  const [hoveredBadge, setHoveredBadge] = useState<'ai' | 'visual' | 'fast' | null>(null);

  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Xiaoshan AI: From Text to Video"
      subtitle="The Universal Education Video Platform"
    >
      <div className="flex flex-col h-full relative isolate pb-2">
        
        {/* Top Badges Row Container */}
        <div className="flex justify-center mb-4 shrink-0 relative z-50">
           
           {/* Center Badge Group */}
           <div className="flex flex-wrap justify-center gap-2 lg:inline-flex lg:items-center lg:space-x-6 glass-card px-4 py-3 lg:px-6 lg:py-2 rounded-[2rem] shadow-lg bg-white/60 relative">
              
              {/* AI Powered Badge */}
              <div 
                onMouseEnter={() => setHoveredBadge('ai')}
                onMouseLeave={() => setHoveredBadge(null)}
                className="relative px-4 py-2 lg:px-5 rounded-full bg-yellow-50 text-yellow-800 font-bold flex items-center text-sm border border-yellow-200 transition-transform hover:scale-105 cursor-pointer hover:bg-yellow-100"
              >
                <Zap className="w-4 h-4 mr-2 fill-yellow-500 text-yellow-500"/> AI Powered
              </div>

              {/* Visual Performance Badge */}
              <div 
                onMouseEnter={() => setHoveredBadge('visual')}
                onMouseLeave={() => setHoveredBadge(null)}
                className="px-4 py-2 lg:px-5 rounded-full bg-blue-50 text-blue-800 font-bold flex items-center text-sm border border-blue-200 transition-transform hover:scale-105 cursor-pointer hover:bg-blue-100"
              >
                <Eye className="w-4 h-4 mr-2 text-blue-600"/> Visual Impact
              </div>

              {/* Fast & Easy Badge */}
              <div 
                onMouseEnter={() => setHoveredBadge('fast')}
                onMouseLeave={() => setHoveredBadge(null)}
                className="px-4 py-2 lg:px-5 rounded-full bg-purple-50 text-purple-800 font-bold flex items-center text-sm border border-purple-200 transition-transform hover:scale-105 cursor-pointer hover:bg-purple-100"
              >
                <Clock className="w-4 h-4 mr-2 text-purple-600"/> Fast & Easy
              </div>

              {/* Absolute Popups (Desktop Only) */}
              <div className="hidden lg:block">
                <AnimatePresence>
                  {hoveredBadge === 'ai' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, scale: 0.9 }}
                      className="absolute right-[105%] top-1/2 -translate-y-1/2 bg-slate-800 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-xl whitespace-nowrap flex items-center border border-white/20 mr-4 z-[60]"
                    >
                      <Globe className="w-4 h-4 mr-2 text-yellow-400"/> 100+ Languages Supported
                      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45 border-t border-r border-white/20"></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                   {hoveredBadge === 'fast' && (
                     <motion.div 
                       initial={{ opacity: 0, x: -20, scale: 0.9 }}
                       animate={{ opacity: 1, x: 0, scale: 1 }}
                       exit={{ opacity: 0, x: -20, scale: 0.9 }}
                       className="absolute left-[105%] top-1/2 -translate-y-1/2 ml-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black px-5 py-3 rounded-2xl shadow-2xl border-2 border-white/50 rotate-3 transform text-lg whitespace-nowrap z-[60]"
                     >
                       <div className="flex flex-col items-center leading-none">
                         <span>3-5 mins</span>
                         <span className="text-[9px] font-medium opacity-90 uppercase tracking-widest mt-1">Generation Time</span>
                       </div>
                     </motion.div>
                   )}
                </AnimatePresence>
              </div>

           </div>
        </div>

        {/* Dual Mode Cards - Middle Layer */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 flex-1 lg:min-h-0 px-2 lg:px-8 relative z-10">
          
          {/* Mode 1: Concept Mode */}
          <div 
            className={`glass-card relative overflow-hidden group rounded-[2rem] border transition-all duration-500 flex flex-col h-full min-h-[400px] lg:min-h-0
              ${hoveredBadge === 'visual' 
                ? 'border-blue-300 bg-white/90' 
                : 'border-white/80 hover:border-blue-300 hover:bg-white/90 hover:shadow-xl'
              }`}
          >
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
             
             <div className="p-6 flex flex-col h-full relative z-10">
               <div className="flex items-center mb-3">
                 <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mr-4 shrink-0 ring-4 ring-white">
                    <Video className="w-7 h-7" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-slate-800 mb-0.5">Concept Mode</h3>
                   <span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">For Understanding</span>
                 </div>
               </div>
               
               <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                 Builds the foundation of knowledge through visualizations of complex topics.
               </p>
               
               {/* Bullets */}
               <div className="space-y-4 flex-1 flex flex-col justify-center min-h-0">
                 <div className={`flex items-center p-3 rounded-xl border shadow-sm transition-colors bg-white/70 border-white/60 ${hoveredBadge === 'visual' ? 'opacity-50 blur-[0.5px]' : 'opacity-100'}`}>
                   <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 font-black text-xs shadow-md shrink-0">•</div>
                   <span className="text-slate-800 font-bold text-base leading-tight">Foundational knowledge</span>
                 </div>

                 <div className={`flex items-center p-3 rounded-xl border shadow-sm transition-all duration-300 ${hoveredBadge === 'visual' ? 'bg-blue-600 border-blue-700 shadow-blue-200 shadow-lg scale-102' : 'bg-white/70 border-white/60'}`}>
                   <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 font-black text-xs shadow-md shrink-0 ${hoveredBadge === 'visual' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>•</div>
                   <span className={`font-bold text-base leading-tight ${hoveredBadge === 'visual' ? 'text-white' : 'text-slate-800'}`}>Visual explanations</span>
                 </div>

                 <div className={`flex items-center p-3 rounded-xl border shadow-sm transition-colors bg-white/70 border-white/60 ${hoveredBadge === 'visual' ? 'opacity-50 blur-[0.5px]' : 'opacity-100'}`}>
                   <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 font-black text-xs shadow-md shrink-0">•</div>
                   <span className="text-slate-800 font-bold text-base leading-tight">Any subject, any grade level</span>
                 </div>
               </div>

               <div className="mt-3 pt-3 border-t border-slate-200/60 bg-white/40 -mx-6 -mb-6 px-6 pb-5">
                 <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1">Example Prompt</div>
                 <div className="font-serif text-lg text-slate-900 italic relative pl-3 border-l-3 border-blue-500 leading-tight">
                    "Explain the Pythagorean theorem visually"
                 </div>
               </div>
             </div>
          </div>

          {/* Mode 2: Solver Mode */}
          <div className={`glass-card relative overflow-hidden group rounded-[2rem] border transition-all duration-500 flex flex-col h-full min-h-[400px] lg:min-h-0
              ${hoveredBadge === 'visual' 
                ? 'border-purple-300 bg-white/90' 
                : 'border-white/80 hover:border-purple-300 hover:bg-white/90 hover:shadow-xl'
              }`}
          >
             <div className="absolute top-0 right-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

             <div className="p-6 flex flex-col h-full relative z-10">
               <div className="flex items-center mb-3">
                 <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 shadow-sm mr-4 shrink-0 ring-4 ring-white">
                    <Edit3 className="w-7 h-7" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-slate-800 mb-0.5">Solver Mode</h3>
                   <span className="text-purple-600 font-bold tracking-widest uppercase text-[10px] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">For Practice</span>
                 </div>
               </div>
               
               <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                 Applies knowledge to practice by generating solutions to specific problems.
               </p>
               
               {/* Bullets */}
               <div className="space-y-4 flex-1 flex flex-col justify-center min-h-0">

                 <div className={`flex items-center p-3 rounded-xl border shadow-sm transition-colors bg-white/70 border-white/60 ${hoveredBadge === 'visual' ? 'opacity-50 blur-[0.5px]' : 'opacity-100'}`}>
                   <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center mr-3 font-black text-xs shadow-md shrink-0">•</div>
                   <span className="text-slate-800 font-bold text-base leading-tight">Apply knowledge to practice</span>
                 </div>

                 <div className={`flex items-center p-3 rounded-xl border shadow-sm transition-all duration-300 ${hoveredBadge === 'visual' ? 'bg-purple-600 border-purple-700 shadow-purple-200 shadow-lg scale-102' : 'bg-white/70 border-white/60'}`}>
                   <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 font-black text-xs shadow-md shrink-0 ${hoveredBadge === 'visual' ? 'bg-white text-purple-600' : 'bg-purple-600 text-white'}`}>•</div>
                   <span className={`font-bold text-base leading-tight ${hoveredBadge === 'visual' ? 'text-white' : 'text-slate-800'}`}>Step-by-step animated solutions</span>
                 </div>

                 <div className={`flex items-center p-3 rounded-xl border shadow-sm transition-colors bg-white/70 border-white/60 ${hoveredBadge === 'visual' ? 'opacity-50 blur-[0.5px]' : 'opacity-100'}`}>
                   <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center mr-3 font-black text-xs shadow-md shrink-0">•</div>
                   <span className="text-slate-800 font-bold text-base leading-tight">Real exam questions</span>
                 </div>
               </div>

               <div className="mt-3 pt-3 border-t border-slate-200/60 bg-white/40 -mx-6 -mb-6 px-6 pb-5">
                 <div className="text-[9px] font-black text-purple-600 uppercase tracking-widest mb-1">Example Prompt</div>
                 <div className="font-serif text-lg text-slate-900 italic relative pl-3 border-l-3 border-purple-500 leading-tight">
                    "Solve: Find max area of Triangle ABC..."
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Bottom Flow Chart */}
        <div className="mt-4 flex justify-center items-center select-none w-full shrink-0 relative z-30 hidden lg:flex">
           <div className="bg-white/50 backdrop-blur-md px-12 py-5 rounded-[2.5rem] flex items-center space-x-8 shadow-lg relative border border-white/60">
             
             {/* Node 1 */}
             <FlowNode 
                icon={
                  <div className="flex space-x-1">
                    <Layers className="w-5 h-5 text-blue-600" />
                    <Settings className="w-5 h-5 text-slate-600" />
                  </div>
                }
                title="Input & Control Lever"
                subDetail="Prompt Adjustment & Optimization"
                colorClass="bg-gradient-to-br from-slate-50 to-blue-50"
             />

             <div className="flex flex-col items-center opacity-40">
                <div className="w-12 h-0.5 bg-slate-400"></div>
                <ArrowRight className="w-4 h-4 text-slate-400 -mt-2.5 ml-8" />
             </div>

             {/* Node 2 */}
             <FlowNode 
                icon={<Cpu className="w-7 h-7 text-purple-600" />}
                title="Core Transformation"
                subDetail="AI Pedagogical Methodology Engine"
                colorClass="bg-purple-50"
             />

             <div className="flex flex-col items-center opacity-40">
                <div className="w-12 h-0.5 bg-slate-400"></div>
                <ArrowRight className="w-4 h-4 text-slate-400 -mt-2.5 ml-8" />
             </div>

             {/* Node 3 */}
             <FlowNode 
                icon={<MonitorPlay className="w-7 h-7 text-emerald-600" />}
                title="Output - Multimodal"
                subDetail="High-Freedom Teaching Deduction"
                colorClass="bg-emerald-50"
             />

           </div>
        </div>

      </div>
    </SlideLayout>
  );
};
