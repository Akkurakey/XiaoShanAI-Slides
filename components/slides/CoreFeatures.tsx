import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { Play, MousePointer, X, Cuboid, Variable, PenTool, Layers, Sparkles, Trash2 } from 'lucide-react';

const AnimationCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  headerColor: string;
  borderColor: string;
  items: string[];
}> = ({ title, icon, headerColor, borderColor, items }) => (
  <div className={`bg-white rounded-xl border-l-4 ${borderColor} shadow-lg p-5 flex flex-col h-full relative overflow-hidden group`}>
    <div className="flex items-center mb-4 relative z-10">
      <div className={`p-2 rounded-lg bg-slate-50 mr-3 ${headerColor} ring-1 ring-slate-100`}>
        {icon}
      </div>
      <h3 className={`font-bold text-lg text-slate-800`}>{title}</h3>
    </div>
    
    <div className="flex-1 space-y-2 relative z-10">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center text-sm font-mono text-slate-600 bg-slate-50/50 px-2 py-1.5 rounded border border-slate-100/50">
          <span className={`w-1.5 h-1.5 rounded-full mr-2 ${headerColor.replace('text-', 'bg-')}`}></span>
          {item}
        </div>
      ))}
    </div>

    {/* Decorative background icon */}
    <div className={`absolute -bottom-4 -right-4 opacity-5 transform rotate-12 scale-[2.5] ${headerColor} transition-transform group-hover:scale-[3]`}>
      {icon}
    </div>
  </div>
);

export const CoreFeatures: React.FC<{ page: number, total: number }> = ({ page, total }) => {
  return (
    <SlideLayout 
      pageNumber={page} 
      totalPages={total} 
      title="Core Engine Capabilities"
      subtitle="Comprehensive 2D Animation & Visualization Library"
    >
      <div className="flex flex-col h-full space-y-6">
        
        {/* Top Section: Animation Lifecycle */}
        <div className="relative bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 shadow-inner overflow-hidden">
           {/* Background Grid Pattern */}
           <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
           
           <div className="flex items-center justify-between mb-6 relative z-10">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                 Animation Lifecycle System
              </h3>
              <div className="h-px bg-slate-200 flex-1 mx-4"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <AnimationCard 
                title="Creation (Appear)"
                icon={<Sparkles className="w-5 h-5" />}
                headerColor="text-emerald-600"
                borderColor="border-emerald-500"
                items={['Write()', 'FadeIn()', 'GrowFromCenter()', 'DrawBorder()', 'SpinInFromNothing()']}
              />
              <AnimationCard 
                title="Emphasis (Highlight)"
                icon={<MousePointer className="w-5 h-5" />}
                headerColor="text-amber-600"
                borderColor="border-amber-500"
                items={['Indicate()', 'FocusOn()', 'Flash()', 'Circumscribe()', 'Wiggle()']}
              />
              <AnimationCard 
                title="Destruction (Disappear)"
                icon={<Trash2 className="w-5 h-5" />}
                headerColor="text-rose-600"
                borderColor="border-rose-500"
                items={['FadeOut()', 'Uncreate()', 'ShrinkToCenter()', 'Restore()', 'Transform()']}
              />
           </div>
        </div>

        {/* Bottom Section: Mathematical Objects (2D Focused) */}
        <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-3 gap-6">
           
           <div className="bg-white rounded-[2rem] border border-slate-200 p-6 shadow-lg flex flex-col group hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                 <Variable className="w-6 h-6"/>
              </div>
              <h4 className="font-bold text-xl text-slate-800 mb-2">LaTeX & Text</h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                 Full rendering engine for complex mathematical formulas, equations, and rich text formatting.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-50">
                 <div className="font-mono text-xs text-blue-600 bg-blue-50/50 px-2 py-1 rounded w-fit">{'MathTex(r"\\sum_{i=0}^n i^2")'}</div>
              </div>
           </div>

           <div className="bg-white rounded-[2rem] border border-slate-200 p-6 shadow-lg flex flex-col group hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                 <Cuboid className="w-6 h-6"/>
              </div>
              <h4 className="font-bold text-xl text-slate-800 mb-2">2D Geometry</h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                 Primitives including Circles, Polygons, NumberLines, Axes, and dynamic Vector Fields.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-50">
                 <div className="font-mono text-xs text-purple-600 bg-purple-50/50 px-2 py-1 rounded w-fit">Circle(radius=2, color=RED)</div>
              </div>
           </div>

           <div className="bg-white rounded-[2rem] border border-slate-200 p-6 shadow-lg flex flex-col group hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                 <PenTool className="w-6 h-6"/>
              </div>
              <h4 className="font-bold text-xl text-slate-800 mb-2">Plotting & Graphs</h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                 Function graphing, Parametric curves, Implicit functions, and dynamic coordinate system updates.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-50">
                 <div className="font-mono text-xs text-indigo-600 bg-indigo-50/50 px-2 py-1 rounded w-fit">Axes().plot(lambda x: x**2)</div>
              </div>
           </div>

        </div>

      </div>
    </SlideLayout>
  );
};