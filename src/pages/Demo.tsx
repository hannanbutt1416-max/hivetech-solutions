import { motion } from 'motion/react';
import { Calendar, Clock, Video, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '1-10',
    service: 'general',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Demo scheduled successfully! Check your email for confirmation.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      employees: '1-10',
      service: 'general',
      preferredDate: '',
      preferredTime: '',
      message: '',
    });
  };

  const benefits = [
    'Live walkthrough of our platform and services',
    'Personalized strategy recommendations',
    'Free technical audit worth $500',
    'Custom pricing proposal',
    'Q&A with our experts',
    'No obligation or pressure',
  ];

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
            <span className="text-[var(--accent-cyan)] text-sm">Schedule Demo</span>
          </div>
          <h1 className="mb-6">
            See <span className="text-gradient-lime">hive tech solutions</span> in Action
          </h1>
          <p className="text-xl text-[var(--text-neutral)]">
            Book a free 30-minute consultation and discover how we can transform your digital presence
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="card-tech p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-lime)]/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[var(--accent-lime)]" />
                </div>
                <div>
                  <h2>Schedule Your Demo</h2>
                  <p className="text-sm text-[var(--text-secondary)]">Takes less than 2 minutes</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[var(--text-neutral)] mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-cyan)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-[var(--text-neutral)] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-cyan)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-[var(--text-neutral)] mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-cyan)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm text-[var(--text-neutral)] mb-2">
                      Company Name *
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-cyan)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="employees" className="block text-sm text-[var(--text-neutral)] mb-2">
                      Company Size
                    </label>
                    <select
                      id="employees"
                      value={formData.employees}
                      onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-cyan)]/30 rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                    >
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201+">201+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm text-[var(--text-neutral)] mb-2">
                      Primary Interest
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-cyan)]/30 rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                    >
                      <option value="general">General Demo</option>
                      <option value="local-seo">Local SEO</option>
                      <option value="automation">Automation</option>
                      <option value="webapp">Web Applications</option>
                      <option value="saas">SaaS Development</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm text-[var(--text-neutral)] mb-2">
                      Preferred Date *
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-cyan)]/30 rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm text-[var(--text-neutral)] mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-cyan)]/30 rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                    >
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[var(--text-neutral)] mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-cyan)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--accent-cyan)] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your goals and challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent-lime)] text-[var(--bg-primary)] rounded-lg hover:bg-[var(--accent-cyber-lime)] transition-all duration-200 glow-lime"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule My Demo
                </button>

                <p className="text-xs text-[var(--text-secondary)] text-center">
                  By scheduling a demo, you agree to our Privacy Policy. We'll never share your information.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Benefits & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* What to Expect */}
            <div>
              <h2 className="mb-6">What to Expect</h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[var(--accent-lime)] flex-shrink-0 mt-1" />
                    <span className="text-[var(--text-neutral)]">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Demo Stats */}
            <div className="card-tech p-8">
              <h3 className="mb-6">Demo Statistics</h3>
              <div className="space-y-6">
                {[
                  { icon: Clock, metric: '30min', label: 'Average Duration' },
                  { icon: Video, metric: '100%', label: 'Online via Zoom' },
                  { icon: CheckCircle2, metric: '$500', label: 'Free Audit Value' },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[var(--accent-cyan)]" />
                      </div>
                      <div className="flex-1">
                        <div className="data-font text-2xl text-[var(--accent-lime)]">{stat.metric}</div>
                        <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Testimonial */}
            <div className="card-tech p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[var(--accent-lime)]">★</span>
                ))}
              </div>
              <p className="text-[var(--text-neutral)] italic mb-4">
                "The demo was incredibly valuable. They took the time to understand our business and provided actionable insights immediately. We signed up on the spot!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/20 flex items-center justify-center text-[var(--accent-cyan)] text-sm">
                  SM
                </div>
                <div>
                  <div className="text-[var(--text-primary)] text-sm">Sarah Mitchell</div>
                  <div className="text-[var(--text-secondary)] text-xs">CEO, LocalBiz Pro</div>
                </div>
              </div>
            </div>

            {/* Contact Alternative */}
            <div className="card-tech p-8 bg-gradient-to-br from-[var(--accent-cyan)]/10 to-[var(--accent-lime)]/10 border-[var(--accent-cyan)]/30">
              <h3 className="mb-4">Prefer to Talk First?</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-sm">
                Give us a call at <a href="tel:+18178866699" className="text-[var(--accent-cyan)] hover:text-[var(--accent-lime)]">(817) 886-6699</a> or email us at <a href="mailto:hello@hivetechsolutions.com" className="text-[var(--accent-cyan)] hover:text-[var(--accent-lime)]">hello@hivetechsolutions.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
