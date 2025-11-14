import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <div className="data-font text-[150px] leading-none text-gradient-cyan mb-4">404</div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-[var(--text-neutral)] mb-12"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent-lime)] text-[var(--bg-primary)] rounded-lg hover:bg-[var(--accent-cyber-lime)] transition-all duration-200 glow-lime"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] rounded-lg hover:bg-[var(--accent-cyan)]/10 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 p-8 bg-[var(--bg-surface)] rounded-lg border border-[var(--accent-cyan)]/20"
        >
          <h3 className="mb-4">Popular Pages</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Services', path: '/services' },
              { label: 'Case Studies', path: '/work' },
              { label: 'Pricing', path: '/pricing' },
              { label: 'Contact', path: '/contact' },
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="p-3 bg-[var(--bg-primary)] rounded border border-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)] transition-colors text-[var(--text-neutral)] hover:text-[var(--accent-cyan)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
