import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      title: 'The Complete Guide to Local SEO in 2025',
      excerpt: 'Everything you need to know about dominating local search results and attracting more customers.',
      category: 'SEO',
      date: '2024-11-08',
      readTime: '12 min read',
      author: 'Sarah Chen',
      slug: 'complete-guide-local-seo-2025',
    },
    {
      title: 'How We Increased Client Leads by 247% with Automation',
      excerpt: 'A deep dive into the automation strategies that transformed our client\'s lead generation.',
      category: 'Automation',
      date: '2024-11-05',
      readTime: '8 min read',
      author: 'Marcus Johnson',
      slug: 'increased-leads-247-automation',
    },
    {
      title: 'Core Web Vitals: The Ultimate Technical SEO Guide',
      excerpt: 'Master Core Web Vitals and improve your site\'s performance, rankings, and user experience.',
      category: 'Technical SEO',
      date: '2024-11-01',
      readTime: '15 min read',
      author: 'Alex Rivera',
      slug: 'core-web-vitals-ultimate-guide',
    },
    {
      title: 'Building Scalable SaaS Platforms: Lessons Learned',
      excerpt: 'Key insights from building dozens of SaaS platforms for startups and enterprises.',
      category: 'Development',
      date: '2024-10-28',
      readTime: '10 min read',
      author: 'Emily Park',
      slug: 'building-scalable-saas-platforms',
    },
    {
      title: '10 Automation Workflows Every Business Needs',
      excerpt: 'Save time and reduce errors with these essential automation workflows for modern businesses.',
      category: 'Automation',
      date: '2024-10-25',
      readTime: '7 min read',
      author: 'Marcus Johnson',
      slug: '10-automation-workflows-every-business-needs',
    },
    {
      title: 'Google My Business Optimization: 2025 Best Practices',
      excerpt: 'Latest strategies for maximizing your GMB profile visibility and engagement.',
      category: 'Local SEO',
      date: '2024-10-20',
      readTime: '9 min read',
      author: 'Sarah Chen',
      slug: 'gmb-optimization-2025-best-practices',
    },
  ];

  const categories = ['All', 'Local SEO', 'Automation', 'Web Apps', 'SaaS', 'Call Center'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <span className="text-[var(--accent-cyan)] text-sm">Blog & Resources</span>
          </div>
          <h1 className="mb-6">
            Insights on <span className="text-gradient-lime">Digital Growth</span>
          </h1>
          <p className="text-xl text-[var(--text-neutral)]">
            Expert strategies, case studies, and actionable insights to help your business thrive
          </p>
        </motion.div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[var(--bg-surface)] border border-[var(--accent-cyan)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
                  activeCategory === category
                    ? 'bg-[#1A1A1A] text-white border-2 border-[#FFD700] shadow-lg scale-110 glow-yellow'
                    : 'bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] hover:border-[#FFD700] hover:bg-[#F5F5F5] hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-12 container mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-tech overflow-hidden max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-[var(--accent-cyan)]/20 to-[var(--accent-lime)]/20 p-12 flex items-center justify-center hex-pattern">
                <div className="text-center">
                  <div className="inline-block px-4 py-2 bg-[var(--accent-cyan)]/20 border border-[var(--accent-cyan)]/30 rounded-full mb-4">
                    <span className="text-[var(--accent-cyan)] text-sm">Featured</span>
                  </div>
                  <div className="data-font text-6xl text-[var(--accent-lime)] mb-4">{filteredPosts[0].readTime}</div>
                  <div className="text-[var(--text-neutral)]">Deep Dive</div>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="inline-block px-3 py-1 bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 rounded-full text-sm text-[var(--accent-cyan)] mb-4">
                  {filteredPosts[0].category}
                </div>
                <h2 className="mb-4">{filteredPosts[0].title}</h2>
                <p className="text-[var(--text-neutral)] mb-6">{filteredPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)] mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(filteredPosts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {filteredPosts[0].readTime}
                  </div>
                </div>
                <div className="text-sm text-[var(--text-secondary)] mb-6">
                  By {filteredPosts[0].author}
                </div>
                <Link
                  to={`/blog/${filteredPosts[0].slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-lime)] text-[var(--bg-primary)] rounded-lg hover:bg-[var(--accent-cyber-lime)] transition-all duration-200"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card-tech p-6 group"
            >
              <div className="inline-block px-3 py-1 bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 rounded-full text-sm text-[var(--accent-cyan)] mb-4">
                {post.category}
              </div>
              <h3 className="mb-3 group-hover:text-[var(--accent-lime)] transition-colors">{post.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>
              <div className="text-xs text-[var(--text-secondary)] mb-4">
                By {post.author}
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="text-[var(--accent-cyan)] group-hover:text-[var(--accent-lime)] transition-colors inline-flex items-center gap-2 text-sm"
              >
                Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-primary)] relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h2 className="mb-6">Stay Updated</h2>
          <p className="text-xl text-[var(--text-neutral)] mb-8 max-w-2xl mx-auto">
            Get the latest insights, strategies, and case studies delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[var(--bg-surface)] border border-[var(--accent-cyan)]/30 rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--accent-cyan)] focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--accent-lime)] text-[var(--bg-primary)] rounded-lg hover:bg-[var(--accent-cyber-lime)] transition-all duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}