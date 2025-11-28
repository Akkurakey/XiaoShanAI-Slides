import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { 
  Zap, 
  Globe, 
  Sparkles, 
  Coins, 
  Code, 
  CheckCircle2, 
  TrendingUp, 
  Layers
} from 'lucide-react';

export const Impact: React.FC<{ page: number, total: number }> = ({ page, total }) => {

  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Redefining Productivity"
      subtitle="Why Xiaoshan AI is a Paradigm Shift"
    >
      <div className="flex flex-col h-full space-y-6">
        
        {/* TOP: Comparison Table - Premium Glass Effect */}
        <div className="rounded-[1.5rem] overflow-hidden flex-[0.55] flex flex-col shadow-2xl ring-1 ring-white/80 bg-white/40 backdrop-blur-xl min-h-0">
           {/* Header */}
           <div className="grid grid-cols-4 bg-white/60 backdrop-blur-md px-8 py-4 font-bold text-slate-800 text-sm border-b border-slate-200/50 uppercase tracking-widest shrink-0">
             <div className="pl-2">Dimension</div>
             <div className="text-slate-500">Traditional / Pure Gen-AI</div>
             <div className="text-blue-600 font-black">Xiaoshan AI</div>
             <div className="text-emerald-600">Strategic Advantage</div>
           </div>
           
           {/* Table Body */}
           <div className="flex-1 flex flex-col divide-y divide-slate-100/60 overflow-y-auto text-base">
             
             {/* Row 1: Core Tech */}
             <div className="grid grid-cols-4 px-8 py-4 items-center hover:bg-white/50 transition-colors flex-1 group">
               <div className="flex items-center font-bold text-slate-700">
                 <div className="p-1.5 bg-blue-50 rounded-lg mr-3"><Code className="w-5 h-5 text-blue-500" /></div>
                 Core Tech
               </div>
               <div className="text-slate-500 font-medium text-sm leading-snug">
                 Pure Gen-AI (Sora/Veo)<br/>
                 <span className="text-slate-400 font-normal text-xs">Black-box & Expensive</span>
               </div>
               <div className="font-bold text-slate-900 leading-tight">
                 Python + LLM Hybrid
                 <div className="text-xs text-blue-600/80 font-medium mt-1">Code-driven & Transparent</div>
               </div>
               <div>
                 <span className="text-emerald-700 font-bold bg-emerald-100/50 px-3 py-1 rounded-md text-xs border border-emerald-200 inline-block mb-1 shadow-sm">
                   Verifiable Accuracy
                 </span>
                 <p className="text-xs text-slate-500 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   Validatable code & prompts.
                 </p>
               </div>
             </div>

             {/* Row 2: Cost */}
             <div className="grid grid-cols-4 px-8 py-4 items-center hover:bg-white/50 transition-colors flex-1">
               <div className="flex items-center font-bold text-slate-700">
                 <div className="p-1.5 bg-slate-100 rounded-lg mr-3"><Coins className="w-5 h-5 text-slate-500" /></div>
                 Cost
               </div>
               <div className="text-slate-500 font-medium">$5,000+ / Video</div>
               <div className="font-bold text-slate-900">$0.02 / Video</div>
               <div><span className="text-emerald-700 font-bold bg-emerald-100/50 px-3 py-1 rounded-md text-xs border border-emerald-200 shadow-sm">99.9% Cheaper</span></div>
             </div>

             {/* Row 3: Speed */}
             <div className="grid grid-cols-4 px-8 py-4 items-center hover:bg-white/50 transition-colors flex-1">
               <div className="flex items-center font-bold text-slate-700">
                 <div className="p-1.5 bg-slate-100 rounded-lg mr-3"><Zap className="w-5 h-5 text-slate-500" /></div>
                 Speed
               </div>
               <div className="text-slate-500 font-medium">Weeks of editing</div>
               <div className="font-bold text-slate-900">3-5 Mins</div>
               <div><span className="text-emerald-700 font-bold bg-emerald-100/50 px-3 py-1 rounded-md text-xs border border-emerald-200 shadow-sm">Instant</span></div>
             </div>

             {/* Row 4: Reach */}
             <div className="grid grid-cols-4 px-8 py-4 items-center hover:bg-white/50 transition-colors flex-1">
               <div className="flex items-center font-bold text-slate-700">
                 <div className="p-1.5 bg-slate-100 rounded-lg mr-3"><Globe className="w-5 h-5 text-slate-500" /></div>
                 Reach
               </div>
               <div className="text-slate-500 font-medium">Single Language</div>
               <div className="font-bold text-slate-900">100+ Languages</div>
               <div><span className="text-emerald-700 font-bold bg-emerald-100/50 px-3 py-1 rounded-md text-xs border border-emerald-200 shadow-sm">Global</span></div>
             </div>

           </div>
        </div>

        {/* BOTTOM: "More, Fast, Good, Cheap" Grid */}
        <div className="flex-[0.45] min-h-0 grid grid-cols-4 gap-5">
           
           {/* 1. MORE (Versatility) */}
           <div className="bg-gradient-to-br from-white/80 to-indigo-50/30 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-lg flex flex-col items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-indigo-100 p-3 rounded-xl mb-4 shadow-inner">
                <Layers className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Limitless Scope</h3>
              <div className="text-sm text-slate-600 font-medium leading-loose">
                <p>● <span className="text-indigo-700">Multi-Language</span></p>
                <p>● <span className="text-indigo-700">Multi-Subject</span></p>
                <p>● <span className="text-indigo-700">Multi-Level</span></p>
                <p className="text-xs text-slate-400 mt-1 font-normal">K-12 to University</p>
              </div>
           </div>

           {/* 2. FAST (Speed) */}
           <div className="bg-gradient-to-br from-white/80 to-blue-50/30 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-lg flex flex-col items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-100 p-3 rounded-xl mb-4 shadow-inner">
                <Zap className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Lightning Fast</h3>
              <div className="mt-auto w-full">
                <div className="flex items-baseline">
                   <span className="text-4xl font-black text-slate-800 tracking-tighter">&lt; 1</span>
                   <span className="text-xl text-slate-500 font-bold ml-1">min</span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-blue-500 w-[95%] rounded-full animate-pulse"></div>
                </div>
                <p className="text-xs text-slate-500 mt-2 font-medium">Avg. generation time</p>
              </div>
           </div>

           {/* 3. GOOD (Quality) */}
           <div className="bg-gradient-to-br from-white/80 to-purple-50/30 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-lg flex flex-col items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-purple-100 p-3 rounded-xl mb-4 shadow-inner">
                <Sparkles className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Premium Quality</h3>
              <ul className="text-sm text-slate-600 space-y-2.5 w-full font-medium">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-purple-500 shrink-0"/> Rich Animations</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-purple-500 shrink-0"/> Precise Pedagogy</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-purple-500 shrink-0"/> Study Skills</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-purple-500 shrink-0"/> Adjustable Tiers</li>
              </ul>
           </div>

           {/* 4. CHEAP (Efficiency) */}
           <div className="bg-gradient-to-br from-emerald-50/80 to-white backdrop-blur-xl rounded-2xl p-6 border border-emerald-100/50 shadow-lg flex flex-col items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 p-2 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity">
                 <Coins className="w-32 h-32 text-emerald-800" />
              </div>
              <div className="bg-emerald-100 p-3 rounded-xl mb-4 shadow-inner z-10">
                <TrendingUp className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 z-10">Ultra Efficient</h3>
              <div className="mt-auto z-10">
                 <div className="flex items-center space-x-2">
                    <span className="text-4xl font-black text-emerald-600 tracking-tight">$1.00</span>
                 </div>
                 <div className="text-sm font-bold text-slate-400 my-1">EQUALS</div>
                 <div className="text-2xl font-bold text-slate-800">50 Videos</div>
                 <div className="inline-block bg-emerald-100 px-2 py-0.5 rounded text-[10px] text-emerald-700 font-bold mt-2">Unmatched ROI</div>
              </div>
           </div>

        </div>

      </div>
    </SlideLayout>
  );
};
