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
      className={`glass-card p-6 lg:p-8 rounded-[2.5rem] flex flex-col justify-between border-2 border-transparent transition-all duration-300 relative overflow-hidden group cursor-pointer ${isHovered ? 'bg-white/90 shadow-2xl scale-[1.02]' : 'hover:border-white/80'}`}
      style={{ borderColor: isHovered ? color : 'transparent' }}
    >
      <div>
        <div className="flex items-center mb-6">
          <div className={`${bgClass} p-4 rounded-2xl mr-5 shadow-sm ring-2 ring-white transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
             {icon}
          </div>
          <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
        </div>
        
        {/* Content Reveal */}
        <motion.div 
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          className="space-y-4"
        >
           {points.map((p, i) => (
             <div key={i} className="flex items-start text-lg text-slate-600 text-left">
               <ChevronRight className={`w-5 h-5 mr-2 mt-1 shrink-0 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
               <span className="leading-snug">{p}</span>
             </div>
           ))}
        </motion.div>
      </div>

      <motion.div 
        animate={{ 
          y: isHovered ? 0 : 20,
          opacity: isHovered ? 1 : 0 
        }}
        className={`mt-6 font-bold ${bgClass} backdrop-blur-sm px-6 py-4 rounded-xl text-center border border-white/20 ${textClass}`}
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
      <div className="grid grid-cols-2 gap-8 h-full">
        
        <ReqCard 
          icon={<WifiOff className="w-8 h-8 text-blue-600" />}
          title="1. Low-Bandwidth"
          points={[
            <><strong className="text-blue-600 font-bold bg-blue-50/50 px-1 rounded">Local Deployment</strong> (DeepSeek)</>,
            <>Zero Internet & <strong className="text-blue-600 font-bold bg-blue-50/50 px-1 rounded">Offline First</strong></>,
            <>Runs on <strong className="text-blue-600 font-bold bg-blue-50/50 px-1 rounded">Low Specs</strong> (1 Python + 1 HTML)</>,
          ]}
          result="Result: Connect anywhere, anytime"
          color="#2563eb"
          bgClass="bg-blue-50"
          textClass="text-blue-900"
        />

        <ReqCard 
          icon={<ShieldCheck className="w-8 h-8 text-purple-600" />}
          title="2. Quality Assurance"
          points={[
            <>Standardized <strong className="text-purple-600 font-bold bg-purple-50/50 px-1 rounded">Code-Based Rendering</strong></>,
            <>Strict <strong className="text-purple-600 font-bold bg-purple-50/50 px-1 rounded">9-Rule</strong> Prompt Constraints</>,
            <>Automated <strong className="text-purple-600 font-bold bg-purple-50/50 px-1 rounded">AI Correction Engine</strong></>,
          ]}
          result="Result: Trust through verification"
          color="#9333ea"
          bgClass="bg-purple-50"
          textClass="text-purple-900"
        />

        <ReqCard 
          icon={<Globe className="w-8 h-8 text-emerald-600" />}
          title="3. Cultural Adaptability"
          points={[
            <>Adaptive Methods <strong className="text-emerald-600 font-bold bg-emerald-50/50 px-1 rounded">(Visual/Mnemonics)</strong></>,
            <>Tracks <strong className="text-emerald-600 font-bold bg-emerald-50/50 px-1 rounded">Learning Habits</strong></>,
            <>Localized Exams <strong className="text-emerald-600 font-bold bg-emerald-50/50 px-1 rounded">(SAT/IB/Gaokao)</strong></>
          ]}
          result="Result: Global reach, local touch"
          color="#059669"
          bgClass="bg-emerald-50"
          textClass="text-emerald-900"
        />

        <ReqCard 
          icon={<UserCheck className="w-8 h-8 text-orange-600" />}
          title="4. Human Oversight"
          points={[
            <><strong className="text-orange-600 font-bold bg-orange-50/50 px-1 rounded">Community Co-Creation</strong></>,
            <>Crowdsourced <strong className="text-orange-600 font-bold bg-orange-50/50 px-1 rounded">Peer Review</strong></>,
            <>Standardization Drives <strong className="text-orange-600 font-bold bg-orange-50/50 px-1 rounded">Costs to Zero</strong></>
          ]}
          result="Result: AI-powered, human-controlled"
          color="#ea580c"
          bgClass="bg-orange-50"
          textClass="text-orange-900"
        />

      </div>
    </SlideLayout>
  );
};
