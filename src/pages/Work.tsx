import { motion } from 'motion/react';
import { useState } from 'react';
import { TrendingUp, Users, Clock, ExternalLink, ArrowRight, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Local SEO', 'Automation', 'Web Apps', 'SaaS', 'Call Center'];

  const caseStudies = [
    {
      category: 'Local SEO',
      client: 'Urban Dental Care',
      industry: 'Healthcare',
      challenge: 'Struggling to attract new patients in competitive local market',
      solution: 'Comprehensive local SEO strategy with GMB optimization and review management',
      results: [
        { metric: '+247%', label: 'Appointment Bookings' },
        { metric: '+180%', label: 'Organic Traffic' },
        { metric: '4.9★', label: 'Average Rating' },
      ],
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1551989745-347c28b620e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      gradient: 'from-blue-600/20 to-cyan-500/20',
    },
    {
      category: 'Automation',
      client: 'TechVibe Agency',
      industry: 'Digital Marketing',
      challenge: 'Manual processes consuming 40+ hours per week',
      solution: 'Custom automation workflows connecting CRM, email, and project management',
      results: [
        { metric: '30hrs', label: 'Saved Weekly' },
        { metric: '85%', label: 'Error Reduction' },
        { metric: '3.2x', label: 'Productivity Boost' },
      ],
      duration: '3 months',
      image: 'https://images.unsplash.com/photo-1762681290718-0aaa0dd105df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      gradient: 'from-purple-600/20 to-pink-500/20',
    },
    {
      category: 'Web Apps',
      client: 'ManufacturePro',
      industry: 'Manufacturing',
      challenge: 'Outdated inventory management causing delays and errors',
      solution: 'Custom web application with real-time tracking and analytics',
      results: [
        { metric: '3.2x', label: 'Efficiency Gain' },
        { metric: '< 1s', label: 'Load Time' },
        { metric: '$250K', label: 'Annual Savings' },
      ],
      duration: '4 months',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      gradient: 'from-indigo-600/20 to-blue-500/20',
    },
    {
      category: 'Local SEO',
      client: 'Bella Vista Restaurant Group',
      industry: 'Food & Beverage',
      challenge: 'Low online visibility across 5 locations',
      solution: 'Multi-location SEO strategy with localized content and GMB management',
      results: [
        { metric: '+156%', label: 'Reservations' },
        { metric: '+210%', label: 'Map Views' },
        { metric: '5★', label: 'Avg Rating' },
      ],
      duration: '5 months',
      image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      gradient: 'from-orange-600/20 to-red-500/20',
    },
    {
      category: 'SaaS',
      client: 'CloudSync Pro',
      industry: 'Technology',
      challenge: 'Need for scalable SaaS platform for data synchronization',
      solution: 'Full-stack SaaS development with subscription management and API',
      results: [
        { metric: '10K+', label: 'Active Users' },
        { metric: '99.9%', label: 'Uptime' },
        { metric: '$500K', label: 'Annual Revenue' },
      ],
      duration: '8 months',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      gradient: 'from-teal-600/20 to-green-500/20',
    },
    {
      category: 'Call Center',
      client: 'SalesForce Solutions',
      industry: 'B2B Services',
      challenge: 'Low conversion rates on outbound sales calls',
      solution: 'Optimized call scripts, advanced CRM integration, and agent training program',
      results: [
        { metric: '+185%', label: 'Qualified Leads' },
        { metric: '42%', label: 'Conversion Rate' },
        { metric: '$1.2M', label: 'Revenue Generated' },
      ],
      duration: '3 months',
      image: 'https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      gradient: 'from-cyan-600/20 to-blue-500/20',
    },
  ];

  const filteredCaseStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="py-20 container mx-auto px-6 relative">
        <div className="absolute inset-0 hex-pattern opacity-20 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-orange)]/10 border border-[var(--accent-blue)]/30 rounded-full mb-6">
            <span className="text-gradient-cyan">Case Studies</span>
          </div>
          <h1 className="mb-6">
            Real Results for <span className="text-gradient-cyan">Real Businesses</span>
          </h1>
          <p className="text-xl text-[var(--text-neutral)]">
            Discover how we've helped businesses like yours achieve extraordinary growth through data-driven strategies and innovative solutions.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
                activeFilter === filter
                  ? 'bg-[#1A1A1A] text-white border-2 border-[#FFD700] shadow-lg scale-110 glow-yellow'
                  : 'bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] hover:border-[#FFD700] hover:bg-[#F5F5F5] hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {filteredCaseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card-tech overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={study.image}
                  alt={study.client}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient}`} />
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm text-[var(--text-primary)]">
                  {study.category}
                </div>
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-[var(--accent-blue)] text-white rounded-full text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {study.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="mb-1">{study.client}</h3>
                    <div className="text-sm text-[var(--text-muted)]">{study.industry}</div>
                  </div>
                  <Award className="w-6 h-6 text-[var(--accent-orange)]" />
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm text-[var(--accent-blue)] mb-1">Challenge</div>
                    <p className="text-[var(--text-secondary)] text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm text-[var(--accent-blue)] mb-1">Solution</div>
                    <p className="text-[var(--text-secondary)] text-sm">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-orange)]/10 rounded-lg mb-6">
                  {study.results.map((result, rIdx) => (
                    <div key={rIdx} className="text-center">
                      <div className="data-font text-2xl text-gradient-cyan mb-1">
                        {result.metric}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">{result.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[var(--accent-blue)] hover:text-[var(--accent-orange)] transition-colors group/link"
                >
                  <span>Get Similar Results</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-[var(--bg-surface)]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Track Record</h2>
            <p className="text-xl text-[var(--text-neutral)]">
              Numbers that speak louder than words
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '$50M+', label: 'Revenue Generated' },
              { value: '247%', label: 'Avg ROI Increase' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-tech p-8 text-center"
              >
                <div className="data-font text-5xl text-gradient-cyan mb-3">{stat.value}</div>
                <div className="text-[var(--text-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-orange)]/10" />
          <div className="absolute inset-0 hex-pattern opacity-30" />
          
          <div className="relative z-10 card-tech p-12 text-center border-2 border-[var(--accent-blue)]">
            <h2 className="mb-6">Ready to Become Our Next Success Story?</h2>
            <p className="text-xl text-[var(--text-neutral)] mb-8 max-w-2xl mx-auto">
              Let's discuss how we can achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-orange)] text-white rounded-lg hover:shadow-xl transition-all duration-300 glow-blue"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[var(--accent-blue)] text-[var(--accent-blue)] rounded-lg hover:bg-[var(--accent-blue)]/10 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}