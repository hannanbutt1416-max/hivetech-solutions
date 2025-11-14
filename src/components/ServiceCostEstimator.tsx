import { motion, AnimatePresence } from 'motion/react';
import { X, DollarSign, Calendar, Briefcase } from 'lucide-react';
import { useState } from 'react';

interface ServiceCostEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceCostEstimator({ isOpen, onClose }: ServiceCostEstimatorProps) {
  const [formData, setFormData] = useState({
    serviceType: '',
    budget: '',
    timeline: '',
    businessType: '',
  });

  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const serviceTypes = [
    { value: 'local-seo', label: 'Local SEO', basePrice: 1500 },
    { value: 'technical-seo', label: 'Technical SEO', basePrice: 2000 },
    { value: 'webapps', label: 'Web Applications', basePrice: 5000 },
    { value: 'automations', label: 'Workflow Automation', basePrice: 2500 },
    { value: 'cro', label: 'Conversion Rate Optimization', basePrice: 1800 },
    { value: 'saas', label: 'SaaS Platform', basePrice: 10000 },
    { value: 'gmb', label: 'Google My Business', basePrice: 800 },
    { value: 'process', label: 'Process Optimization', basePrice: 2200 },
    { value: 'call-center-inbound', label: 'Inbound Call Center', basePrice: 3000 },
    { value: 'call-center-outbound', label: 'Outbound Call Center', basePrice: 3500 },
  ];

  const budgetRanges = [
    { value: 'under-1k', label: 'Under $1,000', multiplier: 0.5 },
    { value: '1k-5k', label: '$1,000 - $5,000', multiplier: 1 },
    { value: '5k-10k', label: '$5,000 - $10,000', multiplier: 1.5 },
    { value: '10k-25k', label: '$10,000 - $25,000', multiplier: 2 },
    { value: '25k-plus', label: '$25,000+', multiplier: 3 },
  ];

  const timelines = [
    { value: 'urgent', label: 'Urgent (1-2 weeks)', multiplier: 1.5 },
    { value: 'normal', label: 'Normal (1 month)', multiplier: 1 },
    { value: 'flexible', label: 'Flexible (2-3 months)', multiplier: 0.9 },
  ];

  const handleCalculate = () => {
    const service = serviceTypes.find(s => s.value === formData.serviceType);
    const budget = budgetRanges.find(b => b.value === formData.budget);
    const timeline = timelines.find(t => t.value === formData.timeline);

    if (service && budget && timeline) {
      const cost = service.basePrice * budget.multiplier * timeline.multiplier;
      setEstimatedCost(Math.round(cost));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCalculate();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border-2 border-[var(--accent-yellow)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[var(--border-base)]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-[var(--bg-dark)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">Get Instant Quote</h3>
                      <p className="text-sm text-[var(--text-muted)]">Estimate your project cost</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-[var(--bg-surface)] rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-[var(--text-secondary)]" />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  {/* Service Type */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] mb-2">
                      <Briefcase className="w-4 h-4 text-[var(--accent-yellow)]" />
                      Service Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-yellow)] text-[var(--text-primary)]"
                      required
                    >
                      <option value="">Select a service...</option>
                      {serviceTypes.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="text-sm font-medium text-[var(--text-primary)] mb-2 block">
                      Business Type
                    </label>
                    <input
                      type="text"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      placeholder="e.g., E-commerce, SaaS, Local Business"
                      className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-yellow)] text-[var(--text-primary)]"
                      required
                    />
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] mb-2">
                      <DollarSign className="w-4 h-4 text-[var(--accent-yellow)]" />
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-yellow)] text-[var(--text-primary)]"
                      required
                    >
                      <option value="">Select budget range...</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] mb-2">
                      <Calendar className="w-4 h-4 text-[var(--accent-yellow)]" />
                      Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-yellow)] text-[var(--text-primary)]"
                      required
                    >
                      <option value="">Select timeline...</option>
                      {timelines.map((timeline) => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Cost Display */}
                  {estimatedCost !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 bg-gradient-to-br from-[var(--accent-yellow)]/10 to-[var(--accent-yellow-bright)]/10 border-2 border-[var(--accent-yellow)] rounded-xl text-center"
                    >
                      <div className="text-sm text-[var(--text-muted)] mb-2">Estimated Project Cost</div>
                      <div className="text-4xl font-bold text-[var(--text-primary)] data-font">
                        ${estimatedCost.toLocaleString()}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] mt-2">
                        *Final pricing may vary based on specific requirements
                      </div>
                    </motion.div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] text-[var(--bg-dark)] rounded-xl font-semibold hover:shadow-lg ring-2 ring-[var(--accent-yellow)] ring-offset-2 transition-all duration-300"
                    >
                      Calculate Estimate
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 bg-white border-2 border-[var(--border-base)] text-[var(--text-secondary)] rounded-xl hover:bg-[var(--bg-surface)] transition-all duration-200 font-semibold"
                    >
                      Close
                    </button>
                  </div>

                  <p className="text-xs text-center text-[var(--text-muted)]">
                    This is an automated estimate. Schedule a free consultation for an accurate quote.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
