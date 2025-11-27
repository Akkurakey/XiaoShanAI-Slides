import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { 
  School, Monitor, Tablet, 
  BookOpen, Video, Users, History, Radio, 
  ScanLine, Lightbulb, FileBarChart, PenTool,
  GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';

// Refined Feature Item
// 优化点：
// 1. items-center: 图标和文字垂直居中
// 2. p-2.5: 减少内边距，让高度更紧凑
// 3. mb-0: 去掉多余边距
const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; desc: string; colorClass: string; bgClass: string }> = ({ icon, title, desc, colorClass, bgClass }) => (
  <div className="flex items-center p-2.5 rounded-lg bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group w-full">
    {/* 图标容器：稍微缩小一点尺寸适应紧凑布局 */}
    <div className={`p-2 rounded-lg ${bgClass} ${colorClass} mr-3 shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center`}>
      {icon}
    </div>
    <div className="flex-1 min-w-0"> {/* min-w-0 防止文字撑开容器 */}
      <h4 className="text-sm font-bold text-slate-800 leading-tight mb-0.5 group-hover:text-blue-600 transition-colors truncate">{title}</h4>
      <p className="text-xs text-slate-500 leading-tight font-medium truncate">{desc}</p>
    </div>
  </div>
);

export const UseCases: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Use Cases" 
      subtitle="Bridging the Digital Divide in Real Classrooms"
    >
      {/* 主容器：减少 gap 以防止溢出 */}
      <div className="flex flex-col h-full gap-3 pb-2">
        
        {/* Top: Scenario Context */}
        {/* 优化：减少 padding (p-4) 和图标大小，使顶部区域更扁平，为下方留出空间 */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-l-4 border-l-orange-500 border-y border-r border-slate-200 rounded-r-xl rounded-l-md p-3 flex flex-col md:flex-row items-center shadow-md relative overflow-hidden shrink-0 min-h-[80px]"
        >
           {/* Background Texture */}
           <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-orange-50 to-transparent opacity-50 z-0"></div>

           <div className="bg-orange-100 p-2.5 rounded-xl md:mr-4 mb-2 md:mb-0 text-orange-600 shrink-0 relative z-10 shadow-inner">
              <School className="w-6 h-6" />
           </div>
           <div className="relative z-10 flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-orange-100 text-orange-700">Target Scenario</span>
                <h3 className="text-base font-serif font-bold text-slate-800">Rural Primary School <span className="text-slate-400 font-sans text-xs font-normal ml-1">(Yunnan Region)</span></h3>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-snug max-w-5xl">
                Operating with limited hardware (legacy <span className="font-semibold text-slate-900 bg-orange-50 px-1 rounded">Win7 whiteboards</span>). 
                Students share <span className="font-semibold text-slate-900 bg-orange-50 px-1 rounded">three tablets per class</span> for self-directed learning.
              </p>
           </div>
        </motion.div>

        {/* Bottom: Roles Grid */}
        {/* 使用 flex-1 让这部分占据剩余所有高度 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 min-h-0">
           
           {/* Teacher Side */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 }}
             className="bg-slate-50 border border-slate-200 rounded-2xl p-1 flex flex-col h-full relative group hover:border-blue-300 transition-colors shadow-md overflow-hidden"
           >
              <div className="h-1 w-1/3 bg-blue-500 rounded-b-full mx-auto absolute top-0 left-1/3 z-20 shadow-[0_1px_6px_rgba(59,130,246,0.4)]"></div>

              {/* Header: 更紧凑的 padding */}
              <div className="px-5 py-3 flex items-center justify-between relative z-10 shrink-0">
                 <div className="flex items-center">
                    <div className="w-8 h-8 bg-white border border-blue-100 rounded-lg flex items-center justify-center text-blue-600 shadow-sm mr-3">
                        <PenTool className="w-4 h-4" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 leading-none">Teacher Portal</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Instruction & Management</p>
                    </div>
                 </div>
                 <div className="text-4xl font-black text-slate-100 absolute top-2 right-4 -z-10 select-none">01</div>
              </div>

              {/* List: 使用 flex-1 和 justify-between 自动分配垂直空间，充满卡片 */}
              <div className="flex-1 px-4 pb-4 flex flex-col justify-between gap-2 overflow-y-auto">
                 <FeatureItem 
                    icon={<BookOpen className="w-3.5 h-3.5" />}
                    title="Lesson Planning"
                    desc="Tools for creating lesson plans efficiently."
                    colorClass="text-blue-600"
                    bgClass="bg-blue-50"
                 />
                 <FeatureItem 
                    icon={<Video className="w-3.5 h-3.5" />}
                    title="Batch Video Creation"
                    desc="Bulk production of concept videos."
                    colorClass="text-blue-600"
                    bgClass="bg-blue-50"
                 />
                 <FeatureItem 
                    icon={<Users className="w-3.5 h-3.5" />}
                    title="Student Management"
                    desc="Track usage duration & frequency."
                    colorClass="text-blue-600"
                    bgClass="bg-blue-50"
                 />
                 <FeatureItem 
                    icon={<History className="w-3.5 h-3.5" />}
                    title="History Logs"
                    desc="Manage class activity history."
                    colorClass="text-blue-600"
                    bgClass="bg-blue-50"
                 />
                 <FeatureItem 
                    icon={<Radio className="w-3.5 h-3.5" />}
                    title="Remote Guidance"
                    desc="Personalized 1-on-1 video connections."
                    colorClass="text-blue-600"
                    bgClass="bg-blue-50"
                 />
                 {/* 加一个空的或者占位，如果只有5个显得不平衡，这里保留5个让布局更宽松，或者你可以复制一个凑6个 */}
                  <FeatureItem 
                    icon={<Monitor className="w-3.5 h-3.5" />}
                    title="Screen Sharing"
                    desc="Cast tablet content to whiteboard."
                    colorClass="text-blue-600"
                    bgClass="bg-blue-50"
                 />
              </div>
           </motion.div>

           {/* Student Side */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-slate-50 border border-slate-200 rounded-2xl p-1 flex flex-col h-full relative group hover:border-emerald-300 transition-colors shadow-md overflow-hidden"
           >
              <div className="h-1 w-1/3 bg-emerald-500 rounded-b-full mx-auto absolute top-0 left-1/3 z-20 shadow-[0_1px_6px_rgba(16,185,129,0.4)]"></div>

              <div className="px-5 py-3 flex items-center justify-between relative z-10 shrink-0">
                 <div className="flex items-center">
                    <div className="w-8 h-8 bg-white border border-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shadow-sm mr-3">
                        <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 leading-none">Student Portal</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Learning & Practice</p>
                    </div>
                 </div>
                 <div className="text-4xl font-black text-slate-100 absolute top-2 right-4 -z-10 select-none">02</div>
              </div>

              {/* List: 同样使用 justify-between */}
              <div className="flex-1 px-4 pb-4 flex flex-col justify-between gap-2 overflow-y-auto">
                 <FeatureItem 
                    icon={<FileBarChart className="w-3.5 h-3.5" />}
                    title="Exam Analysis"
                    desc="Import and analyze daily exam results."
                    colorClass="text-emerald-600"
                    bgClass="bg-emerald-50"
                 />
                 <FeatureItem 
                    icon={<Video className="w-3.5 h-3.5" />}
                    title="AI Error Correction"
                    desc="AI video explanations for mistakes."
                    colorClass="text-emerald-600"
                    bgClass="bg-emerald-50"
                 />
                 <FeatureItem 
                    icon={<Lightbulb className="w-3.5 h-3.5" />}
                    title="AI Methodologies"
                    desc="Mnemonics & Visual Memory tools."
                    colorClass="text-emerald-600"
                    bgClass="bg-emerald-50"
                 />
                 <FeatureItem 
                    icon={<ScanLine className="w-3.5 h-3.5" />}
                    title="Snap & Solve"
                    desc="Photo-based problem solving with AI."
                    colorClass="text-emerald-600"
                    bgClass="bg-emerald-50"
                 />
                 <FeatureItem 
                    icon={<History className="w-3.5 h-3.5" />}
                    title="History Logs"
                    desc="Manage personal learning history."
                    colorClass="text-emerald-600"
                    bgClass="bg-emerald-50"
                 />
                 <FeatureItem 
                    icon={<Radio className="w-3.5 h-3.5" />}
                    title="Remote Help"
                    desc="Connect remotely with teachers."
                    colorClass="text-emerald-600"
                    bgClass="bg-emerald-50"
                 />
              </div>
           </motion.div>

        </div>
      </div>
    </SlideLayout>
  );
};