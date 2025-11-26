import React, { useState } from 'react';
import { SlideLayout } from '../SlideLayout';
import { Clock, DollarSign, Globe2, AlertTriangle, HelpCircle, BarChart3, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BarrierCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  desc: React.ReactNode; 
  colorClass: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ icon, title, desc, colorClass, isOpen, onClick }) => (
  <motion.div 
    layout
    onClick={onClick}
    className={`bg-white/80 rounded-2xl border transition-all cursor-pointer overflow-hidden flex-shrink-0 w-full ${isOpen ? 'border-blue-400 shadow-md ring-1 ring-blue-100' : 'border-white/60 hover:border-blue-200 hover:bg-white'}`}
  >
    <motion.div layout className="p-4 flex items-center justify-between">
       <div className={`flex items-center ${colorClass}`}>
          {icon}
          <h4 className="font-bold text-lg ml-3 text-slate-800">{title}</h4>
       </div>
       <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </motion.div>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="px-4 pb-4 pt-0"
        >
          <p className="text-slate-600 text-base leading-relaxed border-t border-slate-200/50 pt-2">{desc}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export const Problem: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  const [openBarrier, setOpenBarrier] = useState<number | null>(0);

  const barriers = [
    {
      id: 0,
      icon: <DollarSign className="w-5 h-5" />,
      title: "Prohibitive Cost",
      colorClass: "text-blue-700",
      desc: <>High quality educational animation costs <span className="font-bold text-slate-900">$5,000+</span> per minute to produce professionally.</>
    },
    {
      id: 1,
      icon: <Clock className="w-5 h-5" />,
      title: "Slow Production",
      colorClass: "text-purple-700",
      desc: <>A single concept video takes <span className="font-bold text-slate-900">2-4 weeks</span> to script, animate, and edit.</>
    },
    {
      id: 2,
      icon: <Globe2 className="w-5 h-5" />,
      title: "Language Walls",
      colorClass: "text-emerald-700",
      desc: <>Content is locked in major languages. Translation is manual, expensive, and loses context.</>
    },
    {
      id: 3,
      icon: <HelpCircle className="w-5 h-5" />,
      title: "Static Content",
      colorClass: "text-orange-700",
      desc: <>Videos are pre-recorded. They cannot answer specific student questions or adapt to learning pace.</>
    }
  ];

  return (
    <SlideLayout
      pageNumber={page}
      totalPages={total}
      title="The Global Education Crisis"
      subtitle="Barriers to Quality Education Equality"
    >
      <div className="flex flex-col h-full w-full overflow-hidden lg:overflow-visible">
        
        {/* Main Content Area */}
        <div className="flex-1 lg:min-h-0 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 mb-4">
          
          {/* Left Column - Shocking Reality */}
          <div className="lg:col-span-5 flex flex-col h-full lg:min-h-0">
            <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-900/10 shrink-0">
               <div className="bg-rose-50 p-2.5 rounded-xl border border-rose-100 shadow-sm">
                 <BarChart3 className="text-rose-600 w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-800">Global Education Gap</h3>
            </div>

            <div className="flex flex-col gap-4 lg:gap-5 flex-1 justify-center pr-2">
               {/* Stat 1 */}
               <div className="glass-card p-5 rounded-2xl border-l-8 border-l-rose-500 relative group hover:scale-[1.02] transition-transform">
                 <div className="flex items-baseline mb-1">
                   <span className="text-5xl font-black text-slate-800 tracking-tighter">617</span>
                   <span className="text-2xl ml-1 text-rose-600 font-bold">Million</span>
                 </div>
                 <p className="text-base font-medium text-slate-600 leading-snug">children lack basic proficiency in reading and mathematics globally.</p>
               </div>

               {/* Stat 2 */}
               <div className="glass-card p-5 rounded-2xl border-l-8 border-l-orange-500 relative group hover:scale-[1.02] transition-transform">
                 <div className="flex items-baseline mb-1">
                   <span className="text-5xl font-black text-slate-800 tracking-tighter">70</span>
                   <span className="text-2xl ml-1 text-orange-600 font-bold">%</span>
                 </div>
                 <p className="text-base font-medium text-slate-600 leading-snug">of rural schools lack access to quality digital video resources.</p>
               </div>

               {/* Stat 3 */}
               <div className="glass-card p-5 rounded-2xl border-l-8 border-l-amber-500 relative group hover:scale-[1.02] transition-transform">
                 <div className="flex items-baseline mb-1">
                   <span className="text-5xl font-black text-slate-800 tracking-tighter">2+</span>
                   <span className="text-2xl ml-1 text-amber-600 font-bold">Billion</span>
                 </div>
                 <p className="text-base font-medium text-slate-600 leading-snug">students are affected by language barriers globally.</p>
               </div>
            </div>
          </div>

          {/* Right Column - Traditional Barriers */}
          <div className="lg:col-span-7 flex flex-col h-full lg:min-h-0">
            <div className="glass-card p-6 rounded-[2rem] h-full flex flex-col relative lg:overflow-hidden shadow-xl border-white/70">
               <div className="flex items-center space-x-3 mb-4 relative z-10 shrink-0">
                  <div className="bg-amber-100/80 p-2.5 rounded-2xl shadow-sm ring-4 ring-white">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Traditional Video Challenges</h3>
               </div>

               {/* Scrollable container for barriers */}
               <div className="flex-1 lg:min-h-0 lg:overflow-y-auto pr-2 custom-scrollbar pb-2">
                  <div className="flex flex-col space-y-3 min-h-full justify-center">
                    {barriers.map((b) => (
                      <BarrierCard 
                        key={b.id}
                        {...b}
                        isOpen={openBarrier === b.id}
                        onClick={() => setOpenBarrier(openBarrier === b.id ? null : b.id)}
                      />
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Quote Footer - Shrink-0 to prevent overlapping */}
        <div className="shrink-0 pt-3 border-t border-slate-900/5 text-center flex items-center justify-center space-x-5 mt-4 lg:mt-0">
           <img 
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/220px-Nelson_Mandela_1994.jpg" 
             alt="Nelson Mandela" 
             className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-slate-200"
           />
           <div className="text-left">
             <p className="text-sm lg:text-base font-serif italic text-slate-700 font-medium">
               "Education is the most powerful weapon which you can use to change the world." 
             </p>
             <p className="text-[10px] font-sans font-bold text-slate-900 uppercase tracking-widest mt-0.5">— Nelson Mandela</p>
           </div>
        </div>
      </div>
    </SlideLayout>
  );
};