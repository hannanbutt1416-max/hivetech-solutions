import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Zap, Code, TrendingUp, BarChart, Workflow, Globe, MapPin, PhoneIncoming, PhoneOutgoing } from 'lucide-react';

const services = [
  {
    category: 'Marketing',
    items: [
      { icon: Search, label: 'Local SEO', slug: 'local-seo', description: 'Dominate local search results' },
      { icon: TrendingUp, label: 'Technical SEO', slug: 'technical-seo', description: 'Core Web Vitals optimization' },
      { icon: BarChart, label: 'Conversion Rate Optimization', slug: 'cro', description: 'Data-driven improvements' },
    ],
  },
  {
    category: 'Call Center',
    items: [
      { icon: PhoneIncoming, label: 'Inbound Services', slug: 'call-center-inbound', description: '24/7 customer support' },
      { icon: PhoneOutgoing, label: 'Outbound Services', slug: 'call-center-outbound', description: 'Lead generation & sales' },
    ],
  },
  {
    category: 'Automation',
    items: [
      { icon: Workflow, label: 'Workflow Automation', slug: 'automations', description: 'Connect your tools seamlessly' },
      { icon: Zap, label: 'Process Optimization', slug: 'process', description: 'Eliminate manual tasks' },
    ],
  },
  {
    category: 'Development',
    items: [
      { icon: Code, label: 'Web Applications', slug: 'webapps', description: 'Custom business solutions' },
      { icon: Globe, label: 'SaaS Platforms', slug: 'saas', description: 'Scalable cloud software' },
      { icon: MapPin, label: 'GMB Optimization', slug: 'gmb', description: 'Google Business Profile mastery' },
    ],
  },
];

export function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[1100px] bg-[var(--bg-surface)] rounded-lg border border-[var(--border-base)] shadow-2xl p-8"
      style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
    >
      <div className="grid grid-cols-4 gap-6">
        {services.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-sm uppercase tracking-wider text-[var(--accent-blue)] mb-4">
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    to={`/service/${item.slug}`}
                    className="group block p-3 rounded-lg hover:bg-[var(--bg-primary)] transition-all duration-200 border border-transparent hover:border-[var(--accent-blue)]/30"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[var(--accent-blue)]/10 group-hover:bg-[var(--accent-blue)]/20 transition-colors">
                        <Icon className="w-4 h-4 text-[var(--accent-blue)]" />
                      </div>
                      <div>
                        <div className="text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                          {item.label}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Case Study */}
      <div className="mt-6 pt-6 border-t border-[var(--border-base)]">
        <Link to="/work" className="flex items-center justify-between group p-4 rounded-lg bg-[var(--bg-primary)] hover:border-[var(--accent-blue)] border border-transparent transition-all duration-200">
          <div>
            <div className="text-sm text-[var(--accent-orange)] mb-1">Featured Case Study</div>
            <div className="text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
              How we increased leads by 247% for a local business
            </div>
          </div>
          <div className="data-font text-2xl text-[var(--accent-blue)]">+247%</div>
        </Link>
      </div>
    </motion.div>
  );
}