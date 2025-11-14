import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Zap, Code, TrendingUp, BarChart, Workflow, Globe, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Services() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Marketing', 'Automation', 'Development'];

  const services = [
    {
      icon: Search,
      title: 'Local SEO',
      category: 'Marketing',
      slug: 'local-seo',
      description: 'Dominate local search results with our proven strategies',
      features: ['Google My Business optimization', 'Local citation building', 'Review management', 'Map pack domination'],
      metric: '+180%',
      metricLabel: 'Avg traffic increase',
    },
    {
      icon: TrendingUp,
      title: 'Technical SEO',
      category: 'Marketing',
      slug: 'technical-seo',
      description: 'Core Web Vitals optimization and technical excellence',
      features: ['Site speed optimization', 'Schema markup', 'Mobile optimization', 'Crawl efficiency'],
      metric: '< 1s',
      metricLabel: 'Avg page load',
    },
    {
      icon: BarChart,
      title: 'Conversion Rate Optimization',
      category: 'Marketing',
      slug: 'cro',
      description: 'Data-driven improvements that boost revenue',
      features: ['A/B testing', 'User behavior analysis', 'Funnel optimization', 'Landing page design'],
      metric: '+42%',
      metricLabel: 'Avg conversion lift',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      category: 'Automation',
      slug: 'automations',
      description: 'Connect your tools and eliminate manual tasks',
      features: ['Custom automation workflows', 'CRM integration', 'Email automation', 'Task scheduling'],
      metric: '30hrs',
      metricLabel: 'Avg time saved/week',
    },
    {
      icon: Zap,
      title: 'Process Optimization',
      category: 'Automation',
      slug: 'process',
      description: 'Streamline operations with intelligent automation',
      features: ['Process mapping', 'Bottleneck identification', 'System integration', 'Performance monitoring'],
      metric: '85%',
      metricLabel: 'Efficiency gain',
    },
    {
      icon: Code,
      title: 'Web Applications',
      category: 'Development',
      slug: 'webapps',
      description: 'Custom business solutions tailored to your needs',
      features: ['Custom development', 'API integration', 'Database design', 'Cloud deployment'],
      metric: '3.2x',
      metricLabel: 'Productivity boost',
    },
    {
      icon: Globe,
      title: 'SaaS Platforms',
      category: 'Development',
      slug: 'saas',
      description: 'Scalable cloud software for your business',
      features: ['Multi-tenant architecture', 'Subscription management', 'Analytics dashboard', 'Security & compliance'],
      metric: '99.9%',
      metricLabel: 'Uptime guarantee',
    },
    {
      icon: MapPin,
      title: 'GMB Optimization',
      category: 'Marketing',
      slug: 'gmb',
      description: 'Master your Google Business Profile',
      features: ['Profile optimization', 'Post scheduling', 'Q&A management', 'Insights tracking'],
      metric: '+156%',
      metricLabel: 'Profile views increase',
    },
  ];

  const filteredServices = activeFilter === 'All' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="py-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-2 bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 rounded-full mb-6">
            <span className="text-[var(--accent-cyan)] text-sm">Our Services</span>
          </div>
          <h1 className="mb-6">
            Complete <span className="text-gradient-lime">Digital Solutions</span>
          </h1>
          <p className="text-xl text-[var(--text-neutral)]">
            From local SEO to custom SaaS platforms, we provide comprehensive services to transform your digital presence
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-8 container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-[var(--accent-lime)] text-[var(--bg-primary)]'
                  : 'bg-[var(--bg-surface)] text-[var(--text-neutral)] border border-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                layout
              >
                <Link
                  to={`/service/${service.slug}`}
                  className="card-tech p-8 h-full flex flex-col group clip-corner"
                >
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="w-14 h-14 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="w-7 h-7 text-[var(--accent-cyan)]" />
                    </motion.div>
                    <div className="text-right">
                      <div className="data-font text-2xl text-[var(--accent-lime)]">{service.metric}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{service.metricLabel}</div>
                    </div>
                  </div>

                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm text-[var(--text-neutral)] flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[var(--accent-cyan)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-[var(--accent-cyan)] group-hover:text-[var(--accent-lime)] transition-colors inline-flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-primary)] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h2 className="mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-[var(--text-neutral)] mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and we'll help you identify the best solutions for your business
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-lime)] text-[var(--bg-primary)] rounded-lg hover:bg-[var(--accent-cyber-lime)] transition-all duration-200 glow-lime"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
