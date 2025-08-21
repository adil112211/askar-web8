
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedStatisticProps {
  target: number;
  label: string;
  isPlus?: boolean;
  is247?: boolean;
}

const AnimatedStatistic: React.FC<AnimatedStatisticProps> = ({ target, label, isPlus = false, is247 = false }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const duration = 2000; // 2 seconds

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (end - start) + start);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-blue-500">
        {is247 ? '24/7' : count}
        {isPlus && '+'}
      </p>
      <p className="text-slate-600 mt-2">{label}</p>
    </div>
  );
};

export default AnimatedStatistic;
