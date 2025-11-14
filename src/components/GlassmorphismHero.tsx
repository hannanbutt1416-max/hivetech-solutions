import { motion } from 'motion/react';
import { TrendingUp, Zap, Users, Award, Star, ArrowRight } from 'lucide-react';

interface GlassmorphismHeroProps {
  onConsultationClick: () => void;
}

export function GlassmorphismHero({ onConsultationClick }: GlassmorphismHeroProps) {
  const floatingCards = [
    {
      icon: TrendingUp,
      value: '+247%',
      label: 'ROI Increase',
      color: 'from-[#FFD700] to-[#FFC000]',
      delay: 0,
      y: -20,
    },
    {
      icon: Zap,
      value: '<1s',
      label: 'Page Load',
      color: 'from-[#FFC000] to-[#FFD700]',
      delay: 0.2,
      y: 20,
    },
    {
      icon: Users,
      value: '98%',
      label: 'Client Retention',
      color: 'from-[#FFD700] to-[#FFC000]',
      delay: 0.4,
      y: -30,
    },
    {
      icon: Award,
      value: '500+',
      label: 'Projects Done',
      color: 'from-[#FFC000] to-[#FFD700]',
      delay: 0.6,
      y: 10,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFC000]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
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
              <span className="text-sm text-[#FFD700] font-semibold">Award-Winning Agency</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Transform Your</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#FFD700] animate-gradient">
                  Digital Future
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-[#808080] max-w-xl leading-relaxed"
              >
                We build lightning-fast web applications, dominate local SEO rankings, and automate your business workflows with cutting-edge technology.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={onConsultationClick}
                className="group px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-[#FFD700]/50 transition-all duration-300 hover:scale-105 glow-yellow flex items-center gap-2"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-[#FFD700]/50 transition-all duration-300 hover:scale-105">
                View Our Work
              </button>
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
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFC000] border-2 border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold">500+ Clients</p>
                  <p className="text-xs text-[#808080]">Worldwide</p>
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
                  <p className="text-xs text-[#808080]">Google Reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - 3D Floating Glass Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {floatingCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [card.y, card.y - 20, card.y],
                  }}
                  transition={{
                    opacity: { delay: card.delay, duration: 0.6 },
                    scale: { delay: card.delay, duration: 0.6 },
                    y: {
                      delay: card.delay + 0.6,
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  className="absolute"
                  style={{
                    top: `${index * 25}%`,
                    right: `${index % 2 === 0 ? '0' : '20%'}`,
                    transform: `perspective(1000px) rotateY(${index % 2 === 0 ? '-15deg' : '15deg'})`,
                  }}
                >
                  {/* Glass Card */}
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 rounded-2xl`} />
                    
                    {/* Card */}
                    <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-[#FFD700]/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 min-w-[200px]">
                      {/* Top Shine */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                      
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-6 h-6 text-[#1A1A1A]" />
                      </div>
                      
                      {/* Value */}
                      <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                        {card.value}
                      </div>
                      
                      {/* Label */}
                      <div className="text-sm text-white/70 font-medium">
                        {card.label}
                      </div>

                      {/* Bottom Edge Glow */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${card.color} opacity-50`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Center Floating Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{
                opacity: { delay: 0.8, duration: 1 },
                scale: { delay: 0.8, duration: 1 },
                rotate: { delay: 1.8, duration: 20, repeat: Infinity, ease: 'linear' },
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFC000] opacity-20 blur-2xl rounded-full" />
                <div className="absolute inset-4 backdrop-blur-xl bg-white/5 border border-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-12 h-12 text-[#FFD700]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
    </section>
  );
}
