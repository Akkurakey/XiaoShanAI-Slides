import React from 'react';
import { SlideLayout } from '../SlideLayout';

export const CoreFeatures: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Core Engine Capabilities"
      subtitle="Comprehensive 2D Animation & Visualization Library"
    >
      <div className="w-full h-full flex flex-col items-center justify-center p-8">
        {/* Video Container with Aspect Ratio */}
        <div className="w-full max-w-5xl aspect-video bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden relative">
          
          <video 
            className="w-full h-full object-container"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/CoreFeature.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
        
        <p className="mt-4 text-gray-500 text-sm font-mono">
           Feature Demo: Core Rendering Engine
        </p>
      </div>
    </SlideLayout>
  );
};
