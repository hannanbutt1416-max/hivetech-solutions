import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Zap, Code, TrendingUp, Users, Award, CheckCircle2, Star } from 'lucide-react';
import { CosmicHero } from '../components/CosmicHero';
import { Marquee } from '../components/Marquee';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SectionContainer } from '../components/SectionContainer';
import { useState } from 'react';
import { ConsultationModal } from '../components/ConsultationModal';
import { SEOHead, pageSEO } from '../components/SEOHead';

// Data Arrays
const clients = [
  { name: 'TechCorp Solutions', metric: '+247% ROI' },
  { name: 'Global Retail Inc', metric: '10x Traffic' },
  { name: 'FinanceFirst', metric: '500K+ Visitors' },
  { name: 'HealthPlus Services', metric: '+185% Leads' },
  { name: 'EduMasters', metric: '#1 Google Rank' },
  { name: 'RealEstate Pro', metric: '2M+ Revenue' },
];

const services = [
  {
    icon: BarChart3,
    title: 'Local SEO',
    description: 'Dominate Google Maps & local search. Proven strategies that put you #1 in your area.',
    link: '/service/local-seo',
  },
  {
    icon: Code,
    title: 'Web & SaaS Apps',
    description: 'Lightning-fast web applications and scalable SaaS platforms built with cutting-edge tech.',
    link: '/service/webapps',
  },
  {
    icon: Zap,
    title: 'Automation & AI',
    description: 'Workflow automation and AI integration that saves hours daily and scales infinitely.',
    link: '/service/automations',
  },
];

const metrics = [
  { icon: TrendingUp, value: '+247%', label: 'Average ROI Increase' },
  { icon: Zap, value: '<1s', label: 'Page Load Time' },
  { icon: Users, value: '500+', label: 'Projects Completed' },
  { icon: Award, value: '98%', label: 'Client Retention Rate' },
];

const features = [
  { title: 'Advanced Analytics', metric: '99.9%', description: 'Real-time dashboards with ML-powered insights and predictive analytics for data-driven decisions.' },
  { title: 'Cloud Infrastructure', metric: '<0.5s', description: 'Globally distributed CDN, auto-scaling servers, and enterprise-grade security protocols.' },
  { title: 'API Integration', metric: '100+', description: 'Seamless connections with CRMs, payment gateways, marketing tools, and custom systems.' },
  { title: 'Mobile-First Design', metric: '4K+', description: 'Responsive interfaces that work flawlessly across all devices and screen sizes.' },
  { title: 'SEO Optimization', metric: '#1', description: 'Technical SEO, content strategy, and link building to dominate search rankings.' },
  { title: '24/7 Monitoring', metric: '∞', description: 'Automated health checks, instant alerts, and proactive issue resolution around the clock.' },
];

const reviews = [
  { name: 'Sarah Johnson', business: 'Urban Boutique', rating: 5, text: 'Hive Tech Solutions transformed our online presence! Our sales increased 300% in just 3 months. Their SEO expertise is unmatched.', date: '2 weeks ago' },
  { name: 'Michael Chen', business: 'Tech Startup Inc', rating: 5, text: 'The web app they built for us is absolutely incredible. Fast, secure, and our users love it. Best investment we\'ve made!', date: '1 month ago' },
  { name: 'Emily Rodriguez', business: 'Fitness Studio', rating: 5, text: 'Our Google ranking went from page 5 to #1 in our area. The automation tools save us 20 hours weekly. Game changer!', date: '3 weeks ago' },
  { name: 'David Thompson', business: 'Law Firm', rating: 5, text: 'Professional, responsive, and results-driven. They redesigned our website and our leads tripled. Highly recommend!', date: '1 week ago' },
  { name: 'Jessica Martinez', business: 'Restaurant Owner', rating: 5, text: 'Finally found a team that understands local SEO! We\'re now the top-rated restaurant in our city on Google Maps.', date: '2 months ago' },
  { name: 'Robert Wilson', business: 'E-commerce Store', rating: 5, text: 'The SaaS platform they developed handles thousands of transactions daily without any issues. Exceptional quality!', date: '3 weeks ago' },
  { name: 'Amanda Lee', business: 'Marketing Agency', rating: 5, text: 'We use their automation tools for all our clients. Saves time, increases efficiency, and delivers consistent results.', date: '1 month ago' },
  { name: 'Christopher Brown', business: 'Medical Practice', rating: 5, text: 'Our patient bookings doubled after they optimized our online presence. The ROI has been phenomenal.', date: '2 weeks ago' },
  { name: 'Jennifer Davis', business: 'Real Estate', rating: 5, text: 'Best web development team I\'ve worked with. They delivered on time, on budget, and exceeded expectations.', date: '1 week ago' },
  { name: 'Daniel Garcia', business: 'Financial Services', rating: 5, text: 'Their technical expertise and customer service are outstanding. Our website is now our #1 lead generation tool.', date: '3 months ago' },
  { name: 'Michelle White', business: 'Salon & Spa', rating: 5, text: 'Local SEO magic! We went from zero online bookings to being fully booked 2 weeks in advance. Thank you!', date: '1 month ago' },
  { name: 'Kevin Anderson', business: 'Manufacturing', rating: 5, text: 'The custom CRM integration they built streamlined our entire sales process. Incredible technical skills!', date: '2 months ago' },
  { name: 'Laura Thomas', business: 'Consulting Firm', rating: 5, text: 'Professional, knowledgeable, and always available. They\'ve become our go-to partner for all digital projects.', date: '3 weeks ago' },
  { name: 'James Martinez', business: 'Auto Dealership', rating: 5, text: 'Our online leads increased 400% after implementing their SEO strategy. Best ROI we\'ve ever seen!', date: '1 week ago' },
  { name: 'Patricia Clark', business: 'Dental Office', rating: 5, text: 'The website redesign brought in so many new patients. Beautiful design and lightning-fast performance!', date: '2 weeks ago' },
  { name: 'Richard Moore', business: 'SaaS Startup', rating: 5, text: 'They built our MVP in record time with top-notch quality. Now we\'re scaling to thousands of users!', date: '1 month ago' },
  { name: 'Susan Taylor', business: 'Retail Chain', rating: 5, text: 'The e-commerce platform they developed handles our multi-location inventory perfectly. Flawless execution!', date: '3 months ago' },
  { name: 'William Jackson', business: 'Home Services', rating: 5, text: 'Dominating local search results now! Phone rings constantly with qualified leads. Worth every penny!', date: '2 weeks ago' },
  { name: 'Karen Hill', business: 'Photography Studio', rating: 5, text: 'The portfolio website they created showcases my work beautifully. Bookings have increased 250%!', date: '1 month ago' },
  { name: 'Steven Wright', business: 'HVAC Company', rating: 5, text: 'Top ranking on Google for our service area! Their local SEO expertise brought in quality leads daily.', date: '3 weeks ago' },
  { name: 'Nancy Green', business: 'Boutique Hotel', rating: 5, text: 'Our booking engine integration works flawlessly. Direct bookings up 180% since launch!', date: '2 months ago' },
  { name: 'George Baker', business: 'Plumbing Services', rating: 5, text: 'Best investment for our business! We rank #1 for all our target keywords. Emergency calls doubled!', date: '1 week ago' },
  { name: 'Betty Adams', business: 'Yoga Studio', rating: 5, text: 'The online class booking system they built is so user-friendly. Our members love it!', date: '2 weeks ago' },
  { name: 'Edward Nelson', business: 'Insurance Agency', rating: 5, text: 'Our quote calculator generates quality leads 24/7. ROI exceeded projections within 2 months!', date: '1 month ago' },
  { name: 'Dorothy Carter', business: 'Pet Grooming', rating: 5, text: 'Went from struggling to find clients to fully booked! Their SEO strategy really works!', date: '3 weeks ago' },
  { name: 'Paul Mitchell', business: 'Roofing Contractor', rating: 5, text: 'The custom project management portal saves us hours daily. Excellent technical execution!', date: '2 months ago' },
  { name: 'Helen Roberts', business: 'Bakery & Cafe', rating: 5, text: 'Online ordering system boosted sales 320%! Beautiful design and smooth checkout process.', date: '1 week ago' },
  { name: 'Frank Turner', business: 'Accounting Firm', rating: 5, text: 'Their SEO work brought us high-value clients consistently. Professional service every step!', date: '2 weeks ago' },
  { name: 'Carol Phillips', business: 'Interior Design', rating: 5, text: 'The interactive 3D portfolio they created helps clients visualize projects. Game changing!', date: '1 month ago' },
  { name: 'Raymond Campbell', business: 'Auto Repair Shop', rating: 5, text: 'Appointment bookings through the website increased 400%. Best decision we made this year!', date: '3 weeks ago' },
  { name: 'Donna Parker', business: 'Cleaning Services', rating: 5, text: 'Dominating local search! Get multiple quote requests daily. Their strategies deliver results!', date: '2 months ago' },
  { name: 'Arthur Evans', business: 'Landscaping Co.', rating: 5, text: 'The before/after gallery they designed showcases our work perfectly. Lead quality is amazing!', date: '1 week ago' },
  { name: 'Ruth Edwards', business: 'Florist', rating: 5, text: 'Online flower ordering system increased revenue 275%! Beautiful design and easy to use!', date: '2 weeks ago' },
  { name: 'Albert Collins', business: 'Moving Company', rating: 5, text: 'Instant quote calculator generates leads around the clock. Technical implementation was flawless!', date: '1 month ago' },
  { name: 'Shirley Stewart', business: 'Hair Salon', rating: 5, text: 'Online booking integrated perfectly with our schedule. New clients find us easily on Google!', date: '3 weeks ago' },
  { name: 'Roy Morris', business: 'Electrician', rating: 5, text: 'Ranking page 1 for all our services! Emergency calls tripled. Worth every single penny!', date: '2 months ago' },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,997',
    period: '/month',
    description: 'Perfect for small businesses looking to establish their digital presence',
    features: [
      'Local SEO optimization',
      'Google My Business setup',
      'Basic website development',
      '5-page responsive website',
      'Monthly performance reports',
      'Email support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$5,997',
    period: '/month',
    description: 'For growing businesses ready to scale with automation and advanced features',
    features: [
      'Everything in Starter',
      'Custom web application',
      'Marketing automation',
      'Advanced SEO strategy',
      'CRM integration',
      'Priority support',
      'Quarterly strategy sessions',
    ],
    cta: 'Start Growing',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations with complex requirements',
    features: [
      'Everything in Growth',
      'Custom SaaS development',
      'AI & ML integration',
      'Dedicated account manager',
      'White-label solutions',
      '24/7 priority support',
      'Custom training & onboarding',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export function Home() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <>
      <SEOHead {...pageSEO.home} />
      <main className="overflow-hidden">
        {/* Premium Hero Section */}
        <CosmicHero onConsultationClick={() => setIsConsultationModalOpen(true)} />

        {/* Client Marquee */}
        <section className="py-9 bg-[#1A1A1A] border-y-2 border-[#FFD700]">
          <div className="space-y-4">
            <Marquee speed={50} direction="left">
              {clients.slice(0, 3).map((client, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#2D2D2D] to-[#1A1A1A] rounded-lg border-2 border-[#FFD700] shadow-md mx-2">
                  <span className="text-white font-semibold text-sm">{client.name}</span>
                  <span className="data-font text-[#FFD700] text-base">{client.metric}</span>
                </div>
              ))}
            </Marquee>
            <Marquee speed={50} direction="right">
              {clients.slice(3, 6).map((client, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] rounded-lg border-2 border-[#FFD700] shadow-md mx-2">
                  <span className="text-white font-semibold text-sm">{client.name}</span>
                  <span className="data-font text-[#FFD700] text-base">{client.metric}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-white">
          <SectionContainer>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="mb-3">Our Core Services</h2>
              <p className="text-lg text-[#4A4A4A]">Three pillars of digital transformation</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <Link to={service.link} className="block p-6 h-full bg-white border-2 border-[#E0E0E0] rounded-xl hover:border-[#FFD700] hover:shadow-xl transition-all duration-300 group">
                      <motion.div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-[#FFD700] to-[#FFC000] flex items-center justify-center shadow-lg" whileHover={{ rotate: 5, scale: 1.1 }}>
                        <Icon className="w-6 h-6 text-[#1A1A1A]" />
                      </motion.div>
                      <h3 className="mb-2">{service.title}</h3>
                      <p className="text-[#4A4A4A] mb-4 text-sm">{service.description}</p>
                      <span className="text-[#FFD700] group-hover:text-[#FFC000] transition-colors inline-flex items-center gap-2 font-semibold text-sm">
                        View Services <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </SectionContainer>
        </section>

        {/* Metrics */}
        <section className="py-24 bg-[#F5F5F5] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <SectionContainer className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="mb-3">Results That Speak</h2>
              <p className="text-lg text-[#4A4A4A]">Data-driven performance across all metrics</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative">
                    <div className="bg-white p-6 text-center relative overflow-hidden rounded-xl border-2 border-[#E0E0E0] hover:border-[#FFD700] transition-all shadow-lg hover:shadow-xl">
                      <motion.div className="absolute inset-0 opacity-5" animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                        <Icon className="w-full h-full text-[#FFD700]" />
                      </motion.div>
                      <div className="relative z-10">
                        <div className="data-font text-4xl text-gradient-yellow mb-2 glow-yellow">{metric.value}</div>
                        <div className="text-[#4A4A4A] font-medium text-sm">{metric.label}</div>
                        <Icon className="w-5 h-5 text-[#FFD700] mx-auto mt-3" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </SectionContainer>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <SectionContainer>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="mb-3">Features & Solutions</h2>
              <p className="text-lg text-[#4A4A4A]">Comprehensive digital services for modern businesses</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="bg-white p-5 rounded-xl border-2 border-[#E0E0E0] hover:border-[#FFD700] hover:shadow-lg transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="flex-grow text-base">{feature.title}</h4>
                    <span className="data-font text-lg text-[#FFD700] ml-3">{feature.metric}</span>
                  </div>
                  <p className="text-[#4A4A4A] text-xs leading-relaxed">{feature.description}</p>
                  <motion.div className="mt-3 text-[#FFD700] text-xs inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity font-semibold" whileHover={{ x: 5 }}>
                    Learn more <ArrowRight className="w-3 h-3" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </section>

        {/* Reviews */}
        <section className="py-32 bg-[#F5F5F5] overflow-hidden">
          <div className="container mx-auto px-6 mb-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <h2 className="mb-4">Client Success Stories</h2>
              <p className="text-xl text-[#4A4A4A]">Real reviews from Google My Business - Hive Tech Solutions</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-6">
            <Marquee direction="up" speed={40} className="h-[700px]">
              {reviews.slice(0, 12).concat(reviews.slice(0, 12)).map((review, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border-2 border-[#FFD700] mb-4 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-[#4A4A4A] text-sm mb-4 leading-relaxed">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFC000] flex items-center justify-center text-[#1A1A1A] font-semibold shadow-md">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-[#1A1A1A] font-semibold">{review.name}</div>
                        <div className="text-[#808080] text-xs">{review.business}</div>
                      </div>
                    </div>
                    <div className="text-xs text-[#FFD700] font-semibold">{review.date}</div>
                  </div>
                </div>
              ))}
            </Marquee>
            <Marquee direction="down" speed={45} className="h-[700px]">{/* MIDDLE COLUMN - moves DOWN (opposite) */}
              {reviews.slice(12, 24).concat(reviews.slice(12, 24)).map((review, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border-2 border-[#FFD700] mb-4 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-[#4A4A4A] text-sm mb-4 leading-relaxed">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFC000] to-[#FFD700] flex items-center justify-center text-[#1A1A1A] font-semibold shadow-md">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-[#1A1A1A] font-semibold">{review.name}</div>
                        <div className="text-[#808080] text-xs">{review.business}</div>
                      </div>
                    </div>
                    <div className="text-xs text-[#FFD700] font-semibold">{review.date}</div>
                  </div>
                </div>
              ))}
            </Marquee>
            <Marquee direction="up" speed={50} className="h-[700px]">
              {reviews.slice(24, 36).concat(reviews.slice(24, 36)).map((review, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border-2 border-[#FFD700] mb-4 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-[#4A4A4A] text-sm mb-4 leading-relaxed">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFC000] flex items-center justify-center text-[#1A1A1A] font-semibold shadow-md">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-[#1A1A1A] font-semibold">{review.name}</div>
                        <div className="text-[#808080] text-xs">{review.business}</div>
                      </div>
                    </div>
                    <div className="text-xs text-[#FFD700] font-semibold">{review.date}</div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-32 container mx-auto px-6 bg-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFD700]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730382624761-af8112d26209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Business Growth Success"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/30 to-[#1A1A1A]/30" />
              <motion.div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border-2 border-[#FFD700]" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="data-font text-3xl text-[#FFD700]">+247%</div>
                <div className="text-sm text-[#1A1A1A] font-semibold">ROI Increase</div>
              </motion.div>
              <motion.div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border-2 border-[#FFD700]" animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
                <div className="data-font text-3xl text-[#FFD700]">98%</div>
                <div className="text-sm text-[#1A1A1A] font-semibold">Client Retention</div>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="mb-6">Why Hive Tech Solutions?</h2>
              <p className="text-lg text-[#4A4A4A] mb-8">
                We're not just another digital agency. We're your algorithmic growth partner, combining data science, automation expertise, and local SEO mastery to deliver measurable results.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Performance-Driven', desc: 'Every decision backed by data, every metric tracked, every result optimized for maximum ROI.' },
                  { title: 'Laser-Focused Precision', desc: 'Tailored strategies designed specifically for your industry and local market dynamics.' },
                  { title: 'Algorithmic Growth', desc: 'Automated systems that scale your business 24/7 while you focus on what matters.' },
                ].map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="text-[#4A4A4A]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#F5F5F5] rounded-lg border-2 border-[#FFD700]">
                <h4 className="mb-4">Our Proven Process</h4>
                <div className="flex items-center gap-4 text-sm flex-wrap">
                  {['Audit', 'Build', 'Automate', 'Measure', 'Scale'].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#FFD700] font-semibold">{step}</span>
                      {idx < 4 && <ArrowRight className="w-4 h-4 text-[#4A4A4A]" />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-32 bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="mb-4">Transparent <span className="text-gradient-gold">Pricing</span></h2>
              <p className="text-xl text-[#4A4A4A]">Choose the plan that fits your growth stage</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className={`relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 ${plan.highlighted ? 'border-4 border-[#FFD700] scale-105 glow-yellow-strong' : 'border-2 border-[#E0E0E0] hover:border-[#FFD700]'}`}>
                  {plan.highlighted && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-8 py-2.5 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] rounded-full shadow-lg glow-yellow font-bold">
                      <span className="flex items-center gap-2">⭐ MOST POPULAR</span>
                    </div>
                  )}
                  <h3 className="mb-2 text-[#1A1A1A]">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="data-font text-5xl text-gradient-yellow">{plan.price}</span>
                    <span className="text-[#4A4A4A] text-lg">{plan.period}</span>
                  </div>
                  <p className="text-[#4A4A4A] mb-8 min-h-[60px]">{plan.description}</p>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-0.5" />
                        <span className="text-[#1A1A1A]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setIsConsultationModalOpen(true)}
                    className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${plan.highlighted ? 'bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] shadow-lg hover:shadow-2xl glow-yellow transform hover:scale-105' : 'bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'}`}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-[#1A1A1A] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="container mx-auto px-6 text-center relative z-10">
            <h2 className="mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-[#D3D3D3] mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that chose algorithmic growth. Start your free automation audit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] rounded-lg hover:shadow-xl transition-all duration-300 glow-yellow font-semibold"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-all duration-200 font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Consultation Modal */}
        <ConsultationModal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} />
      </main>
    </>
  );
}