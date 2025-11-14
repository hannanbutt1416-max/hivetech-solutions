import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface CoverflowItem {
  title: string;
  description: string;
  image: string;
  metric: string;
  label: string;
}

interface CoverflowProps {
  items: CoverflowItem[];
}

export function Coverflow({ items }: CoverflowProps) {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const isActive = diff === 0;
    
    let scale = 1;
    let opacity = 0.4;
    let zIndex = 1;
    let rotateY = 0;
    let translateX = 0;
    let translateZ = 0;

    if (isActive) {
      scale = 1.2;
      opacity = 1;
      zIndex = 10;
      translateZ = 100;
    } else if (Math.abs(diff) === 1) {
      scale = 0.85;
      opacity = 0.7;
      zIndex = 5;
      rotateY = diff > 0 ? -35 : 35;
      translateX = diff * 280;
      translateZ = -50;
    } else if (Math.abs(diff) === 2) {
      scale = 0.7;
      opacity = 0.5;
      zIndex = 2;
      rotateY = diff > 0 ? -45 : 45;
      translateX = diff * 350;
      translateZ = -100;
    } else {
      scale = 0.6;
      opacity = 0.3;
      zIndex = 1;
      rotateY = diff > 0 ? -50 : 50;
      translateX = diff * 400;
      translateZ = -150;
    }

    return {
      scale,
      opacity,
      zIndex,
      rotateY,
      x: translateX,
      z: translateZ,
    };
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '2000px' }}>
        {items.map((item, index) => {
          const style = getCardStyle(index);
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              animate={{
                scale: style.scale,
                opacity: style.opacity,
                zIndex: style.zIndex,
                rotateY: style.rotateY,
                x: style.x,
                z: style.z,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 30,
              }}
              onClick={() => setActiveIndex(index)}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className={`w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white border-4 ${
                  isActive ? 'border-[#FFD700]' : 'border-[#E0E0E0]'
                }`}
                style={{
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                  <motion.div
                    className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] px-4 py-2 rounded-full shadow-lg"
                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="data-font text-2xl text-[#1A1A1A] font-bold">{item.metric}</span>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-[#4A4A4A] mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-[#FFD700]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#E0E0E0]">
                    <p className="text-sm text-[#808080]">{item.label}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-[#FFD700] to-[#FFC000] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 glow-yellow"
        aria-label="Previous"
      >
        <ChevronLeft className="w-7 h-7 text-[#1A1A1A]" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-[#FFD700] to-[#FFC000] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 glow-yellow"
        aria-label="Next"
      >
        <ChevronRight className="w-7 h-7 text-[#1A1A1A]" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? 'bg-[#FFD700] w-8'
                : 'bg-[#808080] hover:bg-[#FFD700]/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
