import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroLoaderProps {
  onComplete: () => void;
}

// Spark particle component
const Spark = ({ delay, angle }: { delay: number; angle: number }) => {
  const rad = (angle * Math.PI) / 180;
  const distance = 80 + Math.random() * 40;
  const endX = Math.cos(rad) * distance;
  const endY = Math.sin(rad) * distance;

  return (
    <motion.div
      initial={{
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1
      }}
      animate={{
        x: endX,
        y: endY,
        opacity: 0,
        scale: 0
      }}
      transition={{
        duration: 0.5 + Math.random() * 0.3,
        delay: delay,
        ease: 'easeOut'
      }}
      className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full"
      style={{
        background: `linear-gradient(45deg, #F4CE14, #FFD700, #FFA500)`,
        boxShadow: '0 0 6px #F4CE14, 0 0 12px #FFD700'
      }}
    />
  );
};

export const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [stage, setStage] = useState<'spinner' | 'complete'>('spinner');
  const [sparks, setSparks] = useState<{ id: number; angle: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate sparks continuously
    const sparkInterval = setInterval(() => {
      const newSparks = Array.from({ length: 3 }).map((_, i) => ({
        id: Date.now() + i,
        angle: Math.random() * 360,
        delay: Math.random() * 0.1
      }));
      setSparks(prev => [...prev.slice(-15), ...newSparks]);
    }, 100);

    // Spinner for 1 second then complete
    const spinnerTimer = setTimeout(() => {
      setStage('complete');
      onComplete();
    }, 1000);

    return () => {
      clearTimeout(spinnerTimer);
      clearInterval(sparkInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {stage !== 'complete' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
        >
          {/* Spinner Stage - Rotating blade with sparks */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              rotate: 720,
              opacity: 0,
              scale: 1.1
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut'
            }}
            className="relative w-[100px] h-[100px]"
          >
            {/* Spark particles */}
            {sparks.map(spark => (
              <Spark key={spark.id} angle={spark.angle} delay={spark.delay} />
            ))}

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
