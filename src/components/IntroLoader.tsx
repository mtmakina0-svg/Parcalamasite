import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [stage, setStage] = useState<'spinner' | 'complete'>('spinner');

  useEffect(() => {
    // Spinner for 3 seconds then complete
    const spinnerTimer = setTimeout(() => {
      setStage('complete');
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(spinnerTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {stage !== 'complete' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
        >
          {/* Spinner Stage - Only rotating blade */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ 
              rotate: 1080,
              opacity: 0,
              scale: 1.2
            }}
            transition={{ 
              duration: 3,
              ease: 'linear'
            }}
            className="relative w-[100px] h-[100px]"
          >
            {/* Circular Blade Shape */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.2))'
              }}
            >
              <defs>
                <radialGradient id="bladeGradient">
                  <stop offset="0%" stopColor="#666666" />
                  <stop offset="50%" stopColor="#333333" />
                  <stop offset="100%" stopColor="#555555" />
                </radialGradient>
              </defs>
              
              {/* Main circular blade disc */}
              <circle cx="50" cy="50" r="45" fill="url(#bladeGradient)" />
              
              {/* Blade teeth - small triangular cuts around the edge */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24;
                const rad = (angle * Math.PI) / 180;
                const x1 = 50 + Math.cos(rad) * 45;
                const y1 = 50 + Math.sin(rad) * 45;
                const x2 = 50 + Math.cos(rad) * 38;
                const y2 = 50 + Math.sin(rad) * 38;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#F4CE14"
                    strokeWidth="1.5"
                  />
                );
              })}
              
              {/* Center mounting circles */}
              <circle cx="50" cy="50" r="20" fill="#444444" />
              <circle cx="50" cy="50" r="15" fill="#666666" />
              <circle cx="50" cy="50" r="8" fill="#222222" />
              
              {/* Mounting holes around center */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 50 + Math.cos(rad) * 25;
                const y = 50 + Math.sin(rad) * 25;
                return <circle key={i} cx={x} cy={y} r="3" fill="#222222" />;
              })}
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
