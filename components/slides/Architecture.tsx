import React, { useState } from 'react';
import { SlideLayout } from '../SlideLayout';
import { Server, Database, Layout, ArrowDown, Cpu, PlayCircle, Bot, FileCode, Network, Layers, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Reusable Layer Card Component
const ArchitectureLayer: React.FC<{
  title: React.ReactNode;
  icon: React.ReactNode;
  colorClass: string;
  bgClass: string;
  borderColorClass: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ title, icon, colorClass, bgClass, borderColorClass, children, isExpanded, onToggle }) => {
  return (
    <motion.div 
       layout
       onClick={onToggle}
       className={`glass-card rounded-[2rem] p-4 lg:p-6 border-l-8 relative cursor-pointer transition-all duration-300 hover:shadow-xl ${borderColorClass} ${bgClass} ${isExpanded ? 'bg-white/80' : ''}`}
    >
       <div className="flex justify-between items-center mb-3">
          <h3 className={`text-lg lg:text-2xl font-bold text-slate-800 flex items-center ${isExpanded ? 'mb-4' : 'mb-0'}`}>
             <div className={`mr-2 lg:mr-4 ${colorClass}`}>{icon}</div>
             {title}
          </h3>
          <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
       </div>
       
       <AnimatePresence initial={false}>
          <motion.div 
             layout
             className="grid gap-5"
          >
             {children}
          </motion.div>
       </AnimatePresence>
    </motion.div>
  );
};

// Reusable Sub-Component Card
const SubComponent: React.FC<{
  title: string;
  icon: React.ReactNode;
  items: string[];
  isParentExpanded: boolean;
  colorClass: string;
}> = ({ title, icon, items, isParentExpanded, colorClass }) => {
  return (
    <div className={`bg-white/60 p-4 lg:p-5 rounded-xl border border-white/50 shadow-sm transition-all duration-300 ${isParentExpanded ? 'bg-white/90' : ''}`}>
       <div className={`flex items-center font-bold text-base lg:text-lg ${colorClass} ${isParentExpanded ? 'mb-3' : 'mb-0'}`}>
          {icon} <span className="ml-2">{title}</span>
       </div>
       
       <AnimatePresence>
         {isParentExpanded && (
           <motion.ul 
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: 'auto' }}
             exit={{ opacity: 0, height: 0 }}
             className="text-sm lg:text-base text-slate-600 space-y-2 overflow-hidden"
           >
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-slate-400">•</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
           </motion.ul>
         )}
       </AnimatePresence>
    </div>
  );
};

export const Architecture: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  const [expandedLayer, setExpandedLayer] = useState<string | null>(null);

  const toggleLayer = (layer: string) => {
    setExpandedLayer(expandedLayer === layer ? null : layer);
  };

  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="System Architecture: Dual-Mode Intelligence"
      subtitle="Scalable, Real-time, Transparent"
    >
      <div className="h-full relative px-1 lg:px-4 overflow-y-auto custom-scrollbar pb-10">
        <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.3); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(148, 163, 184, 0.5); }
        `}</style>
        
        {/* Background dashed line connecting layers - Only visible when not expanded heavily to prevent weird overlap */}
        <div className="absolute inset-0 flex justify-center -z-10 opacity-30 pointer-events-none h-[150%]">
           <div className="w-0.5 h-full bg-slate-300 dashed-line"></div>
        </div>
        <style>{`.dashed-line { background-image: linear-gradient(to bottom, #94a3b8 50%, transparent 50%); background-size: 2px 20px; }`}</style>

        <div className="max-w-5xl mx-auto py-2 space-y-3">
          
          {/* 1. User Interface Layer */}
          <motion.div layout initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
             <ArchitectureLayer
                title="User Interface"
                icon={<Layout className="w-6 h-6 lg:w-8 lg:h-8"/>}
                colorClass="text-blue-600"
                bgClass="bg-blue-50/20"
                borderColorClass="border-l-blue-500"
                isExpanded={expandedLayer === 'ui'}
                onToggle={() => toggleLayer('ui')}
             >
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
                   <SubComponent 
                      title="Video Player"
                      icon={<PlayCircle className="w-5 h-5"/>}
                      colorClass="text-blue-700"
                      isParentExpanded={expandedLayer === 'ui'}
                      items={["Real-time Preview", "Download & Share", "Step-by-step Display"]}
                   />
                   <SubComponent 
                      title="AI Assistant"
                      icon={<Bot className="w-5 h-5"/>}
                      colorClass="text-blue-700"
                      isParentExpanded={expandedLayer === 'ui'}
                      items={["Prompt Editing", "Dual-Mode Switching", "Multi-language Input"]}
                   />
                   <SubComponent 
                      title="Code Editor"
                      icon={<FileCode className="w-5 h-5"/>}
                      colorClass="text-blue-700"
                      isParentExpanded={expandedLayer === 'ui'}
                      items={["Python Code Visibility", "Knowledge Validation", "Logic Check"]}
                   />
                </div>
             </ArchitectureLayer>
          </motion.div>

          {/* Connector */}
          <div className="flex justify-center items-center py-1 relative z-10">
             <div className="bg-slate-800 text-white text-xs font-mono py-1.5 px-4 rounded-full shadow-lg border border-slate-600 flex items-center">
               <Network className="w-3.5 h-3.5 mr-2 animate-pulse text-green-400"/> WebSocket (Real-time)
             </div>
          </div>

          {/* 2. Backend Server Layer */}
          <motion.div layout initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
             <ArchitectureLayer
                title={<span className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">Backend Server <span className="font-mono text-[10px] lg:text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-bold sm:ml-4 mt-2 sm:mt-0 border border-purple-200 w-fit">Python + AsyncIO + WebSockets</span></span>}
                icon={<Server className="w-6 h-6 lg:w-8 lg:h-8"/>}
                colorClass="text-purple-600"
                bgClass="bg-purple-50/20"
                borderColorClass="border-l-purple-500"
                isExpanded={expandedLayer === 'backend'}
                onToggle={() => toggleLayer('backend')}
             >
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
                   <SubComponent 
                      title="Real-time Core"
                      icon={<Network className="w-5 h-5"/>}
                      colorClass="text-purple-700"
                      isParentExpanded={expandedLayer === 'backend'}
                      items={["Real-time Communication", "Dual-Mode Processing"]}
                   />
                   <SubComponent 
                      title="Queue & Lang"
                      icon={<Cpu className="w-5 h-5"/>}
                      colorClass="text-purple-700"
                      isParentExpanded={expandedLayer === 'backend'}
                      items={["Task Queue Management", "Multi-language Processing"]}
                   />
                   <SubComponent 
                      title="Logic & FS"
                      icon={<Database className="w-5 h-5"/>}
                      colorClass="text-purple-700"
                      isParentExpanded={expandedLayer === 'backend'}
                      items={["Problem Analysis Engine", "File System Management"]}
                   />
                </div>
             </ArchitectureLayer>
          </motion.div>

          {/* Connector */}
          <div className="flex justify-center py-1 relative z-10">
             <ArrowDown className="w-6 h-6 text-slate-400" />
          </div>

          {/* 3. Core Engines Layer */}
          <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
             <ArchitectureLayer
                title="Core Engines"
                icon={<Cpu className="w-6 h-6 lg:w-8 lg:h-8"/>}
                colorClass="text-slate-700"
                bgClass="bg-slate-50/20"
                borderColorClass="border-l-slate-500"
                isExpanded={expandedLayer === 'core'}
                onToggle={() => toggleLayer('core')}
             >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                   <div className={`rounded-xl border-t-4 border-t-emerald-500 bg-emerald-50/30 p-5 transition-all ${expandedLayer === 'core' ? 'bg-emerald-50/50' : ''}`}>
                      <div className="flex items-center text-base font-bold text-emerald-800 mb-3">
                         <Cpu className="w-5 h-5 mr-2"/> AI Engine
                      </div>
                      <AnimatePresence>
                        {expandedLayer === 'core' && (
                           <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-slate-700 space-y-1.5 font-medium">
                              <li className="font-bold text-emerald-800">• Latest AI Model</li>
                              <li>• Dual-Mode: (Concept/Problem)</li>
                              <li>• Code Generation</li>
                              <li>• Problem Analysis</li>
                              <li>• 9 Rules Validation & Error Prevention</li>
                           </motion.ul>
                        )}
                      </AnimatePresence>
                   </div>

                   <div className={`rounded-xl border-t-4 border-t-red-500 bg-red-50/30 p-5 transition-all ${expandedLayer === 'core' ? 'bg-red-50/50' : ''}`}>
                      <div className="flex items-center text-base font-bold text-red-800 mb-3">
                         <Layers className="w-5 h-5 mr-2"/> Rendering Engine
                      </div>
                       <AnimatePresence>
                        {expandedLayer === 'core' && (
                           <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-slate-700 space-y-1.5 font-medium">
                              <li className="font-bold text-red-800">• Math Visualization</li>
                              <li>• Animation Engine</li>
                              <li>• Multi-subject Support</li>
                              <li>• Step-by-step Animation</li>
                              <li>• MP4 Output & Quality Control</li>
                           </motion.ul>
                        )}
                      </AnimatePresence>
                   </div>

                   <div className={`rounded-xl border-t-4 border-t-orange-500 bg-orange-50/30 p-5 transition-all ${expandedLayer === 'core' ? 'bg-orange-50/50' : ''}`}>
                      <div className="flex items-center text-base font-bold text-orange-800 mb-3">
                         <Database className="w-5 h-5 mr-2"/> Storage System
                      </div>
                       <AnimatePresence>
                        {expandedLayer === 'core' && (
                           <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-slate-700 space-y-1.5 font-medium">
                              <li className="font-bold text-orange-800">• Smart Naming</li>
                              <li>• Version Control</li>
                              <li>• Code Archive</li>
                              <li>• Prompt History</li>
                              <li>• Problem & Solution Archive</li>
                           </motion.ul>
                        )}
                      </AnimatePresence>
                   </div>
                </div>
             </ArchitectureLayer>
          </motion.div>

        </div>
      </div>
    </SlideLayout>
  );
};