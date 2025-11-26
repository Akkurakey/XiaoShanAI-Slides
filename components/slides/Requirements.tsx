import React, { useState } from 'react';
import { SlideLayout } from '../SlideLayout';
import { WifiOff, ShieldCheck, Globe, UserCheck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ReqCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  points: React.ReactNode[];
  result: string;
  color: string;
  bgClass: string;
  textClass: string;
}> = ({ icon, title, points, result, color, bgClass, textClass }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`glass-card p-5 lg:p-7 rounded-[2.5rem] flex flex-col h-full border-2 border-transparent transition-all duration-300 relative overflow-hidden group cursor-pointer min-h-[250px] ${isHovered ? 'bg-white/90 shadow-2xl scale-[1.02] z-10' : 'hover:border-white/80'}`}
      style={{ borderColor: isHovered ? color : 'transparent' }}
    >
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center mb-4 shrink-0">
          <div className={`${bgClass} p-3.5 rounded-2xl mr-4 shadow-sm ring-2 ring-white transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
             {icon}
          </div>
          <h3 className="text-lg lg:text-2xl font-bold text-slate-800 leading-tight">{title}</h3>
        </div>
        
        {/* Content Reveal */}
        <motion.div 
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-2"
        >
           {points.map((p, i) => (
             <div key={i} className="flex items-start text-sm lg:text-lg text-slate-600 text-left">
               <ChevronRight className={`w-5 h-5 mr-2 mt-0.5 shrink-0 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
               <span className="leading-snug">{p}</span>
             </div>
           ))}
        </motion.div>
      </div>

      <motion.div 
        animate={{ 
          y: isHovered ? 0 : 0,
          opacity: 1
        }}
        className={`mt-4 shrink-0 font-bold ${bgClass} backdrop-blur-sm px-5 py-3 rounded-xl text-center border border-white/20 text-sm lg:text-base ${textClass}`}
      >
        {result}
      </motion.div>

      {/* Background hint icon */}
      <div className="absolute -bottom-10 -right-10 opacity-5 transform rotate-12 scale-[3] pointer-events-none transition-transform duration-500 group-hover:scale-[3.5] group-hover:rotate-6">
        {icon}
      </div>
    </motion.div>
  );
};

export const Requirements: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Tailored for Challenge 4"
      subtitle="Addressing Core Requirements in Real Environments"
    >
      <div className="flex flex-col h-full w-full">
         <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 pb-2">
            
            <ReqCard 
              icon={<WifiOff className="w-7 h-7 text-blue-600" />}
              title="1. Low-Bandwidth"
              points={[
                <>Lightweight <strong className="text-blue-600 font-bold bg-blue-50/50 px-1 rounded">HTML5 Player</strong></>,
                <>Pre-Generated <strong className="text-blue-600 font-bold bg-blue-50/50 px-1 rounded">Library</strong></>,
                <>Tested In <strong className="text-blue-600 font-bold bg-blue-50/50 px-1 rounded">Rural Network Conditions</strong></>,
              ]}
              result="Result: Seamless everywhere"
              color="#2563eb"
              bgClass="bg-blue-50"
              textClass="text-blue-900"
            />

            <ReqCard 
              icon={<ShieldCheck className="w-7 h-7 text-purple-600" />}
              title="2. Quality Assurance"
              points={[
                <>9-Rule <strong className="text-purple-600 font-bold bg-purple-50/50 px-1 rounded">AI Validation Engine</strong></>,
                <>Content Accuracy <strong className="text-purple-600 font-bold bg-purple-50/50 px-1 rounded">Score</strong></>,
                <>Verified By <strong className="text-purple-600 font-bold bg-purple-50/50 px-1 rounded">80+ Teachers</strong></>,
              ]}
              result="Result: Trust through verification"
              color="#9333ea"
              bgClass="bg-purple-50"
              textClass="text-purple-900"
            />

            <ReqCard 
              icon={<Globe className="w-7 h-7 text-emerald-600" />}
              title="3. Cultural Adaptability"
              points={[
                <><strong className="text-emerald-600 font-bold bg-emerald-50/50 px-1 rounded">Universal Languages</strong></>,
                <>Local Exams (<strong className="text-emerald-600 font-bold bg-emerald-50/50 px-1 rounded">SAT/IB/A-level/Gaokao</strong>)</>,
                <>Customizable <strong className="text-emerald-600 font-bold bg-emerald-50/50 px-1 rounded">Prompts</strong></>
              ]}
              result="Result: Universal yet local"
              color="#059669"
              bgClass="bg-emerald-50"
              textClass="text-emerald-900"
            />

            <ReqCard 
              icon={<UserCheck className="w-7 h-7 text-orange-600" />}
              title="4. Human Oversight"
              points={[
                <>Full <strong className="text-orange-600 font-bold bg-orange-50/50 px-1 rounded">Code Transparency</strong></>,
                <>Manual <strong className="text-orange-600 font-bold bg-orange-50/50 px-1 rounded">Code Editing</strong></>,
                <><strong className="text-orange-600 font-bold bg-orange-50/50 px-1 rounded">Feedback Loop</strong></>
              ]}
              result="Result: Humans in control"
              color="#ea580c"
              bgClass="bg-orange-50"
              textClass="text-orange-900"
            />

         </div>
      </div>
    </SlideLayout>
  );
};