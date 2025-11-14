import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Award, TrendingUp, Users } from 'lucide-react';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gradient: 'from-[#FFD700]/20 via-[#FFD700]/10 to-[#1A1A1A]/20',
    title: 'Innovation',
  },
  {
    src: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gradient: 'from-[#1A1A1A]/20 via-[#FFD700]/10 to-[#2D2D2D]/20',
    title: 'Growth',
  },
  {
    src: 'https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gradient: 'from-[#2D2D2D]/20 via-[#FFD700]/15 to-[#1A1A1A]/25',
    title: 'Success',
  },
];

export function AdvancedHero3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 100,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
      >
        {/* Card Stack */}
        <div className="relative w-[400px] h-[500px]">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % heroImages.length;
            const image = heroImages[index];

            return (
              <motion.div
                key={index}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  rotateY: offset * 15,
                  z: -offset * 80,
                  x: offset * 60,
                  opacity: offset === 0 ? 1 : offset === 1 ? 0.7 : 0.4,
                  scale: 1 - offset * 0.1,
                }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                {/* Card Content - NO BLUR */}
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`} />

                  {/* Card Info */}
                  {offset === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#1A1A1A]/90 to-transparent"
                    >
                      <h3 className="text-white mb-2">{image.title}</h3>
                      <p className="text-white/80 text-sm">
                        Transforming businesses through technology
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Border Glow */}
                {offset === 0 && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#FFD700]/50 glow-yellow pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Floating Badges */}
        <motion.div
          className="absolute -top-8 -right-8 bg-white rounded-xl p-4 shadow-xl border-2 border-[#FFD700]"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformStyle: 'preserve-3d', z: 100 }}
        >
          <Award className="w-8 h-8 text-[#FFD700] mb-2" />
          <div className="data-font text-2xl text-[#1A1A1A]">+247%</div>
          <div className="text-xs text-[#4A4A4A]">ROI Growth</div>
        </motion.div>

        <motion.div
          className="absolute -bottom-8 -left-8 bg-white rounded-xl p-4 shadow-xl border-2 border-[#FFD700]"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          style={{ transformStyle: 'preserve-3d', z: 100 }}
        >
          <Users className="w-8 h-8 text-[#FFD700] mb-2" />
          <div className="data-font text-2xl text-[#1A1A1A]">500+</div>
          <div className="text-xs text-[#4A4A4A]">Happy Clients</div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 -right-16 bg-white rounded-xl p-4 shadow-xl border-2 border-[#FFD700]"
          animate={{
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          style={{ transformStyle: 'preserve-3d', z: 100 }}
        >
          <TrendingUp className="w-8 h-8 text-[#FFD700] mb-2" />
          <div className="data-font text-2xl text-[#1A1A1A]">98%</div>
          <div className="text-xs text-[#4A4A4A]">Retention</div>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#FFD700' : '#1A1A1A',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Geometric Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-32 h-32 text-[#FFD700] opacity-20" viewBox="0 0 100 100">
          <motion.polygon
            points="50,10 90,35 90,65 50,90 10,65 10,35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
        <svg className="absolute bottom-0 right-0 w-40 h-40 text-[#FFD700] opacity-20" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </div>
  );
}
