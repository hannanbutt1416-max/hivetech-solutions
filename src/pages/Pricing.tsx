import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckCircle2, X, Zap, Rocket, Crown, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionContainer } from '../components/SectionContainer';
import { ConsultationModal } from '../components/ConsultationModal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const plans = [
    {
      name: 'Growth',
      tagline: 'For Growing Businesses',
      icon: Zap,
      price: { monthly: 2500, yearly: 2250 },
      description: 'Perfect for local businesses ready to scale',
      features: [
        'Local SEO optimization',
        'Google My Business management',
        'Monthly performance reports',
        'Technical SEO audits',
        'Conversion tracking setup',
        'Email support (24h response)',
        'Quarterly strategy calls',
      ],
      notIncluded: [
        'Custom automation workflows',
        'Web application development',
        'Dedicated account manager',
      ],
      recommended: false,
      color: 'from-[#808080] to-[#666666]',
      glowColor: '#808080',
    },
    {
      name: 'Automation',
      tagline: 'Most Popular',
      icon: Rocket,
      price: { monthly: 4500, yearly: 4050 },
      description: 'Workflow automation + marketing integration',
      features: [
        'Everything in Growth',
        'Custom workflow automation',
        'CRM integration',
        'Marketing automation',
        'Priority support (4h response)',
        'Bi-weekly strategy calls',
        'Custom reporting dashboards',
        'API integrations',
      ],
      notIncluded: [
        'Custom web application',
        'White-glove onboarding',
      ],
      recommended: true,
      color: 'from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)]',
      glowColor: '#FFD700',
    },
    {
      name: 'Platform',
      tagline: 'For Enterprises',
      icon: Crown,
      price: 'Custom',
      description: 'Custom SaaS + comprehensive digital ecosystem',
      features: [
        'Everything in Automation',
        'Custom web application',
        'Scalable cloud infrastructure',
        'Advanced analytics',
        'Dedicated account manager',
        'White-glove onboarding',
        'Weekly strategy calls',
        'Priority bug fixes',
        'Custom feature development',
      ],
      notIncluded: [],
      recommended: false,
      color: 'from-[#1A1A1A] to-[#2D2D2D]',
      glowColor: '#FFFFFF',
    },
  ];

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), ACH transfers, and wire transfers for enterprise plans. All payments are processed securely through Stripe.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes! You can cancel your subscription at any time with no cancellation fees. Your service will continue until the end of your current billing period.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for monthly plans. If you are not satisfied within the first 30 days, we will provide a full refund, no questions asked.',
    },
    {
      question: 'What happens after I subscribe?',
      answer: 'Within 24 hours of subscribing, you will receive an onboarding email with access to our client portal. We will schedule a kickoff call to understand your goals and begin implementation immediately.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle.',
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom enterprise pricing for organizations with unique needs or high-volume requirements. Contact us to discuss a tailored solution.',
    },
  ];

  return (
    <>
      <ConsultationModal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} />

      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A]">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
          
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)' }}
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
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #FFC000 0%, transparent 70%)' }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="py-16 relative">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[var(--accent-yellow)]/20 to-[var(--accent-yellow-bright)]/20 border border-[var(--accent-yellow)] rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-[var(--accent-yellow)]" />
                <span className="text-[var(--accent-yellow)] font-semibold text-sm uppercase tracking-wide">
                  Transparent Pricing
                </span>
              </motion.div>
              
              <h1 className="mb-6 text-white">
                Choose Your Growth Plan
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Flexible pricing designed to scale with your business. No hidden fees, no surprises.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative w-16 h-8 bg-[#2D2D2D] rounded-full border border-[var(--accent-yellow)]/30 transition-colors"
                >
                  <motion.div
                    className="absolute top-1 w-6 h-6 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] rounded-full"
                    animate={{
                      left: billingPeriod === 'monthly' ? '4px' : 'calc(100% - 28px)',
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
                <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-500'}`}>
                  Yearly
                  <span className="ml-2 px-2 py-0.5 bg-[var(--accent-yellow)]/20 text-[var(--accent-yellow)] text-xs rounded-full">
                    Save 10%
                  </span>
                </span>
              </div>
            </motion.div>
          </SectionContainer>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 relative">
          <SectionContainer>
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {plans.map((plan, index) => {
                const IconComponent = plan.icon;
                const isRecommended = plan.recommended;
                const price = typeof plan.price === 'object' ? plan.price[billingPeriod] : plan.price;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                    style={{
                      transform: isRecommended ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    {/* Glow Effect */}
                    {isRecommended && (
                      <div
                        className="absolute -inset-1 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at center, ${plan.glowColor}, transparent 70%)`,
                        }}
                      />
                    )}

                    {/* Card */}
                    <div
                      className={`relative h-full rounded-3xl border-2 overflow-hidden ${
                        isRecommended
                          ? 'border-[var(--accent-yellow)] bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]'
                          : 'border-[#2D2D2D] bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F]'
                      }`}
                      style={{
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {/* Recommended Badge */}
                      {isRecommended && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)]" />
                      )}

                      <div className="p-8 relative z-10">
                        {/* Icon & Title */}
                        <div className="mb-6">
                          {isRecommended && (
                            <div className="inline-block px-3 py-1 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] text-[var(--bg-dark)] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                              {plan.tagline}
                            </div>
                          )}
                          
                          <div className="flex items-center gap-4 mb-3">
                            <div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-2xl`}
                              style={{
                                boxShadow: isRecommended ? `0 0 30px ${plan.glowColor}40` : 'none',
                              }}
                            >
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                              {!isRecommended && (
                                <p className="text-xs text-gray-500 uppercase tracking-wider">{plan.tagline}</p>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-gray-400 text-sm">{plan.description}</p>
                        </div>

                        {/* Price */}
                        <div className="mb-8 pb-8 border-b border-[#2D2D2D]">
                          {typeof price === 'number' ? (
                            <>
                              <div className="flex items-baseline gap-2">
                                <span
                                  className={`data-font font-black text-5xl ${plan.name === 'Growth' ? 'text-white' : ''}`}
                                  style={
                                    plan.name === 'Growth'
                                      ? undefined
                                      : {
                                          background: `linear-gradient(135deg, ${plan.glowColor}, ${plan.glowColor}CC)`,
                                          WebkitBackgroundClip: 'text',
                                          WebkitTextFillColor: 'transparent',
                                          backgroundClip: 'text',
                                        }
                                  }
                                >
                                  ${price.toLocaleString()}
                                </span>
                                <span className="text-gray-500 text-lg">
                                  /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
                                </span>
                              </div>
                              {billingPeriod === 'yearly' && (
                                <p className="text-xs text-gray-500 mt-2">
                                  Billed annually at ${(price * 12).toLocaleString()}
                                </p>
                              )}
                            </>
                          ) : (
                            <div className="data-font font-black text-5xl text-white">
                              {price}
                            </div>
                          )}
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-8">
                          {plan.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                                isRecommended
                                  ? 'bg-gradient-to-br from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)]'
                                  : 'bg-[#2D2D2D]'
                              }`}>
                                <CheckCircle2 className={`w-3 h-3 ${
                                  isRecommended ? 'text-[var(--bg-dark)]' : 'text-gray-400'
                                }`} />
                              </div>
                              <span className="text-sm text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                          
                          {plan.notIncluded.map((feature, idx) => (
                            <div key={`not-${idx}`} className="flex items-start gap-3 opacity-40">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2D2D2D] flex items-center justify-center mt-0.5">
                                <X className="w-3 h-3 text-gray-600" />
                              </div>
                              <span className="text-sm text-gray-500">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button
                          onClick={() => setIsConsultationModalOpen(true)}
                          className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                            isRecommended
                              ? 'bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] text-[var(--bg-dark)] hover:shadow-2xl ring-2 ring-[var(--accent-yellow)] ring-offset-2 ring-offset-[#0A0A0A]'
                              : 'bg-[#2D2D2D] text-white hover:bg-[#3D3D3D] border border-[#3D3D3D]'
                          }`}
                          style={{
                            boxShadow: isRecommended ? `0 10px 40px ${plan.glowColor}40` : 'none',
                          }}
                        >
                          <span>Get Started</span>
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>

                        {typeof price === 'number' && (
                          <p className="text-center text-xs text-gray-500 mt-4">
                            No credit card required • Cancel anytime
                          </p>
                        )}
                      </div>

                      {/* Accent Lines */}
                      {isRecommended && (
                        <>
                          <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-[var(--accent-yellow)]/20 via-transparent to-transparent" />
                          <div className="absolute top-0 right-8 w-px h-full bg-gradient-to-b from-[var(--accent-yellow)]/20 via-transparent to-transparent" />
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </SectionContainer>
        </section>

        {/* Features Comparison */}
        <section className="py-20 relative">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="mb-4 text-white">Enterprise-Grade Features</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                All plans include our core features. Upgrade as you grow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: '99.9% Uptime', description: 'Guaranteed reliability' },
                { title: 'SSL Security', description: 'Bank-level encryption' },
                { title: '24/7 Monitoring', description: 'Real-time alerts' },
                { title: 'Daily Backups', description: 'Automatic data protection' },
                { title: 'CDN Hosting', description: 'Lightning-fast delivery' },
                { title: 'API Access', description: 'Full integration support' },
                { title: 'White Label', description: 'Your brand, our tech' },
                { title: 'GDPR Compliant', description: 'Privacy first' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#2D2D2D] hover:border-[var(--accent-yellow)]/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-[var(--bg-dark)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </section>

        {/* FAQs */}
        <section className="py-20 relative">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400">Got questions? We've got answers.</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-[#2D2D2D] rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-white hover:text-[var(--accent-yellow)] transition-colors py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </SectionContainer>
        </section>

        {/* Final CTA */}
        <section className="py-20 relative">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-[var(--accent-yellow)]"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A]">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 215, 0, 0.15) 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              <div className="relative z-10 p-12 text-center">
                <h2 className="mb-6 text-white">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join hundreds of businesses already growing with Hive Tech Solutions.
                  Start your free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setIsConsultationModalOpen(true)}
                    className="px-8 py-4 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] text-[var(--bg-dark)] rounded-xl font-semibold hover:shadow-2xl ring-2 ring-[var(--accent-yellow)] ring-offset-2 ring-offset-[#0A0A0A] transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                    style={{
                      boxShadow: '0 10px 40px rgba(255, 215, 0, 0.3)',
                    }}
                  >
                    <span>Schedule Free Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    to="/work"
                    className="px-8 py-4 bg-transparent border-2 border-[var(--accent-yellow)] text-[var(--accent-yellow)] rounded-xl hover:bg-[var(--accent-yellow)]/10 transition-all duration-200 font-semibold inline-flex items-center justify-center gap-2"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </motion.div>
          </SectionContainer>
        </section>
      </main>
    </>
  );
}