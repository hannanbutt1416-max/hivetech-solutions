import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Zap, TrendingUp, Award, Target, Rocket } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/parallax';

interface CosmicHeroProps {
  onConsultationClick: () => void;
}

export function CosmicHero({ onConsultationClick }: CosmicHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Slides data - 5 different slides with unique content
  const slidesData = [
    {
      id: 1,
      badge: 'Intelligence Layer for Business',
      headline: 'Algorithmic',
      highlight: 'Growth',
      subheadline: 'for Local Businesses',
      description: 'Premium Web Apps, <span class="text-[#00F0FF] font-semibold">Automated Workflows</span> & <span class="text-[#FFD700] font-semibold">Local SEO Excellence</span>. Measurable ROI, Smart Systems.',
      floatingCards: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
          title: 'Analytics Dashboard',
          metric: '+247% ROI',
          icon: TrendingUp,
          color: '#00F0FF',
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
          title: 'Business Intelligence',
          metric: '10x Growth',
          icon: Zap,
          color: '#FFD700',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
          title: 'AI Automation',
          metric: '98% Success',
          icon: Award,
          color: '#A78BFA',
        },
      ],
    },
    {
      id: 2,
      badge: 'Data-Driven Marketing',
      headline: 'Transform Your',
      highlight: 'Digital Presence',
      subheadline: 'with AI-Powered Tools',
      description: 'Advanced Analytics, <span class="text-[#00F0FF] font-semibold">PPC Campaigns</span> & <span class="text-[#FFD700] font-semibold">Marketing Automation</span>. Drive conversions with intelligent strategies.',
      floatingCards: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
          title: 'Campaign Manager',
          metric: '350% ROAS',
          icon: Rocket,
          color: '#FFD700',
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
          title: 'Conversion Tracking',
          metric: '5x Leads',
          icon: Target,
          color: '#00F0FF',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&h=400&fit=crop',
          title: 'Marketing ROI',
          metric: '+890%',
          icon: TrendingUp,
          color: '#00FF88',
        },
      ],
    },
    {
      id: 3,
      badge: 'AI-Powered Automation',
      headline: 'Automate Your',
      highlight: 'Success',
      subheadline: 'with Smart Systems',
      description: 'Workflow Automation, <span class="text-[#00F0FF] font-semibold">Intelligent Chatbots</span> & <span class="text-[#FFD700] font-semibold">Predictive Analytics</span>. Scale faster with AI-driven solutions.',
      floatingCards: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
          title: 'AI Assistant',
          metric: '24/7 Support',
          icon: Award,
          color: '#A78BFA',
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
          title: 'Workflow Engine',
          metric: '80% Faster',
          icon: Zap,
          color: '#FF6B6B',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
          title: 'Smart Insights',
          metric: '99% Accuracy',
          icon: TrendingUp,
          color: '#00F0FF',
        },
      ],
    },
    {
      id: 4,
      badge: 'SEO & Content Excellence',
      headline: 'Dominate Search',
      highlight: 'Rankings',
      subheadline: 'with Proven Strategies',
      description: 'Comprehensive SEO, <span class="text-[#00F0FF] font-semibold">Content Marketing</span> & <span class="text-[#FFD700] font-semibold">Link Building</span>. Get found by your ideal customers.',
      floatingCards: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&h=400&fit=crop',
          title: 'SEO Ranking',
          metric: 'Page 1',
          icon: Target,
          color: '#00FF88',
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
          title: 'Organic Traffic',
          metric: '+450%',
          icon: TrendingUp,
          color: '#FFD700',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
          title: 'Domain Authority',
          metric: '75+ DA',
          icon: Award,
          color: '#00F0FF',
        },
      ],
    },
    {
      id: 5,
      badge: 'Enterprise Solutions',
      headline: 'Scale Your',
      highlight: 'Enterprise',
      subheadline: 'with Custom Tech',
      description: 'Cloud Infrastructure, <span class="text-[#00F0FF] font-semibold">Custom Integrations</span> & <span class="text-[#FFD700] font-semibold">Dedicated Support</span>. Enterprise-grade solutions for growing teams.',
      floatingCards: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
          title: 'Cloud Platform',
          metric: '99.9% Uptime',
          icon: Rocket,
          color: '#FF6B6B',
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
          title: 'Custom APIs',
          metric: '100+ Integrations',
          icon: Zap,
          color: '#A78BFA',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
          title: 'Support SLA',
          metric: '<1hr Response',
          icon: Award,
          color: '#FFD700',
        },
      ],
    },
  ];

  // Cyber stars data
  const cyberStars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  // Data streams
  const dataStreams = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    length: Math.random() * 200 + 100,
  }));

  // Hexagons
  const hexagons = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 30,
    rotation: Math.random() * 360,
    delay: i * 0.1,
  }));

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, #1e0a3c 0%, #0a0e27 40%, #000000 100%)',
      }}
    >
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={!isMobile ? {
          background: [
            'radial-gradient(circle at 20% 30%, rgba(88, 28, 135, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(30, 64, 175, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, rgba(88, 28, 135, 0.3) 0%, transparent 50%)',
          ],
        } : {}}
        transition={!isMobile ? {
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        } : {}}
      />

      {/* Cyber Stars - Reduced on mobile */}
      <div className="absolute inset-0">
        {cyberStars.slice(0, isMobile ? 20 : 50).map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              background: star.id % 3 === 0 ? '#FFD700' : star.id % 3 === 1 ? '#00F0FF' : '#A78BFA',
              boxShadow: `0 0 ${star.size * 4}px ${star.id % 3 === 0 ? '#FFD700' : star.id % 3 === 1 ? '#00F0FF' : '#A78BFA'}`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0 opacity-20">
        {dataStreams.map((stream) => (
          <motion.div
            key={stream.id}
            className="absolute w-0.5"
            style={{
              left: `${stream.x}%`,
              top: `${stream.y}%`,
              height: stream.length,
              background: 'linear-gradient(180deg, transparent 0%, #00F0FF 50%, transparent 100%)',
              transformOrigin: 'top center',
              transform: `rotate(${stream.rotation}deg)`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Hexagonal Pattern Layer */}
      <div className="absolute inset-0 opacity-10">
        {hexagons.map((hex) => (
          <motion.div
            key={hex.id}
            className="absolute"
            style={{
              left: `${hex.x}%`,
              top: `${hex.y}%`,
              width: hex.size,
              height: hex.size,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: hex.delay,
              ease: 'linear',
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                fill="none"
                stroke="url(#hexGradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="100%" stopColor="#FFD700" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Central Quantum Sphere */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <motion.div
          className="relative w-full h-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Core Sphere */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 240, 255, 0.8) 0%, rgba(255, 215, 0, 0.4) 40%, transparent 70%)',
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Particle Rings */}
          {[1, 2, 3, 4].map((ring) => (
            <motion.div
              key={ring}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                width: ring * 120,
                height: ring * 120,
                borderColor: ring % 2 === 0 ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 215, 0, 0.2)',
              }}
              animate={{
                rotate: ring % 2 === 0 ? [0, 360] : [360, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 15 + ring * 3,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: ring * 0.2,
                },
              }}
            >
              {/* Particles on rings */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: '50%',
                    top: '0%',
                    marginLeft: '-4px',
                    background: ring % 2 === 0 ? '#00F0FF' : '#FFD700',
                    boxShadow: `0 0 10px ${ring % 2 === 0 ? '#00F0FF' : '#FFD700'}`,
                    transform: `rotate(${i * 45}deg) translateY(-${(ring * 120) / 2}px)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1 + ring * 0.2,
                  }}
                />
              ))}
            </motion.div>
          ))}

          {/* Circuit Board Traces */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            {Array.from({ length: 12 }).map((_, i) => (
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
                  transform: `rotate(${i * 30}deg)`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
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

      {/* Main Content with Swiper */}
      <div className="container mx-auto px-4 relative z-10 max-w-7xl w-full">
        <Swiper
          modules={[Parallax, Autoplay]}
          parallax={true}
          speed={1000}
          slidesPerView={1}
          spaceBetween={0}
          watchOverflow={true}
          watchSlidesProgress={true}
          preventInteractionOnTransition={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          loopedSlides={slidesData.length}
          className="cosmic-hero-swiper w-full"
          style={{ 
            minHeight: '500px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id} style={{ width: '100%', height: 'auto' }}>
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] md:min-h-[600px] py-8">{/* Left Column - Text & CTAs with Parallax */}
                <motion.div
                  style={{ opacity }}
                  className="space-y-4"
                >
                  {/* Compact Badge with Parallax */}
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-xl border"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(0, 240, 255, 0.3)',
                      boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)',
                      fontSize: '0.688rem',
                    }}
                    data-swiper-parallax="-100"
                    data-swiper-parallax-opacity="0"
                  >
                    <Sparkles className="w-2.5 h-2.5 text-[#00F0FF]" />
                    <span className="font-semibold text-white">{slide.badge}</span>
                  </div>

                  {/* Compact Headline with Chromatic Aberration Effect and Parallax */}
                  <div className="space-y-2" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                    <h1
                      style={{ 
                        fontSize: '2.625rem',
                        lineHeight: 1.1,
                      }}
                      className="font-bold leading-tight tracking-tight"
                    >
                      <span className="text-white block">{slide.headline}</span>
                      <motion.span
                        className="block relative"
                        style={{
                          background: 'linear-gradient(135deg, #FFD700 0%, #FFC000 50%, #FFD700 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundSize: '200% 200%',
                          filter: 'drop-shadow(0 0 25px rgba(255, 215, 0, 0.5))',
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
                        {/* Chromatic Aberration Effect */}
                        <span className="absolute inset-0" style={{ color: '#00F0FF', transform: 'translate(-0.75px, -0.75px)', opacity: 0.5 }}>
                          {slide.highlight}
                        </span>
                        <span className="absolute inset-0" style={{ color: '#FF00FF', transform: 'translate(0.75px, 0.75px)', opacity: 0.3 }}>
                          {slide.highlight}
                        </span>
                        <span className="relative">{slide.highlight}</span>
                      </motion.span>
                      <span className="text-white block mt-1" style={{ fontSize: '1.875rem' }}>
                        {slide.subheadline}
                      </span>
                    </h1>

                    <p
                      className="text-white/80 max-w-xl leading-relaxed"
                      style={{ fontSize: '0.875rem' }}
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    />
                  </div>

                  {/* Compact CTA Buttons with Parallax */}
                  <div
                    className="flex flex-wrap gap-2.5"
                    data-swiper-parallax="-150"
                    data-swiper-parallax-opacity="0"
                  >
                    <motion.button
                      onClick={onConsultationClick}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-5 py-2.5 rounded-lg font-semibold overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                        boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)',
                        fontSize: '0.813rem',
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-1.5 text-[#0A0E27]">
                        Start Your Free Audit
                        <motion.div animate={{ x: [0, 2, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.div>
                      </span>
                      <motion.div
                        className="absolute inset-0"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 0.3 }}
                        transition={{ duration: 0.4 }}
                        style={{
                          background: 'radial-gradient(circle, white 0%, transparent 70%)',
                        }}
                      />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2.5 rounded-lg font-semibold border backdrop-blur-xl transition-all duration-300"
                      style={{
                        borderColor: 'rgba(0, 240, 255, 0.5)',
                        color: '#00F0FF',
                        background: 'rgba(255, 255, 255, 0.03)',
                        fontSize: '0.813rem',
                      }}
                    >
                      View Case Studies
                    </motion.button>
                  </div>

                  {/* Compact Trust Indicators with Parallax */}
                  <div
                    className="flex flex-wrap items-center gap-5 pt-3"
                    data-swiper-parallax="-100"
                    data-swiper-parallax-opacity="0"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-7 h-7 rounded-full border-2 border-[#0A0E27] flex items-center justify-center text-[#0A0E27] font-bold"
                            style={{
                              background: 'linear-gradient(135deg, #FFD700, #00F0FF)',
                              fontSize: '0.625rem',
                            }}
                          >
                            ✓
                          </div>
                        ))}
                      </div>
                      <div style={{ fontSize: '0.688rem' }}>
                        <p className="text-white font-semibold">500+ Clients</p>
                        <p className="text-white/60">Worldwide</p>
                      </div>
                    </div>

                    <div style={{ fontSize: '0.688rem' }}>
                      <p className="text-[#FFD700] font-bold text-base">★★★★★</p>
                      <p className="text-white/60">5.0 · 127 Reviews</p>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Floating 3D Cards with Parallax */}
                <div className="hidden lg:block relative h-[500px]" data-swiper-parallax="20%">
                  {slide.floatingCards.map((card, idx) => {
                    const IconComponent = card.icon;
                    return (
                      <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 50, rotateY: -20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          rotateY: 0,
                        }}
                        transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8 }}
                        className="absolute"
                        style={{
                          left: idx === 0 ? '0%' : idx === 1 ? '25%' : '50%',
                          top: idx === 0 ? '10%' : idx === 1 ? '30%' : '50%',
                          transformStyle: 'preserve-3d',
                        }}
                        data-swiper-parallax={-100 * (idx + 1)}
                        data-swiper-parallax-opacity="0"
                      >
                        <motion.div
                          animate={{
                            y: [0, -12, 0],
                            rotateX: [0, 2, 0],
                            rotateY: [0, -2, 0],
                          }}
                          transition={{
                            duration: 4 + idx,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="relative w-56 h-40 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl border"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderColor: 'rgba(0, 240, 255, 0.3)',
                            boxShadow: '0 15px 50px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 240, 255, 0.2)',
                          }}
                        >
                          {/* Card Image */}
                          <div className="relative h-24 overflow-hidden">
                            <ImageWithFallback
                              src={card.image}
                              alt={card.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0E27]/80" />
                          </div>

                          {/* Card Content */}
                          <div className="p-3">
                            <h4 className="text-white font-bold mb-1" style={{ fontSize: '0.813rem' }}>{card.title}</h4>
                            <div className="flex items-center justify-between">
                              <span className="text-[#FFD700] font-bold" style={{ fontSize: '1.063rem' }}>{card.metric}</span>
                              <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                              >
                                <IconComponent className="w-4 h-4" style={{ color: card.color }} />
                              </motion.div>
                            </div>
                          </div>

                          {/* Glassmorphism Glow */}
                          <motion.div
                            className="absolute inset-0 pointer-events-none rounded-2xl"
                            style={{
                              background: 'radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.2), transparent 70%)',
                            }}
                            animate={{
                              opacity: [0, 0.5, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: idx * 0.2,
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}