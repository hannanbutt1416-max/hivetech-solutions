import { motion } from 'motion/react';
import { Users, Target, Zap, Award, TrendingUp, Code, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  const team = [
    {
      name: 'Alex Rivera',
      role: 'Founder & CEO',
      image: 'AR',
      bio: '15+ years in digital transformation',
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Engineering',
      image: 'SC',
      bio: 'Former Google, Stanford CS',
    },
    {
      name: 'Marcus Johnson',
      role: 'Director of SEO',
      image: 'MJ',
      bio: '10+ years SEO expertise',
    },
    {
      name: 'Emily Park',
      role: 'Head of Automation',
      image: 'EP',
      bio: 'Process optimization specialist',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every action measured, every metric optimized, every client success celebrated.',
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'Rapid deployment, quick wins, and long-term sustainable growth.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Industry-leading expertise backed by certifications and proven track record.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Your success is our success. We grow when you grow.',
    },
  ];

  const timeline = [
    { year: '2018', title: 'Founded', description: 'hive tech solutions was born with a mission to democratize digital transformation' },
    { year: '2019', title: 'First 50 Clients', description: 'Achieved 98% client retention rate in year one' },
    { year: '2021', title: 'Automation Platform', description: 'Launched proprietary workflow automation suite' },
    { year: '2023', title: 'Industry Leader', description: 'Recognized as top digital transformation partner for SMBs' },
    { year: '2024', title: 'AI Integration', description: 'Integrated cutting-edge AI into all service offerings' },
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
            <span className="text-[var(--accent-cyan)] text-sm">About Us</span>
          </div>
          <h1 className="mb-6">Building the Future of <span className="text-gradient-lime">Local Business</span></h1>
          <p className="text-xl text-[var(--text-neutral)]">
            We're a team of engineers, marketers, and data scientists obsessed with helping local businesses achieve 
            algorithmic growth through automation, SEO, and custom technology.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[var(--bg-surface)]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-lg text-[var(--text-neutral)] mb-6">
                We believe every local business deserves access to enterprise-level technology and marketing strategies. 
                Our mission is to level the playing field by providing SMBs with automated systems, data-driven SEO, 
                and custom web applications that were once only available to large corporations.
              </p>
              <p className="text-lg text-[var(--text-neutral)]">
                Through algorithmic optimization and intelligent automation, we help businesses achieve exponential 
                growth without exponential effort.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: TrendingUp, value: '247%', label: 'Avg ROI Increase' },
                { icon: Users, value: '500+', label: 'Clients Served' },
                { icon: Code, value: '1,000+', label: 'Automations Built' },
                { icon: Award, value: '98%', label: 'Client Retention' },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="card-tech p-6 text-center"
                  >
                    <Icon className="w-8 h-8 text-[var(--accent-cyan)] mx-auto mb-3" />
                    <div className="data-font text-3xl text-[var(--accent-lime)] mb-2">{stat.value}</div>
                    <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our Values</h2>
          <p className="text-xl text-[var(--text-neutral)]">The principles that guide everything we do</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-tech p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[var(--accent-cyan)]" />
                </div>
                <h3 className="mb-3 text-xl">{value.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-[var(--bg-surface)] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-xl text-[var(--text-neutral)]">Milestones that shaped who we are today</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-[var(--accent-cyan)]/30 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-[var(--accent-lime)] glow-lime" />
                <div className="data-font text-2xl text-[var(--accent-cyan)] mb-2">{item.year}</div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Meet the Team</h2>
          <p className="text-xl text-[var(--text-neutral)]">The experts behind your success</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-tech p-6 text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--accent-cyan)]/20 to-[var(--accent-lime)]/20 flex items-center justify-center text-2xl text-[var(--accent-cyan)] group-hover:scale-110 transition-transform">
                {member.image}
              </div>
              <h3 className="mb-1">{member.name}</h3>
              <div className="text-[var(--accent-cyan)] text-sm mb-2">{member.role}</div>
              <p className="text-[var(--text-secondary)] text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Careers CTA */}
      <section id="careers" className="py-32 bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-primary)] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <Briefcase className="w-16 h-16 text-[var(--accent-lime)] mx-auto mb-6" />
          <h2 className="mb-6">Join Our Team</h2>
          <p className="text-xl text-[var(--text-neutral)] mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and helping businesses grow.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-lime)] text-[var(--bg-primary)] rounded-lg hover:bg-[var(--accent-cyber-lime)] transition-all duration-200 glow-lime"
          >
            View Open Positions
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
