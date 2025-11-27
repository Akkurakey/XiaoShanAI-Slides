import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { 
  School, Monitor, BookOpen, Video, Users, History, Radio, 
  ScanLine, Lightbulb, FileBarChart, PenTool, GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureItem: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  desc: string; 
  iconGradient: string; 
  iconColor: string;    
}> = ({ icon, title, desc, iconGradient, iconColor }) => (
  <div className="flex items-center p-3 rounded-2xl bg-white/40 border border-slate-100/50 shadow-sm w-full">
    {/* Icon with Gradient Background (Static) */}
    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${iconGradient} flex items-center justify-center shrink-0 shadow-sm`}>
      <div className={`${iconColor}`}>
        {icon}
      </div>
    </div>
    
    {/* Text Content (Static) */}
    <div className="ml-4 flex-1 min-w-0">
      <h4 className="text-sm font-bold text-slate-700 leading-tight mb-0.5">{title}</h4>
      <p className="text-xs text-slate-500 font-medium leading-tight truncate">{desc}</p>
    </div>
  </div>
);

export const UseCases: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Use Cases" 
      subtitle="Bridging the Digital Divide with Optimized Workflows"
    >
      <div className="flex flex-col h-full gap-5 pb-2">
        
        {/* Top: Scenario Context */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-orange-50/80 to-white border border-orange-100/50 rounded-2xl p-4 flex flex-col md:flex-row items-center shadow-sm relative overflow-hidden shrink-0 min-h-[90px]"
        >
           {/* Decorative Circles Background */}
           <div className="absolute right-0 top-0 h-full w-full overflow-hidden opacity-30 pointer-events-none">
             <div className="absolute -right-10 -top-20 w-60 h-60 rounded-full border-[20px] border-orange-100/30"></div>
             <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full border-[20px] border-orange-100/30"></div>
           </div>

           <div className="bg-white p-3 rounded-2xl md:mr-5 mb-2 md:mb-0 shadow-[0_2px_10px_rgba(249,115,22,0.15)] text-orange-500 shrink-0 relative z-10 border border-orange-50">
              <School className="w-6 h-6" />
           </div>
           
           <div className="relative z-10 flex-1 flex flex-col justify-center">
              <div className="flex items-baseline space-x-3 mb-1.5">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest bg-orange-100 text-orange-700 shadow-sm ring-1 ring-orange-200/50">Context</span>
                <h3 className="text-base font-serif font-bold text-slate-800">Rural Primary School <span className="text-slate-400 font-sans text-xs font-normal ml-1 tracking-wide">| Yunnan Region</span></h3>
              </div>
              <p className="text-slate-600 text-sm leading-snug max-w-5xl">
                Teachers utilize legacy <span className="font-semibold text-slate-800 bg-orange-100/50 px-1.5 py-0.5 rounded text-xs mx-1">Win7 Whiteboards</span> while students engage in group learning sharing <span className="font-semibold text-slate-800 bg-orange-100/50 px-1.5 py-0.5 rounded text-xs mx-1">3 Tablets per Class</span>.
              </p>
           </div>
        </motion.div>

        {/* Bottom: Roles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
           
           {/* Teacher Side */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 }}
             className="relative flex flex-col h-full bg-gradient-to-b from-slate-50/80 to-slate-100/50 border border-white/60 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden"
           >
              {/* Header */}
              <div className="relative z-10 px-6 py-4 flex items-center justify-between border-b border-slate-200/50 bg-white/40 backdrop-blur-sm">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                        <PenTool className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 leading-none">Teacher Portal</h3>
                        <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-1.5">Instruction & Control</p>
                    </div>
                 </div>
                 <div className="text-5xl font-black text-slate-200/50 absolute top-1 right-6 -z-10 select-none font-serif italic">01</div>
              </div>

              {/* List */}
              <div className="flex-1 p-5 flex flex-col justify-between overflow-y-auto">
                 <FeatureItem 
                    icon={<BookOpen className="w-4 h-4" />}
                    title="Smart Lesson Planning"
                    desc="Rapidly create plans with AI assistance."
                    iconGradient="from-blue-50 to-blue-100"
                    iconColor="text-blue-600"
                 />
                 <FeatureItem 
                    icon={<Video className="w-4 h-4" />}
                    title="Batch Video Gen"
                    desc="Produce knowledge point videos in bulk."
                    iconGradient="from-blue-50 to-blue-100"
                    iconColor="text-blue-600"
                 />
                 <FeatureItem 
                    icon={<Users className="w-4 h-4" />}
                    title="Class Analytics"
                    desc="Monitor student usage & engagement."
                    iconGradient="from-blue-50 to-blue-100"
                    iconColor="text-blue-600"
                 />
                 <FeatureItem 
                    icon={<History className="w-4 h-4" />}
                    title="Activity Logs"
                    desc="Traceable history of all class activities."
                    iconGradient="from-blue-50 to-blue-100"
                    iconColor="text-blue-600"
                 />
                 <FeatureItem 
                    icon={<Radio className="w-4 h-4" />}
                    title="Remote Guidance"
                    desc="1-on-1 video link for personalized help."
                    iconGradient="from-blue-50 to-blue-100"
                    iconColor="text-blue-600"
                 />
                  <FeatureItem 
                    icon={<Monitor className="w-4 h-4" />}
                    title="Screen Casting"
                    desc="Project tablet content to the big screen."
                    iconGradient="from-blue-50 to-blue-100"
                    iconColor="text-blue-600"
                 />
              </div>
           </motion.div>

           {/* Student Side */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             // 移除了 hover:border-emerald-300
             className="relative flex flex-col h-full bg-gradient-to-b from-slate-50/80 to-slate-100/50 border border-white/60 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden"
           >
              {/* Header */}
              <div className="relative z-10 px-6 py-4 flex items-center justify-between border-b border-slate-200/50 bg-white/40 backdrop-blur-sm">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                        <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 leading-none">Student Portal</h3>
                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1.5">Self-Directed Learning</p>
                    </div>
                 </div>
                 <div className="text-5xl font-black text-slate-200/50 absolute top-1 right-6 -z-10 select-none font-serif italic">02</div>
              </div>

              {/* List */}
              <div className="flex-1 p-5 flex flex-col justify-between overflow-y-auto">
                 <FeatureItem 
                    icon={<FileBarChart className="w-4 h-4" />}
                    title="Exam Analysis"
                    desc="Instant feedback on daily practice."
                    iconGradient="from-emerald-50 to-emerald-100"
                    iconColor="text-emerald-600"
                 />
                 <FeatureItem 
                    icon={<Video className="w-4 h-4" />}
                    title="AI Error Correction"
                    desc="Auto-generated video explanations."
                    iconGradient="from-emerald-50 to-emerald-100"
                    iconColor="text-emerald-600"
                 />
                 <FeatureItem 
                    icon={<Lightbulb className="w-4 h-4" />}
                    title="Memory Tools"
                    desc="Mnemonics & visual association aids."
                    iconGradient="from-emerald-50 to-emerald-100"
                    iconColor="text-emerald-600"
                 />
                 <FeatureItem 
                    icon={<ScanLine className="w-4 h-4" />}
                    title="Snap & Solve"
                    desc="Photo search for problem solving."
                    iconGradient="from-emerald-50 to-emerald-100"
                    iconColor="text-emerald-600"
                 />
                 <FeatureItem 
                    icon={<History className="w-4 h-4" />}
                    title="Learning History"
                    desc="Track personal progress over time."
                    iconGradient="from-emerald-50 to-emerald-100"
                    iconColor="text-emerald-600"
                 />
                 <FeatureItem 
                    icon={<Radio className="w-4 h-4" />}
                    title="Remote Help"
                    desc="Connect with teachers instantly."
                    iconGradient="from-emerald-50 to-emerald-100"
                    iconColor="text-emerald-600"
                 />
              </div>
           </motion.div>

        </div>
      </div>
    </SlideLayout>
  );
};
