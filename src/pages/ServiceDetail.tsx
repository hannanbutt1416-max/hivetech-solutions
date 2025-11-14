import { motion } from 'motion/react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Download, Star, TrendingUp, Zap, Target, Users } from 'lucide-react';
import { ServiceCostEstimator } from '../components/ServiceCostEstimator';
import { SectionContainer } from '../components/SectionContainer';
import { ProgressTracker } from '../components/ProgressTracker';
import { ConsultationModal } from '../components/ConsultationModal';

const serviceData: Record<string, any> = {
  'local-seo': {
    title: 'Local SEO',
    tagline: 'Dominate Your Local Market',
    description: 'Our comprehensive local SEO strategies help businesses rank higher in local search results, attract more customers, and increase revenue.',
    benefits: [
      'Increase visibility in Google Map Pack',
      'Rank for high-intent local keywords',
      'Build authority through local citations',
      'Manage and improve online reputation',
      'Drive more foot traffic to physical locations',
    ],
    process: [
      { step: 'Audit', description: 'Comprehensive analysis of your current local presence', icon: Target },
      { step: 'Optimize', description: 'GMB profile optimization and on-page SEO', icon: Zap },
      { step: 'Build', description: 'Citation building and local link acquisition', icon: TrendingUp },
      { step: 'Monitor', description: 'Ongoing tracking and reputation management', icon: Users },
    ],
    caseStudy: {
      client: 'Local Dental Practice',
      metric: '+247%',
      description: 'Increased appointment bookings by 247% in 6 months',
    },
  },
  'technical-seo': {
    title: 'Technical SEO',
    tagline: 'Performance Meets Perfection',
    description: 'Optimize your website\'s technical foundation for maximum search engine visibility and lightning-fast user experience.',
    benefits: [
      'Achieve perfect Core Web Vitals scores',
      'Improve crawlability and indexation',
      'Implement structured data markup',
      'Optimize for mobile-first indexing',
      'Enhance security and HTTPS',
    ],
    process: [
      { step: 'Technical Audit', description: 'Deep dive into site architecture and performance', icon: Target },
      { step: 'Implementation', description: 'Fix technical issues and optimize infrastructure', icon: Zap },
      { step: 'Schema Setup', description: 'Implement rich snippets and structured data', icon: TrendingUp },
      { step: 'Monitoring', description: 'Continuous performance tracking and optimization', icon: Users },
    ],
    caseStudy: {
      client: 'E-commerce Store',
      metric: '< 0.8s',
      description: 'Reduced page load time from 3.2s to 0.8s',
    },
  },
  'webapps': {
    title: 'Web Applications',
    tagline: 'Custom Solutions for Unique Challenges',
    description: 'Tailored web applications that solve your specific business problems and streamline operations.',
    benefits: [
      'Custom functionality designed for your workflow',
      'Scalable architecture for future growth',
      'Seamless integration with existing systems',
      'Mobile-responsive across all devices',
      'Ongoing support and maintenance',
    ],
    process: [
      { step: 'Discovery', description: 'Understanding your requirements and goals', icon: Target },
      { step: 'Design', description: 'UI/UX design and technical architecture', icon: Zap },
      { step: 'Development', description: 'Agile development with regular updates', icon: TrendingUp },
      { step: 'Deploy', description: 'Launch and ongoing optimization', icon: Users },
    ],
    caseStudy: {
      client: 'Manufacturing Company',
      metric: '3.2x',
      description: 'Increased operational efficiency by 320%',
    },
  },
  'automations': {
    title: 'Workflow Automation',
    tagline: 'Work Smarter, Not Harder',
    description: 'Eliminate repetitive tasks and streamline your business processes with intelligent automation workflows.',
    benefits: [
      'Save 20-40 hours per week on manual tasks',
      'Reduce human error and improve accuracy',
      'Scale operations without adding headcount',
      'Improve team productivity and morale',
      'Real-time data syncing across platforms',
    ],
    process: [
      { step: 'Process Mapping', description: 'Identify automation opportunities', icon: Target },
      { step: 'Workflow Design', description: 'Design custom automation sequences', icon: Zap },
      { step: 'Integration', description: 'Connect your tools and systems', icon: TrendingUp },
      { step: 'Optimization', description: 'Monitor and refine workflows', icon: Users },
    ],
    caseStudy: {
      client: 'Digital Agency',
      metric: '30hrs',
      description: 'Saved 30 hours per week through automation',
    },
  },
  'cro': {
    title: 'Conversion Rate Optimization',
    tagline: 'Turn Traffic Into Revenue',
    description: 'Data-driven optimization strategies that improve conversion rates and maximize ROI from existing traffic.',
    benefits: [
      'Increase revenue without more traffic',
      'Improve user experience and satisfaction',
      'Data-driven decision making',
      'Continuous testing and improvement',
      'Better understanding of customer behavior',
    ],
    process: [
      { step: 'Analysis', description: 'User behavior analysis and funnel mapping', icon: Target },
      { step: 'Hypothesis', description: 'Identify optimization opportunities', icon: Zap },
      { step: 'Testing', description: 'A/B testing and experimentation', icon: TrendingUp },
      { step: 'Implementation', description: 'Deploy winning variations', icon: Users },
    ],
    caseStudy: {
      client: 'SaaS Startup',
      metric: '+42%',
      description: 'Improved conversion rate by 42% in 90 days',
    },
  },
  'saas': {
    title: 'SaaS Platforms',
    tagline: 'Build Your Software Empire',
    description: 'Complete SaaS platform development from concept to launch, with scalable infrastructure and recurring revenue models.',
    benefits: [
      'Multi-tenant architecture',
      'Subscription and billing management',
      'User authentication and permissions',
      'Analytics and reporting dashboards',
      'API development for integrations',
    ],
    process: [
      { step: 'Strategy', description: 'Define product vision and roadmap', icon: Target },
      { step: 'MVP Development', description: 'Build core features quickly', icon: Zap },
      { step: 'Scale', description: 'Infrastructure and feature expansion', icon: TrendingUp },
      { step: 'Grow', description: 'Ongoing feature development', icon: Users },
    ],
    caseStudy: {
      client: 'Tech Startup',
      metric: '99.9%',
      description: 'Maintained 99.9% uptime with 10,000+ users',
    },
  },
  'gmb': {
    title: 'Google My Business Optimization',
    tagline: 'Own Your Local Presence',
    description: 'Complete Google Business Profile optimization to maximize visibility in local search and Google Maps.',
    benefits: [
      'Increased visibility in map pack',
      'More phone calls and direction requests',
      'Improved review quantity and quality',
      'Better engagement with posts and Q&A',
      'Detailed insights and analytics',
    ],
    process: [
      { step: 'Claim & Verify', description: 'Ensure full control of your profile', icon: Target },
      { step: 'Optimize', description: 'Complete and enhance all profile sections', icon: Zap },
      { step: 'Engage', description: 'Regular posts and customer interactions', icon: TrendingUp },
      { step: 'Monitor', description: 'Track performance and respond to reviews', icon: Users },
    ],
    caseStudy: {
      client: 'Restaurant Group',
      metric: '+156%',
      description: 'Increased profile views by 156% in 4 months',
    },
  },
  'process': {
    title: 'Process Optimization',
    tagline: 'Efficiency Through Intelligence',
    description: 'Identify bottlenecks, streamline operations, and optimize business processes for maximum efficiency.',
    benefits: [
      'Reduce operational costs',
      'Improve team productivity',
      'Eliminate redundant tasks',
      'Better resource allocation',
      'Scalable systems and processes',
    ],
    process: [
      { step: 'Assessment', description: 'Map current processes and workflows', icon: Target },
      { step: 'Analysis', description: 'Identify inefficiencies and bottlenecks', icon: Zap },
      { step: 'Redesign', description: 'Optimize and automate workflows', icon: TrendingUp },
      { step: 'Implementation', description: 'Deploy and train team', icon: Users },
    ],
    caseStudy: {
      client: 'Professional Services Firm',
      metric: '85%',
      description: 'Improved operational efficiency by 85%',
    },
  },
  'call-center-inbound': {
    title: 'Inbound Call Center Services',
    tagline: '24/7 Customer Support Excellence',
    description: 'Professional inbound call center services that enhance customer satisfaction and drive business growth with expert handling of customer inquiries.',
    benefits: [
      '24/7 multilingual customer support',
      'Advanced call routing and IVR systems',
      'Real-time performance analytics',
      'Seamless CRM integration',
      'Improved customer satisfaction scores',
    ],
    process: [
      { step: 'Setup', description: 'Custom call scripts and workflow design', icon: Target },
      { step: 'Training', description: 'Comprehensive agent training program', icon: Zap },
      { step: 'Launch', description: 'Gradual rollout with quality monitoring', icon: TrendingUp },
      { step: 'Optimize', description: 'Continuous improvement and reporting', icon: Users },
    ],
    caseStudy: {
      client: 'E-commerce Business',
      metric: '95%',
      description: 'Achieved 95% customer satisfaction rating',
    },
  },
  'call-center-outbound': {
    title: 'Outbound Call Center Services',
    tagline: 'Drive Sales & Generate Leads',
    description: 'Strategic outbound calling services designed to generate qualified leads, drive sales, and maximize your revenue potential.',
    benefits: [
      'Targeted lead generation campaigns',
      'Professional sales team training',
      'Advanced dialing technology',
      'Detailed performance tracking',
      'Appointment setting and follow-ups',
    ],
    process: [
      { step: 'Strategy', description: 'Define target audience and messaging', icon: Target },
      { step: 'Build', description: 'Create call lists and scripts', icon: Zap },
      { step: 'Execute', description: 'Launch campaigns with quality assurance', icon: TrendingUp },
      { step: 'Refine', description: 'Optimize based on results and feedback', icon: Users },
    ],
    caseStudy: {
      client: 'B2B Service Provider',
      metric: '+185%',
      description: 'Increased qualified leads by 185% in 3 months',
    },
  },
};

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="mb-4">Service Not Found</h1>
          <Link to="/services" className="text-[var(--accent-yellow)] hover:text-[var(--accent-yellow-bright)]">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <ServiceCostEstimator isOpen={isEstimatorOpen} onClose={() => setIsEstimatorOpen(false)} />
      <ConsultationModal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} />
      <ProgressTracker />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section id="hero" className="py-12 bg-gradient-to-br from-white via-[#F5F5F5] to-white">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-6 py-2 bg-gradient-to-r from-[var(--accent-yellow)]/10 to-[var(--accent-yellow-bright)]/10 border-2 border-[var(--accent-yellow)] rounded-full mb-6"
              >
                <span className="text-[var(--accent-yellow)] font-semibold text-sm uppercase tracking-wide">{service.title}</span>
              </motion.div>
              <h1 className="mb-6 text-[var(--text-primary)]">{service.tagline}</h1>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
            </motion.div>
          </SectionContainer>
        </section>

        {/* Case Study Banner */}
        <section className="py-8 bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] border-y-4 border-[var(--accent-yellow)]">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-[var(--bg-dark)]" />
                </div>
                <div>
                  <div className="text-sm text-[var(--accent-yellow)] mb-1 font-semibold">Featured Case Study</div>
                  <div className="text-xl text-white font-semibold">{service.caseStudy.client}</div>
                  <div className="text-[#D3D3D3] text-sm">{service.caseStudy.description}</div>
                </div>
              </div>
              <div className="data-font text-6xl text-gradient-yellow font-extrabold">
                {service.caseStudy.metric}
              </div>
            </motion.div>
          </SectionContainer>
        </section>

        {/* Benefits + CTA Card */}
        <section id="benefits" className="py-20 bg-white">
          <SectionContainer>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Benefits - 2 columns */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-4">Key Benefits</h2>
                  <p className="text-lg text-[var(--text-secondary)] mb-8">
                    Discover how our {service.title.toLowerCase()} services can transform your business and drive measurable results.
                  </p>
                  <div className="space-y-4">
                    {service.benefits.map((benefit: string, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-5 rounded-xl hover:bg-[var(--bg-surface)] transition-all duration-200 border border-transparent hover:border-[var(--accent-yellow)] group"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[var(--bg-dark)]" />
                        </div>
                        <span className="text-[var(--text-secondary)] font-medium group-hover:text-[var(--text-primary)] transition-colors">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* CTA Card - 1 column */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="sticky top-32 p-8 rounded-2xl border-2 border-[var(--accent-yellow)] bg-gradient-to-br from-white to-[var(--bg-surface)] shadow-xl"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[var(--accent-yellow)] text-[var(--accent-yellow)]" />
                    ))}
                    <span className="text-sm text-[var(--text-muted)] ml-2">(4.9/5 rating)</span>
                  </div>
                  <h3 className="mb-4">Ready to Get Started?</h3>
                  <p className="text-[var(--text-secondary)] mb-6 text-sm">
                    Get a personalized quote and free consultation to discuss how we can help your business grow.
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => setIsConsultationModalOpen(true)}
                      className="w-full px-6 py-4 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] text-[var(--bg-dark)] rounded-xl font-semibold hover:shadow-lg ring-2 ring-[var(--accent-yellow)] ring-offset-2 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setIsEstimatorOpen(true)}
                      className="w-full px-6 py-3 bg-white border-2 border-[var(--accent-yellow)] text-[var(--text-primary)] rounded-xl hover:bg-[var(--accent-yellow)]/5 transition-all duration-200 font-semibold flex items-center justify-center gap-2"
                    >
                      Get Instant Quote
                    </button>
                    <Link
                      to="/pricing"
                      className="block w-full text-center px-6 py-3 bg-white border-2 border-[var(--border-base)] text-[var(--text-primary)] rounded-xl hover:bg-[var(--bg-surface)] transition-all duration-200 font-semibold"
                    >
                      View Pricing Plans
                    </Link>
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--bg-surface)] text-[var(--text-secondary)] rounded-xl hover:bg-[var(--bg-dark)]/5 border border-[var(--border-base)] transition-all duration-200">
                      <Download className="w-4 h-4" />
                      Download Service Guide
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t border-[var(--border-base)]">
                    <div className="space-y-2 text-sm text-[var(--text-muted)]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-yellow)]" />
                        <span>No setup fees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-yellow)]" />
                        <span>Cancel anytime</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-yellow)]" />
                        <span>30-day money-back</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SectionContainer>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-gradient-to-br from-[var(--bg-surface)] to-white">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Our Proven Process</h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                A systematic methodology for delivering exceptional results, every single time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((item: any, idx: number) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    <div className="p-6 rounded-2xl border-2 border-[var(--border-base)] bg-white hover:border-[var(--accent-yellow)] hover:shadow-lg transition-all duration-300 h-full group">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] flex items-center justify-center font-bold text-[var(--bg-dark)] data-font text-xl shadow-md">
                          {idx + 1}
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-[var(--accent-yellow)]/10 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-[var(--accent-yellow)]" />
                        </div>
                      </div>
                      <h3 className="mb-3 text-xl">{item.step}</h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.description}</p>
                    </div>
                    {idx < service.process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                        <ArrowRight className="w-6 h-6 text-[var(--accent-yellow)]" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </SectionContainer>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]">
          <SectionContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="mb-6 text-white">Let's Grow Your Business Together</h2>
              <p className="text-xl text-[#D3D3D3] mb-10">
                Ready to see real results? Get a personalized quote and discover how {service.title.toLowerCase()} can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] text-[var(--bg-dark)] rounded-xl font-semibold hover:shadow-xl ring-2 ring-[var(--accent-yellow)] ring-offset-2 ring-offset-[#1A1A1A] transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/work"
                  className="px-8 py-4 bg-transparent border-2 border-[var(--accent-yellow)] text-[var(--accent-yellow)] rounded-xl hover:bg-[var(--accent-yellow)]/10 transition-all duration-200 font-semibold inline-flex items-center justify-center gap-2"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </SectionContainer>
        </section>
      </main>
    </>
  );
}
