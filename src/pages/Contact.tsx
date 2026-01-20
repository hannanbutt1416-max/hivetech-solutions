import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Calendar, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Link } from 'react-router-dom';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'general',
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', company: '', message: '', service: 'general' });
      setLoading(false);
    }, 1000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast.error('Please enter your email address');
      return;
    }
    toast.success('Successfully subscribed to our newsletter!');
    setNewsletterEmail('');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@hivetechsolutions.com',
      link: 'mailto:hello@hivetechsolutions.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(817) 886-6699',
      link: 'tel:+18178866699',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '2833 Crockett Street Ste 1113, Fort Worth, TX, USA',
      link: null,
    },
    {
      icon: MapPin,
      label: 'Office Address',
      value: '7838 Malton Lane, Appt 22, Worthington, Columbus, Ohio 43085',
      link: null,
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
      link: null,
    },
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
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-orange)]/10 border border-[var(--accent-blue)]/30 rounded-full mb-6">
            <span className="text-gradient-cyan">Get in Touch</span>
          </div>
          <h1 className="mb-6">
            Let's Start Your <span className="text-gradient-cyan">Growth Journey</span>
          </h1>
          <p className="text-xl text-[var(--text-neutral)]">
            Have a question or ready to get started? We're here to help you grow your business.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="card-tech p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-[var(--accent-blue)]" />
                <h2>Send Us a Message</h2>
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
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-blue)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-blue)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-[var(--text-neutral)] mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-blue)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm text-[var(--text-neutral)] mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-blue)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm text-[var(--text-neutral)] mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-blue)]/30 rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="local-seo">Local SEO</option>
                    <option value="automation">Workflow Automation</option>
                    <option value="webapp">Web Applications</option>
                    <option value="saas">SaaS Development</option>
                    <option value="call-center">Call Center Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[var(--text-neutral)] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-blue)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 glow-yellow font-semibold disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="card-tech p-8">
              <h3 className="mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-orange)]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[var(--accent-blue)]" />
                      </div>
                      <div>
                        <div className="text-sm text-[var(--text-muted)] mb-1">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-[var(--text-primary)]">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="card-tech p-8">
              <Calendar className="w-8 h-8 text-[var(--accent-blue)] mb-4" />
              <h3 className="mb-4">Schedule a Consultation</h3>
              <p className="text-[var(--text-muted)] mb-6">
                Book a free 30-minute consultation to discuss your project and goals.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border-2 border-[var(--accent-blue)] rounded-lg hover:bg-[var(--accent-blue)]/20 transition-all duration-200 w-full"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visit Our Office with Real Map */}
      <section className="py-32 bg-[var(--bg-surface)]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Visit Our Office</h2>
            <p className="text-xl text-[var(--text-neutral)]">
              Come see us in person at our San Francisco headquarters
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195800754893!2d-122.40141492346625!3d37.78824187197518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d2c3f6b7f%3A0x2f03dd326f6d2b92!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hive Tech Solutions Office Location"
              />
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-tech p-8 h-fit"
            >
              <h3 className="mb-4">Stay Updated</h3>
              <p className="text-[var(--text-muted)] mb-6">
                Subscribe to our newsletter for the latest insights on digital marketing, automation, and business growth.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm text-[var(--text-neutral)] mb-2">
                    Email Address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-blue)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 glow-yellow font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  <span>Subscribe</span>
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-[var(--border-base)]">
                <h4 className="mb-4">Quick Links</h4>
                <div className="space-y-3">
                  <Link
                    to="/pricing"
                    className="block text-[var(--text-neutral)] hover:text-[var(--accent-blue)] transition-colors"
                  >
                    View Pricing Plans →
                  </Link>
                  <Link
                    to="/work"
                    className="block text-[var(--text-neutral)] hover:text-[var(--accent-blue)] transition-colors"
                  >
                    Case Studies →
                  </Link>
                  <Link
                    to="/services"
                    className="block text-[var(--text-neutral)] hover:text-[var(--accent-blue)] transition-colors"
                  >
                    Our Services →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-tech p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-orange)]/10" />
          <div className="relative z-10">
            <h2 className="mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-[var(--text-neutral)] mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with our proven strategies and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] rounded-lg hover:shadow-xl transition-all duration-300 glow-yellow font-bold text-lg"
              >
                Schedule Demo
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] border-2 border-[#FFD700] text-white rounded-lg hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-all duration-200 font-bold text-lg"
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