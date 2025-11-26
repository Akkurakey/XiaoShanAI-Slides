import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

// Slides
import { Cover } from './components/slides/Cover';
import { Problem } from './components/slides/Problem';
import { Solution } from './components/slides/Solution';
import { VideoDemo } from './components/slides/VideoDemo';
import { Architecture } from './components/slides/Architecture';
import { Demo } from './components/slides/Demo';
import { Partnerships } from './components/slides/Partnerships';
import { Requirements } from './components/slides/Requirements';
import { Impact } from './components/slides/Impact';
import { Future } from './components/slides/Future';
import { End } from './components/slides/End';

const TOTAL_SLIDES = 11;
const BASE_WIDTH = 1600;
const BASE_HEIGHT = 900;
const MOBILE_BREAKPOINT = 1024;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Hybrid Scaling Engine
  useEffect(() => {
    const handleResize = () => {
      const windowW = window.innerWidth;
      const windowH = window.innerHeight;
      
      const _isMobile = windowW < MOBILE_BREAKPOINT;
      setIsMobile(_isMobile);

      if (_isMobile) {
        // Mobile/Tablet Mode: Native scrolling, no scaling
        setScale(1);
      } else {
        // Desktop Mode: Fit-Contain 16:9 Scaling with Safe Area
        const horizontalPadding = isFullscreen ? 40 : 64; 
        const verticalPadding = isFullscreen ? 30 : 64;
        
        const availableW = windowW - horizontalPadding;
        const availableH = windowH - verticalPadding;

        const scaleW = availableW / BASE_WIDTH;
        const scaleH = availableH / BASE_HEIGHT;

        const newScale = Math.min(scaleW, scaleH);
        setScale(newScale);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    setTimeout(handleResize, 50);

    return () => window.removeEventListener('resize', handleResize);
  }, [isFullscreen]);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, TOTAL_SLIDES - 1));
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isMobile]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isMobile]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const renderSlide = () => {
    const commonProps = { page: currentSlide + 1, total: TOTAL_SLIDES };
    switch(currentSlide) {
      case 0: return <Cover key="cover" {...commonProps} />;
      case 1: return <Problem key="problem" {...commonProps} />;
      case 2: return <Solution key="solution" {...commonProps} />;
      case 3: return <VideoDemo key="videodemo" {...commonProps} />;
      case 4: return <Architecture key="architecture" {...commonProps} />;
      case 5: return <Demo key="demo" {...commonProps} />;
      case 6: return <Partnerships key="partnerships" {...commonProps} />;
      case 7: return <Requirements key="requirements" {...commonProps} />;
      case 8: return <Impact key="impact" {...commonProps} />;
      case 9: return <Future key="future" {...commonProps} />;
      case 10: return <End key="end" {...commonProps} />;
      default: return <Cover key="cover" {...commonProps} />;
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-transparent ${isMobile ? 'overflow-y-auto items-start' : 'overflow-hidden'}`}>
      
      {/* Slide Container */}
      <div 
        style={!isMobile ? {
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          transform: `scale(${scale}) translate3d(0,0,0)`,
          transformOrigin: 'center center',
        } : {
          width: '100%',
          minHeight: '100%',
        }}
        className={`relative transition-transform duration-300 ease-out will-change-transform backface-hidden perspective-1000 ${isMobile ? 'p-0' : 'flex items-center justify-center rounded-2xl shadow-2xl'}`}
      >
        <div className={`w-full h-full relative bg-transparent ${isMobile ? '' : 'rounded-2xl overflow-hidden ring-1 ring-black/5'}`}>
          <AnimatePresence mode="wait">
            {renderSlide()}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Controls - Moved outside scaling container to be viewport-relative */}
      <div className={`fixed z-[9999] ${
        isMobile 
          ? 'bottom-4 right-4 left-auto' 
          : 'bottom-0 left-0 right-0 h-32 flex items-end justify-center pb-8 group pointer-events-none'
      }`}>
         {/* Sensor Area: Invisible layer to catch mouse hover on desktop */}
         {!isMobile && <div className="absolute inset-0 w-full h-full pointer-events-auto"></div>}

         <div className={`
           bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 flex items-center space-x-5 shadow-2xl 
           transition-all duration-500 ease-out origin-bottom
           ${isMobile 
             ? 'scale-90' 
             : 'pointer-events-auto translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 hover:bg-slate-950'
           }
         `}>
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <span className="text-white/90 font-mono text-sm font-medium min-w-[60px] text-center select-none tracking-wider">
              {String(currentSlide + 1).padStart(2, '0')} / {TOTAL_SLIDES}
            </span>

            <button 
              onClick={nextSlide}
              disabled={currentSlide === TOTAL_SLIDES - 1}
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {!isMobile && (
              <>
                <div className="w-px h-5 bg-white/20"></div>
                <button 
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  title="Toggle Fullscreen"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </>
            )}
         </div>
      </div>
    </div>
  );
}
