import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { Play, Maximize } from 'lucide-react';

export const VideoDemo: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  // CONFIGURATION: Define video paths explicitly
  const VIDEO_CONFIG = {
    path: "/assets/demo_circle_geometry.mov",
    fallback: "/assets/demo_circle_geometry.mp4"
  };

  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Full Process Demonstration"
      subtitle="Topic: Geometric Properties of a Circle"
    >
      <div className="w-full h-full flex flex-col pb-4">
        {/* Video Placeholder Container */}
        <div className="flex-1 w-full bg-slate-900 rounded-[2rem] overflow-hidden relative shadow-2xl border-4 border-slate-800 group ring-1 ring-white/10 min-h-[300px] lg:min-h-0">
          
          {/* MOV Video Placeholder */}
          <div className="absolute inset-0 bg-black flex items-center justify-center">
             <video 
               className="w-full h-full object-contain" 
               controls 
               poster="/assets/poster_placeholder.png"
             >
               {/* 
                  PLACEHOLDER: 
                  Defined via VIDEO_CONFIG constant above.
               */}
               <source src={VIDEO_CONFIG.path} type="video/quicktime" />
               <source src={VIDEO_CONFIG.fallback} type="video/mp4" />
               <div className="text-white text-center p-10">
                 <p className="text-xl lg:text-2xl font-bold mb-2">Video Placeholder</p>
                 <p className="font-mono text-slate-400 text-xs lg:text-base">{VIDEO_CONFIG.path}</p>
               </div>
             </video>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
};