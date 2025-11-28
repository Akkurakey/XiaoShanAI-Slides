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
      <div className="w-full h-full">
        {/* Content intentionally left blank */}
      </div>
    </SlideLayout>
  );
};
