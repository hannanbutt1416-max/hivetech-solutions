import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight, Play, Sparkles, Zap, TrendingUp, Shield, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface PremiumHeroProps {
  onConsultationClick: () => void;
}

export function PremiumHero({ onConsultationClick }: PremiumHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse tracking for interactive effects
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Honeycomb pattern generation
  const honeycombs = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: (i % 8) * 12.5,
    y: Math.floor(i / 8) * 16.66,
    delay: i * 0.05,
  }));

  // Particle system
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  // Floating stats data
  const stats = [
    { icon: TrendingUp, value: '+247%', label: 'ROI Increase', color: '#00F0FF', x: '15%', y: '25%' },
    { icon: Zap, value: '<1s', label: 'Load Time', color: '#FFD700', x: '80%', y: '30%' },
    { icon: Shield, value: '500+', label: 'Projects', color: '#00F0FF', x: '85%', y: '70%' },
    { icon: Star, value: '98%', label: 'Retention', color: '#FFD700', x: '10%', y: '75%' },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0E27]"
      style={{
        background: 'linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #0F1419 100%)',
      }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      {/* Honeycomb Pattern Layer */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="honeycomb" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
              <polygon
                points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" />
        </svg>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              background: particle.id % 2 === 0 ? '#00F0FF' : '#FFD700',
              boxShadow: `0 0 ${particle.size * 2}px ${particle.id % 2 === 0 ? '#00F0FF' : '#FFD700'}`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, transparent 70%)',
          left: '10%',
          top: '20%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.25) 0%, transparent 70%)',
          right: '10%',
          bottom: '20%',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* 3D Data Network Node - Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <motion.div
          className="relative w-full h-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Central Energy Core */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
            style={{
              background: 'radial-gradient(circle, #00F0FF 0%, #FFD700 50%, transparent 70%)',
              boxShadow: '0 0 80px #00F0FF, 0 0 120px #FFD700',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Orbital Rings */}
          {[200, 350, 500].map((size, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
              style={{
                width: size,
                height: size,
                borderColor: i % 2 === 0 ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 215, 0, 0.2)',
                boxShadow: `0 0 20px ${i % 2 === 0 ? 'rgba(0, 240, 255, 0.3)' : 'rgba(255, 215, 0, 0.3)'}`,
              }}
              animate={{
                rotate: i % 2 === 0 ? [0, 360] : [360, 0],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* Orbital Nodes */}
              {Array.from({ length: 6 }).map((_, nodeIndex) => (
                <motion.div
                  key={nodeIndex}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: '50%',
                    top: '0%',
                    marginLeft: '-6px',
                    background: i % 2 === 0 ? '#00F0FF' : '#FFD700',
                    boxShadow: `0 0 10px ${i % 2 === 0 ? '#00F0FF' : '#FFD700'}`,
                    transform: `rotate(${nodeIndex * 60}deg) translateY(-${size / 2}px)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: nodeIndex * 0.2,
                  }}
                />
              ))}
            </motion.div>
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.line
                key={i}
                x1="50%"
                y1="50%"
                x2="50%"
                y2="0%"
                stroke={i % 2 === 0 ? '#00F0FF' : '#FFD700'}
                strokeWidth="1"
                style={{
                  transformOrigin: 'center',
                  transform: `rotate(${i * 45}deg)`,
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Floating Stats Cards */}
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={i}
            className="absolute hidden lg:block"
            style={{
              left: stat.x,
              top: stat.y,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { delay: 1 + i * 0.2, duration: 0.6 },
              scale: { delay: 1 + i * 0.2, duration: 0.6 },
              y: { duration: 3, repeat: Infinity, delay: i * 0.5 },
            }}
          >
            <div
              className="backdrop-blur-xl rounded-2xl p-6 border shadow-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: `${stat.color}40`,
                boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px ${stat.color}40`,
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}40, ${stat.color}20)`,
                    boxShadow: `0 0 20px ${stat.color}60`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </div>
              </div>
              <div className="text-xs text-white/70 font-medium">{stat.label}</div>
            </div>
          </motion.div>
        );
      })}

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text & CTAs */}
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-xl border"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(0, 240, 255, 0.3)',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)',
              }}
            >
              <Sparkles className="w-4 h-4 text-[#00F0FF]" />
              <span className="text-sm font-semibold text-white">The Intelligence Layer for Business Growth</span>
              <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="text-white block mb-2">Algorithmic</span>
                <motion.span
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #00F0FF 0%, #FFD700 100%)',
                    WebkitTextStroke: '1px rgba(0, 240, 255, 0.1)',
                    textShadow: '0 0 80px rgba(0, 240, 255, 0.5), 0 0 40px rgba(255, 215, 0, 0.3)',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  Growth
                </motion.span>
                <span className="text-white block mt-2">for Local Businesses</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
              >
                Premium Web Apps, <span className="text-[#00F0FF] font-semibold">Automated Workflows</span> & <span className="text-[#FFD700] font-semibold">Local SEO Excellence</span>. Faster ROI, Smarter Automation, Measurable Results.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={onConsultationClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                className="group relative px-8 py-4 rounded-xl font-bold text-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFC000 100%)',
                  boxShadow: '0 10px 40px rgba(255, 215, 0, 0.4), 0 0 20px rgba(255, 215, 0, 0.3)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2 text-[#0A0E27]">
                  Start Your Free Audit
                  <motion.div
                    animate={{ x: isHovering ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'center' }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 backdrop-blur-xl transition-all duration-300"
                style={{
                  borderColor: 'rgba(0, 240, 255, 0.5)',
                  color: '#00F0FF',
                  background: 'rgba(255, 255, 255, 0.03)',
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
                }}
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  View Case Studies
                </span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap items-center gap-8 pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="w-12 h-12 rounded-full border-2 border-[#0A0E27] flex items-center justify-center text-[#0A0E27] font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #FFD700, #00F0FF)',
                      }}
                    >
                      ✓
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold">500+ Clients</p>
                  <p className="text-xs text-white/60">Worldwide Success</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold">5.0 Rating</p>
                  <p className="text-xs text-white/60">127 Reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Visual Space */}
          <div className="hidden lg:block relative h-[600px]">
            {/* This space is used by the central 3D network node */}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none" />

      {/* Scan Line Effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-50"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </section>
  );
}
