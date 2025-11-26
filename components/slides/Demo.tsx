import React, { useState } from 'react';
import { SlideLayout } from '../SlideLayout';
import { Play, CheckCircle, Code, Globe2, Calculator, Atom, Volume2, Eye, ArrowDown, FileVideo, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Demo: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  const [activeTab, setActiveTab] = useState<'concept' | 'problem'>('concept');
  const [conceptTopic, setConceptTopic] = useState<'renr' | 'sound'>('renr');
  const [problemLang, setProblemLang] = useState<'en' | 'cn'>('en');

  // CONFIGURATION
  const VIDEO_PATHS = {
    concept: {
      renr: "/assets/demo_renr.mov",
      sound: "/assets/demo_sound.mov"
    },
    problem: {
      en: "/assets/demo_problem_en.mov",
      cn: "/assets/demo_problem_cn.mov"
    }
  };

  const currentVideoPath = activeTab === 'concept' 
    ? VIDEO_PATHS.concept[conceptTopic] 
    : VIDEO_PATHS.problem[problemLang];

  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Live Capabilities"
      subtitle="Dual-Mode Video Generation Demo"
    >
      <div className="flex flex-col h-full lg:overflow-hidden">
        {/* Main Tabs - Shrink-0 */}
        <div className="flex justify-center mb-5 shrink-0">
           <div className="glass-card p-1.5 rounded-full flex space-x-2 shadow-lg">
            <button 
              onClick={() => setActiveTab('concept')}
              className={`px-6 lg:px-8 py-2.5 rounded-full text-sm lg:text-base font-bold transition-all duration-300 ${
                activeTab === 'concept' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-700 hover:bg-white/30'
              }`}
            >
              Mode 1: Concept
            </button>
            <button 
              onClick={() => setActiveTab('problem')}
              className={`px-6 lg:px-8 py-2.5 rounded-full text-sm lg:text-base font-bold transition-all duration-300 ${
                activeTab === 'problem' ? 'bg-white text-purple-600 shadow-md' : 'text-slate-500 hover:text-slate-700 hover:bg-white/30'
              }`}
            >
              Mode 2: Problem
            </button>
           </div>
        </div>

        {/* Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:min-h-0">
          {/* Left: Input & Process Flow */}
          <div className="flex flex-col h-full relative lg:col-span-5">
            
            {/* Steps Container */}
            <div className="flex-1 lg:overflow-y-auto custom-scrollbar pr-1 pb-4 flex flex-col">
              
              {/* Step 1: Input */}
              <div className="glass-card p-5 rounded-[2rem] relative shrink-0 z-20 mb-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
                    {activeTab === 'concept' ? 'Step 1: Input Concept Request' : 'Step 1: Input Problem'}
                  </h4>
                  
                  {/* Toggles */}
                  {activeTab === 'concept' && (
                    <div className="flex bg-slate-100/50 p-1 rounded-lg border border-slate-200/50 self-end">
                       <button 
                         onClick={() => setConceptTopic('renr')}
                         className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${conceptTopic === 'renr' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:bg-white/50'}`}
                       >CV: ReNR</button>
                       <button 
                         onClick={() => setConceptTopic('sound')}
                         className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${conceptTopic === 'sound' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:bg-white/50'}`}
                       >Sound</button>
                    </div>
                  )}
                  {activeTab === 'problem' && (
                    <div className="flex bg-slate-100/50 p-1 rounded-lg border border-slate-200/50 self-end">
                       <button 
                         onClick={() => setProblemLang('en')}
                         className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${problemLang === 'en' ? 'bg-white shadow-sm text-purple-600' : 'text-slate-500 hover:bg-white/50'}`}
                       >English</button>
                       <button 
                         onClick={() => setProblemLang('cn')}
                         className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${problemLang === 'cn' ? 'bg-white shadow-sm text-purple-600' : 'text-slate-500 hover:bg-white/50'}`}
                       >中文</button>
                    </div>
                  )}
                </div>
                
                <div className="bg-white/60 p-4 rounded-2xl text-lg font-medium text-slate-700 border border-white/80 shadow-inner min-h-[80px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeTab + conceptTopic + problemLang}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="w-full"
                    >
                      {activeTab === 'concept' ? (
                        conceptTopic === 'renr' ? (
                          <div className="flex items-center">
                             <Atom className="w-8 h-8 mr-4 text-blue-500 shrink-0" />
                             <div className="leading-tight">
                                <span className="text-base">"Explain: ReNR (Residual Neural Radiance) in English"</span>
                                <div className="text-xs text-slate-400 mt-0.5">Computer Vision</div>
                             </div>
                          </div>
                        ) : (
                          <div className="flex items-center">
                             <Volume2 className="w-8 h-8 mr-4 text-red-500 shrink-0" />
                             <div className="leading-tight">
                                <span>"Explain sound propagation in Japanese"</span>
                                <div className="text-xs text-slate-400 mt-0.5">Physics</div>
                             </div>
                          </div>
                        )
                      ) : (
                        <div className="flex items-center">
                           <Calculator className="w-8 h-8 mr-4 text-purple-500 shrink-0" />
                           <span className="leading-tight text-base">
                              {problemLang === 'en' 
                                ? "Triangle ABC, side a=4, Angle A=60°. Find the range of the area."
                                : "已知 \u25B3ABC 中，a=4，\u2220A=60\u00B0，求 \u25B3ABC 面积的取值范围。"}
                           </span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Transition 1 */}
              <div className="flex justify-center items-center py-2 relative z-10 -my-2 shrink-0">
                 <div className="bg-slate-200/80 backdrop-blur text-[10px] font-bold text-slate-500 px-3 py-0.5 rounded-full flex items-center shadow-sm border border-white">
                    <ArrowDown className="w-3 h-3 mr-1" /> 3 seconds
                 </div>
              </div>

              {/* Step 2 & 3: Process */}
              <div className="glass-card flex-shrink-0 min-h-[280px] rounded-[2rem] p-5 flex flex-col relative overflow-hidden border-t-4 border-t-white/50 mb-2">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 opacity-50"></div>
                  
                  {/* Step 2 */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded w-fit mb-2">
                      {activeTab === 'concept' ? 'Step 2: AI Generates Teaching Code' : 'Step 2: AI Analyzes & Generates Solution Code'}
                    </h4>
                    
                    {/* Added min-h to stabilize height between modes */}
                    <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-200/60 min-h-[145px] flex flex-col justify-center">
                       <div className="flex items-center text-xs font-bold text-blue-600 mb-2 animate-pulse">
                          <Cpu className="w-3 h-3 mr-1" /> 🤖 AI Processing...
                       </div>
                       <div className="space-y-1 pl-1">
                          {activeTab === 'concept' ? (
                             <>
                               <div className="flex items-center text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Concept structure created</div>
                               <div className="flex items-center text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Visual designed</div>
                               <div className="flex items-center text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Animation sequence planned</div>
                               <div className="flex items-center text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Code generated</div>
                             </>
                          ) : (
                             <>
                               <div className="flex items-center text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Problem parsed</div>
                               <div className="flex items-center text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Solution steps identified</div>
                               <div className="flex items-center text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Animation code generated</div>
                               {/* Empty div to balance height difference */}
                               <div className="h-5"></div>
                             </>
                          )}
                          <div className="flex items-center text-xs font-bold text-slate-500 bg-white border border-slate-200 rounded px-2 py-1 w-fit mt-1.5 cursor-pointer hover:bg-slate-50 hover:text-blue-600 transition-colors">
                             <Eye className="w-3 h-3 mr-1" /> View Python Code
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Transition 2 */}
                  <div className="flex justify-center items-center py-1 shrink-0">
                     <div className="bg-slate-200/80 backdrop-blur text-[10px] font-bold text-slate-500 px-3 py-0.5 rounded-full flex items-center shadow-sm border border-white">
                        <ArrowDown className="w-3 h-3 mr-1" /> 2-4 minutes
                     </div>
                  </div>

                  {/* Step 3 */}
                  <div className="mt-1 flex-1 flex flex-col min-h-[80px]">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded w-fit mb-2">
                      {activeTab === 'concept' ? 'Step 3: Render Teaching Video' : 'Step 3: Render Solution Animation'}
                    </h4>
                    <div className="bg-slate-800 rounded-xl p-3 flex items-center justify-between text-white flex-1 relative overflow-hidden group">
                       <div className="flex items-center relative z-10">
                          <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-emerald-400 animate-spin mr-3"></div>
                          <div>
                            <div className="text-sm font-bold">Rendering...</div>
                            <div className="text-[10px] text-white/50 font-mono">1080p • 60fps</div>
                          </div>
                       </div>
                       <div className="text-emerald-400 text-xs font-bold relative z-10 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
                          In Progress
                       </div>
                       {/* Background progress bar effect */}
                       <div className="absolute left-0 bottom-0 h-1 bg-emerald-500 w-[70%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          {/* Right: Output */}
          <div className="flex flex-col h-full min-h-[400px] lg:min-h-0 relative py-10 lg:col-span-7 justify-center">
             {/* Transition Final (Desktop Only) */}
             <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 hidden xl:block">
                 <div className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm border border-emerald-200 -rotate-90 whitespace-nowrap">
                   ⬇️ Ready!
                 </div>
             </div>

            {/* Changed h-full to flex-1 to strictly respect parent padding */}
            <div className="bg-slate-900 rounded-[2.5rem] flex-1 flex flex-col relative shadow-2xl overflow-hidden border-4 border-slate-800 ring-1 ring-white/10 group">
               {/* Header */}
               <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black/80 to-transparent z-20 flex items-center px-6 justify-between pointer-events-none">
                 <div className="flex items-center">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                   <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
                      {activeTab === 'concept' ? 'Step 4: Teaching Video Complete' : 'Step 4: Solution Video Complete'}
                   </span>
                 </div>
               </div>
               
               {/* MOV Video Placeholder */}
               <div className="flex-1 relative flex items-center justify-center bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentVideoPath}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <video 
                        className="w-full h-full object-contain" 
                        controls
                        poster="/assets/poster_placeholder.png"
                      >
                         <source 
                            src={currentVideoPath} 
                            type="video/quicktime" 
                         />
                         <source 
                            src={currentVideoPath.replace('.mov', '.mp4')} 
                            type="video/mp4" 
                         />
                         <div className="text-white text-center p-10 h-full flex flex-col items-center justify-center">
                           <p className="text-xl font-bold mb-2">Video Placeholder</p>
                           <p className="font-mono text-slate-500 text-sm break-all px-4">
                             {currentVideoPath}
                           </p>
                         </div>
                      </video>
                    </motion.div>
                  </AnimatePresence>
               </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};