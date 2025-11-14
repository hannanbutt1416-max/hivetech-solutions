import { motion, useScroll, useTransform } from 'motion/react';
import { TrendingUp, Zap, Users, Award, Star, ArrowRight, Sparkles, Target, Rocket } from 'lucide-react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AdvancedHeroProps {
  onConsultationClick: () => void;
  animationStyle?: 'particles' | 'waves' | 'gradient' | 'grid' | 'geometric' | 'float';
}

export function AdvancedHero({ 
  onConsultationClick,
  animationStyle = 'particles' 
}: AdvancedHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  // Particle animation
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
    duration: Math.random() * 10 + 10,
  }));

  // Wave animation
  const waves = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    opacity: 0.1 - i * 0.03,
  }));

  // Geometric shapes
  const shapes = [
    { type: 'hexagon', size: 60, x: 10, y: 20, rotation: 0, color: '#FFD700' },
    { type: 'circle', size: 40, x: 85, y: 15, rotation: 0, color: '#FFC000' },
    { type: 'triangle', size: 50, x: 15, y: 70, rotation: 45, color: '#FFD700' },
    { type: 'square', size: 35, x: 80, y: 75, rotation: 30, color: '#FFC000' },
  ];

  const stats = [
    { icon: TrendingUp, value: '+247%', label: 'ROI Increase', color: 'from-[#FFD700] to-[#FFC000]' },
    { icon: Zap, value: '<1s', label: 'Page Load', color: 'from-[#FFC000] to-[#FFD700]' },
    { icon: Users, value: '500+', label: 'Projects Done', color: 'from-[#FFD700] to-[#FFC000]' },
    { icon: Award, value: '98%', label: 'Client Retention', color: 'from-[#FFC000] to-[#FFD700]' },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]"
    >
      {/* Background Animations */}
      <div className="absolute inset-0">
        {/* Particles Animation */}
        {animationStyle === 'particles' && (
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-[#FFD700]"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: particle.size,
                  height: particle.size,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.6, 0],
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
        )}

        {/* Waves Animation */}
        {animationStyle === 'waves' && (
          <div className="absolute inset-0">
            {waves.map((wave) => (
              <motion.div
                key={wave.id}
                className="absolute inset-0"
                style={{ opacity: wave.opacity }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  delay: wave.delay,
                  ease: 'linear',
                }}
              >
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id={`wave-gradient-${wave.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#FFC000" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
                    fill={`url(#wave-gradient-${wave.id})`}
                    animate={{
                      d: [
                        'M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z',
                        'M0,50 Q25,70 50,50 T100,50 L100,100 L0,100 Z',
                        'M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z',
                      ],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </svg>
              </motion.div>
            ))}
          </div>
        )}

        {/* Gradient Animation */}
        {animationStyle === 'gradient' && (
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, #FFD700 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, #FFC000 0%, transparent 50%)',
                'radial-gradient(circle at 0% 100%, #FFD700 0%, transparent 50%)',
                'radial-gradient(circle at 100% 0%, #FFC000 0%, transparent 50%)',
                'radial-gradient(circle at 0% 0%, #FFD700 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )}

        {/* Grid Animation */}
        {animationStyle === 'grid' && (
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )}

        {/* Geometric Shapes */}
        {animationStyle === 'geometric' && (
          <div className="absolute inset-0">
            {shapes.map((shape, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${shape.x}%`,
                  top: `${shape.y}%`,
                  width: shape.size,
                  height: shape.size,
                }}
                animate={{
                  rotate: [shape.rotation, shape.rotation + 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {shape.type === 'hexagon' && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon
                      points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
                      fill={shape.color}
                      opacity="0.2"
                      stroke={shape.color}
                      strokeWidth="2"
                    />
                  </svg>
                )}
                {shape.type === 'circle' && (
                  <div
                    className="w-full h-full rounded-full border-2"
                    style={{ borderColor: shape.color, backgroundColor: `${shape.color}20` }}
                  />
                )}
                {shape.type === 'triangle' && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon
                      points="50 0, 100 100, 0 100"
                      fill={shape.color}
                      opacity="0.2"
                      stroke={shape.color}
                      strokeWidth="2"
                    />
                  </svg>
                )}
                {shape.type === 'square' && (
                  <div
                    className="w-full h-full border-2"
                    style={{ borderColor: shape.color, backgroundColor: `${shape.color}20` }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Floating Elements */}
        {animationStyle === 'float' && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFC000]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#FFD700]/30 glow-yellow"
            >
              <Star className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
              <span className="text-sm text-[#FFD700] font-semibold">Award-Winning Digital Agency</span>
              <Sparkles className="w-4 h-4 text-[#FFC000]" />
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Dominate Your</span>
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#FFD700]"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Digital Market
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-[#808080] max-w-xl leading-relaxed"
              >
                Transform your business with cutting-edge <strong className="text-white">SEO</strong>, lightning-fast <strong className="text-white">web applications</strong>, and intelligent <strong className="text-white">automation</strong>. Join 500+ successful clients.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={onConsultationClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-[#FFD700]/50 transition-all duration-300 glow-yellow flex items-center gap-2"
              >
                <Rocket className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-[#FFD700]/50 transition-all duration-300 flex items-center gap-2"
              >
                <Target className="w-5 h-5" />
                View Portfolio
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-8 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFC000] border-2 border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] font-bold"
                    >
                      ✓
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold">500+ Clients</p>
                  <p className="text-xs text-[#808080]">Worldwide Success</p>
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
                  <p className="text-xs text-[#808080]">127 Google Reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Stats Cards */}
          <div className="relative h-[600px] hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1 + 0.7,
                      duration: 0.6,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.3 },
                    }}
                    className="relative group cursor-pointer"
                    style={{
                      perspective: '1000px',
                      marginTop: index % 2 === 0 ? '0' : '3rem',
                    }}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 rounded-2xl`} />
                    
                    {/* Card */}
                    <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-[#FFD700]/20 hover:shadow-3xl transition-all duration-500 h-full">
                      {/* Top Shine */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                      
                      {/* Icon */}
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7 text-[#1A1A1A]" />
                      </motion.div>
                      
                      {/* Value */}
                      <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      
                      {/* Label */}
                      <div className="text-sm text-white/70 font-medium">
                        {stat.label}
                      </div>

                      {/* Bottom Edge Glow */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.color} opacity-50`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#FFD700]/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-[#FFD700] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
