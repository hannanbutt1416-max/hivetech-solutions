import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  direction = 'left',
  speed = 50,
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  const isHorizontal = direction === 'left' || direction === 'right';
  const isReverse = direction === 'right' || direction === 'down';

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} gap-8`}
        animate={{
          [isHorizontal ? 'x' : 'y']: isReverse ? [0, '50%'] : ['0%', '-50%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        {/* Duplicate children for seamless loop */}
        <div className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} gap-8`}>
          {children}
        </div>
        <div className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} gap-8`}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
